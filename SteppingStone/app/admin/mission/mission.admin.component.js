"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var mission_service_1 = require("../../Service/mission.service");
var global_1 = require("../../Shared/global");
var enum_1 = require("../../Shared/enum");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var forms_1 = require("@angular/forms");
var MissionAdminComponent = (function () {
    function MissionAdminComponent(fb, missionService) {
        this.fb = fb;
        this.missionService = missionService;
        this.pageTitle = 'Mission';
        this.indLoading = false;
    }
    MissionAdminComponent.prototype.ngOnInit = function () {
        this.missionFrm = this.fb.group({
            Id: [''],
            Title: ['', forms_1.Validators.required],
            Description: ['', forms_1.Validators.required]
        });
        this.getMissionData();
    };
    MissionAdminComponent.prototype.getMissionData = function () {
        var _this = this;
        this.missionService.getMission(global_1.Global.BASE_MISSION_ENDPOINT)
            .subscribe(function (data) {
            console.log("getMissionData from mission.admin.component: " + JSON.stringify(data));
            _this.missions = data;
        }, function (error) { return _this.msg = error; });
    };
    MissionAdminComponent.prototype.addMission = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Mission";
        this.modalBtnTitle = "Add";
        this.missionFrm.reset();
        this.modal.open();
    };
    MissionAdminComponent.prototype.editMission = function (id) {
        debugger;
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Mission";
        this.modalBtnTitle = "Update";
        this.mission = this.missions.filter(function (x) { return x.Id == id; })[0];
        this.missionFrm.setValue(this.mission);
        this.modal.open();
    };
    MissionAdminComponent.prototype.deleteMission = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.mission = this.missions.filter(function (x) { return x.Id == id; })[0];
        this.missionFrm.setValue(this.mission);
        this.modal.open();
    };
    MissionAdminComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        debugger;
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this.missionService.AddMission(global_1.Global.BASE_ADD_MISSION_ENDPOINT, formData._value).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) {
                        _this.msg = "Data successfully added.";
                        _this.getMissionData();
                    }
                    else {
                        _this.msg = "There is some issue in creating record, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.update:
                this.missionService.UpdateMission(global_1.Global.BASE_UPDATE_MISSION_ENDPOINT, formData._value).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) {
                        _this.msg = "Data successfully updated.";
                        _this.getMissionData();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.delete:
                //this.missionService.DeleteMission(Global.BASE_DELETE_MISSION_ENDPOINT, formData._value).subscribe(
                this.missionService.DeleteMission1(global_1.Global.BASE_DELETE_MISSION_ENDPOINT1, formData._value.Id).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) {
                        _this.msg = "Data successfully deleted.";
                        _this.getMissionData();
                    }
                    else {
                        _this.msg = "There is some issue in deleting a record, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
        }
    };
    MissionAdminComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.missionFrm.enable() : this.missionFrm.disable();
    };
    return MissionAdminComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], MissionAdminComponent.prototype, "modal", void 0);
MissionAdminComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'mission',
        templateUrl: './mission.admin.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, mission_service_1.MissionService])
], MissionAdminComponent);
exports.MissionAdminComponent = MissionAdminComponent;
//# sourceMappingURL=mission.admin.component.js.map