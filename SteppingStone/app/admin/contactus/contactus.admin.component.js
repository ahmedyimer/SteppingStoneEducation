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
var contactus_service_1 = require("../../Service/contactus.service");
var global_1 = require("../../Shared/global");
var enum_1 = require("../../Shared/enum");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var forms_1 = require("@angular/forms");
var ContactUsAdminComponent = (function () {
    function ContactUsAdminComponent(fb, contactusService) {
        this.fb = fb;
        this.contactusService = contactusService;
        this.pageTitle = 'Contact Us';
        this.indLoading = false;
    }
    ContactUsAdminComponent.prototype.ngOnInit = function () {
        this.contactusFrm = this.fb.group({
            Id: [''],
            Title: ['', forms_1.Validators.required],
            Description: ['', forms_1.Validators.required]
        });
        this.getContactUsData();
    };
    ContactUsAdminComponent.prototype.getContactUsData = function () {
        var _this = this;
        this.contactusService.getContactUs(global_1.Global.BASE_CONTACTUS_ENDPOINT)
            .subscribe(function (data) {
            console.log("getContactUsData from contactus.admin.component: " + JSON.stringify(data));
            _this.contactuses = data;
        }, function (error) { return _this.msg = error; });
    };
    ContactUsAdminComponent.prototype.addContactUs = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Contact Us";
        this.modalBtnTitle = "Add";
        this.contactusFrm.reset();
        this.modal.open();
    };
    ContactUsAdminComponent.prototype.editContactUs = function (id) {
        debugger;
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Contact Us";
        this.modalBtnTitle = "Update";
        this.contactus = this.contactuses.filter(function (x) { return x.Id == id; })[0];
        this.contactusFrm.setValue(this.contactus);
        this.modal.open();
    };
    ContactUsAdminComponent.prototype.deleteContactUs = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.contactus = this.contactuses.filter(function (x) { return x.Id == id; })[0];
        this.contactusFrm.setValue(this.contactus);
        this.modal.open();
    };
    ContactUsAdminComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        debugger;
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this.contactusService.AddContactUs(global_1.Global.BASE_ADD_CONTACTUS_ENDPOINT, formData._value).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) {
                        _this.msg = "Data successfully added.";
                        _this.getContactUsData();
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
                this.contactusService.UpdateContactUs(global_1.Global.BASE_UPDATE_CONTACTUS_ENDPOINT, formData._value).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) {
                        _this.msg = "Data successfully updated.";
                        _this.getContactUsData();
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
                //this.contactusService.DeleteContactUs(Global.BASE_DELETE_CONTACTUS_ENDPOINT, formData._value).subscribe(
                this.contactusService.DeleteContactUs(global_1.Global.BASE_DELETE_CONTACTUS_ENDPOINT, formData._value.Id).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) {
                        _this.msg = "Data successfully deleted.";
                        _this.getContactUsData();
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
    ContactUsAdminComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.contactusFrm.enable() : this.contactusFrm.disable();
    };
    return ContactUsAdminComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], ContactUsAdminComponent.prototype, "modal", void 0);
ContactUsAdminComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'contactus',
        templateUrl: './contactus.admin.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, contactus_service_1.ContactUsService])
], ContactUsAdminComponent);
exports.ContactUsAdminComponent = ContactUsAdminComponent;
//# sourceMappingURL=contactus.admin.component.js.map