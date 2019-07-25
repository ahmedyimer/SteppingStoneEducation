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
var ourapproach_service_1 = require("../../Service/ourapproach.service");
var global_1 = require("../../Shared/global");
var enum_1 = require("../../Shared/enum");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var forms_1 = require("@angular/forms");
var OurApproachAdminComponent = (function () {
    function OurApproachAdminComponent(fb, ourapproachService) {
        this.fb = fb;
        this.ourapproachService = ourapproachService;
        this.pageTitle = 'Our Approach';
        this.indLoading = false;
    }
    OurApproachAdminComponent.prototype.ngOnInit = function () {
        this.ourapproachFrm = this.fb.group({
            Id: [''],
            Title: ['', forms_1.Validators.required],
            Description: ['', forms_1.Validators.required]
        });
        this.getOurApproachData();
    };
    OurApproachAdminComponent.prototype.getOurApproachData = function () {
        var _this = this;
        this.ourapproachService.getAOurApproach(global_1.Global.BASE_OURAPPROACH_ENDPOINT)
            .subscribe(function (data) {
            console.log("getOurApproachData from ourapproach.admin.component: " + JSON.stringify(data));
            _this.ourapproaches = data;
        }, function (error) { return _this.msg = error; });
    };
    OurApproachAdminComponent.prototype.addOurApproach = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Approach Us";
        this.modalBtnTitle = "Add";
        this.ourapproachFrm.reset();
        this.modal.open();
    };
    OurApproachAdminComponent.prototype.editOurApproach = function (id) {
        debugger;
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Our Approach";
        this.modalBtnTitle = "Update";
        this.ourapproach = this.ourapproaches.filter(function (x) { return x.Id == id; })[0];
        this.ourapproachFrm.setValue(this.ourapproach);
        this.modal.open();
    };
    OurApproachAdminComponent.prototype.deleteOurApproach = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.ourapproach = this.ourapproaches.filter(function (x) { return x.Id == id; })[0];
        this.ourapproachFrm.setValue(this.ourapproach);
        this.modal.open();
    };
    OurApproachAdminComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        debugger;
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this.ourapproachService.AddOurApproach(global_1.Global.BASE_ADD_OURAPPROACH_ENDPOINT, formData._value).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) {
                        _this.msg = "Data successfully added.";
                        _this.getOurApproachData();
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
                this.ourapproachService.UpdateOurApproach(global_1.Global.BASE_UPDATE_OURAPPROACH_ENDPOINT, formData._value).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) {
                        _this.msg = "Data successfully updated.";
                        _this.getOurApproachData();
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
                //this.ourapproachService.DeleteOurApproach(Global.BASE_DELETE_OURAPPROACH_ENDPOINT, formData._value).subscribe(
                this.ourapproachService.DeleteOurApproach(global_1.Global.BASE_DELETE_OURAPPROACH_ENDPOINT, formData._value.Id).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) {
                        _this.msg = "Data successfully deleted.";
                        _this.getOurApproachData();
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
    OurApproachAdminComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.ourapproachFrm.enable() : this.ourapproachFrm.disable();
    };
    return OurApproachAdminComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], OurApproachAdminComponent.prototype, "modal", void 0);
OurApproachAdminComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'ourapproach',
        templateUrl: './ourapproach.admin.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, ourapproach_service_1.OurApproachService])
], OurApproachAdminComponent);
exports.OurApproachAdminComponent = OurApproachAdminComponent;
//# sourceMappingURL=ourapproach.admin.component.js.map