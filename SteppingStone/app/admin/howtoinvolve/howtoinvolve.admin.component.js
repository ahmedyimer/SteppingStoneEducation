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
var howtoinvolve_service_1 = require("../../Service/howtoinvolve.service");
var global_1 = require("../../Shared/global");
var enum_1 = require("../../Shared/enum");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var forms_1 = require("@angular/forms");
var HowToInvolveAdminComponent = (function () {
    function HowToInvolveAdminComponent(fb, howtoinvolveService) {
        this.fb = fb;
        this.howtoinvolveService = howtoinvolveService;
        this.pageTitle = 'How To Involve';
        this.indLoading = false;
    }
    HowToInvolveAdminComponent.prototype.ngOnInit = function () {
        this.howtoinvolveFrm = this.fb.group({
            Id: [''],
            Title: ['', forms_1.Validators.required],
            Description: ['', forms_1.Validators.required]
        });
        this.getHowToInvolveData();
    };
    HowToInvolveAdminComponent.prototype.getHowToInvolveData = function () {
        var _this = this;
        this.howtoinvolveService.getHowToInvolve(global_1.Global.BASE_HOWTOINVOLVE_ENDPOINT)
            .subscribe(function (data) {
            console.log("getHowToInvolveData from howtoinvolve.admin.component: " + JSON.stringify(data));
            _this.howtoinvolves = data;
        }, function (error) { return _this.msg = error; });
    };
    HowToInvolveAdminComponent.prototype.addHowToInvolve = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New How To Involve";
        this.modalBtnTitle = "Add";
        this.howtoinvolveFrm.reset();
        this.modal.open();
    };
    HowToInvolveAdminComponent.prototype.editHowToInvolve = function (id) {
        debugger;
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit How To Involve";
        this.modalBtnTitle = "Update";
        this.howtoinvolve = this.howtoinvolves.filter(function (x) { return x.Id == id; })[0];
        this.howtoinvolveFrm.setValue(this.howtoinvolve);
        this.modal.open();
    };
    HowToInvolveAdminComponent.prototype.deleteHowToInvolve = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.howtoinvolve = this.howtoinvolves.filter(function (x) { return x.Id == id; })[0];
        this.howtoinvolveFrm.setValue(this.howtoinvolve);
        this.modal.open();
    };
    HowToInvolveAdminComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        debugger;
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this.howtoinvolveService.AddHowToInvolve(global_1.Global.BASE_ADD_HOWTOINVOLVE_ENDPOINT, formData._value).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) {
                        _this.msg = "Data successfully added.";
                        _this.getHowToInvolveData();
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
                this.howtoinvolveService.UpdateHowToInvolve(global_1.Global.BASE_UPDATE_HOWTOINVOLVE_ENDPOINT, formData._value).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) {
                        _this.msg = "Data successfully updated.";
                        _this.getHowToInvolveData();
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
                //this.howtoinvolveService.DeleteHowToInvolve(Global.BASE_DELETE_HOWTOINVOLVE_ENDPOINT, formData._value).subscribe(
                this.howtoinvolveService.DeleteHowToInvolve(global_1.Global.BASE_DELETE_HOWTOINVOLVE_ENDPOINT, formData._value.Id).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) {
                        _this.msg = "Data successfully deleted.";
                        _this.getHowToInvolveData();
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
    HowToInvolveAdminComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.howtoinvolveFrm.enable() : this.howtoinvolveFrm.disable();
    };
    return HowToInvolveAdminComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], HowToInvolveAdminComponent.prototype, "modal", void 0);
HowToInvolveAdminComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'howtoinvolve',
        templateUrl: './howtoinvolve.admin.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, howtoinvolve_service_1.HowToInvolveService])
], HowToInvolveAdminComponent);
exports.HowToInvolveAdminComponent = HowToInvolveAdminComponent;
//# sourceMappingURL=howtoinvolve.admin.component.js.map