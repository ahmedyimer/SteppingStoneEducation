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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var aboutus_service_1 = require("../../Service/aboutus.service");
var global_1 = require("../../Shared/global");
var enum_1 = require("../../Shared/enum");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var forms_1 = require("@angular/forms");
var AboutUsAdminComponent = /** @class */ (function () {
    function AboutUsAdminComponent(fb, aboutusService) {
        this.fb = fb;
        this.aboutusService = aboutusService;
        this.pageTitle = 'About Us';
        this.indLoading = false;
    }
    AboutUsAdminComponent.prototype.ngOnInit = function () {
        this.aboutusFrm = this.fb.group({
            Id: [''],
            Title: ['', forms_1.Validators.required],
            Description: ['', forms_1.Validators.required]
        });
        this.getAboutUsData();
    };
    AboutUsAdminComponent.prototype.getAboutUsData = function () {
        var _this = this;
        this.aboutusService.getAboutUs(global_1.Global.BASE_ABOUTUS_ENDPOINT)
            .subscribe(function (data) {
            console.log("getAboutUsData from aboutus.admin.component: " + JSON.stringify(data));
            _this.aboutuses = data;
        }, function (error) { return _this.msg = error; });
    };
    AboutUsAdminComponent.prototype.addAboutUs = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New About Us";
        this.modalBtnTitle = "Add";
        this.aboutusFrm.reset();
        this.modal.open();
    };
    AboutUsAdminComponent.prototype.editAboutUs = function (id) {
        debugger;
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Mission";
        this.modalBtnTitle = "Update";
        this.aboutus = this.aboutuses.filter(function (x) { return x.Id == id; })[0];
        this.aboutusFrm.setValue(this.aboutus);
        this.modal.open();
    };
    AboutUsAdminComponent.prototype.deleteAboutUs = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.aboutus = this.aboutuses.filter(function (x) { return x.Id == id; })[0];
        this.aboutusFrm.setValue(this.aboutus);
        this.modal.open();
    };
    AboutUsAdminComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        debugger;
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this.aboutusService.AddAboutUs(global_1.Global.BASE_ADD_ABOUTUS_ENDPOINT, formData._value).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) //Success
                     {
                        _this.msg = "Data successfully added.";
                        _this.getAboutUsData();
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
                this.aboutusService.UpdateAboutUs(global_1.Global.BASE_UPDATE_ABOUTUS_ENDPOINT, formData._value).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) //Success
                     {
                        _this.msg = "Data successfully updated.";
                        _this.getAboutUsData();
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
                //this.aboutusService.DeleteAboutUs(Global.BASE_DELETE_ABOUTUS_ENDPOINT, formData._value).subscribe(
                this.aboutusService.DeleteAboutUs(global_1.Global.BASE_DELETE_ABOUTUS_ENDPOINT, formData._value.Id).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) //Success
                     {
                        _this.msg = "Data successfully deleted.";
                        _this.getAboutUsData();
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
    AboutUsAdminComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.aboutusFrm.enable() : this.aboutusFrm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], AboutUsAdminComponent.prototype, "modal", void 0);
    AboutUsAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            //selector: 'aboutus',
            templateUrl: './aboutus.admin.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, aboutus_service_1.AboutUsService])
    ], AboutUsAdminComponent);
    return AboutUsAdminComponent;
}());
exports.AboutUsAdminComponent = AboutUsAdminComponent;
//# sourceMappingURL=aboutus.admin.component.js.map