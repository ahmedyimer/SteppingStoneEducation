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
var contactus_service_1 = require("../Service/contactus.service");
var global_1 = require("../Shared/global");
var forms_1 = require("@angular/forms");
var ContactUsComponent = (function () {
    function ContactUsComponent(fb, contactusService) {
        this.fb = fb;
        this.contactusService = contactusService;
        this.pageTitle = 'Contact Us';
        this.indLoading = false;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.contactusFrm = this.fb.group({
            Id: [''],
            FirstName: ['', forms_1.Validators.required],
            LastName: ['', forms_1.Validators.required],
            Email: ['', forms_1.Validators.required],
            Message: ['', forms_1.Validators.required]
        });
        this.getContactUsData();
    };
    ContactUsComponent.prototype.getContactUsData = function () {
        var _this = this;
        this.contactusService.getContactUs(global_1.Global.BASE_CONTACTUS_ENDPOINT)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.contactus = data;
        }, function (error) { return _this.msg = error; });
    };
    ContactUsComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        debugger;
        this.contactusService.AddContactUs(global_1.Global.BASE_CONTACTUS_MESSAGE_ENDPOINT, formData._value).subscribe(function (data) {
            if (data.Id == 0) {
                _this.msg = "Data successfully added.";
            }
            else {
                _this.msg = "There is some issue in creating record, please contact to system administrator!";
            }
        }, function (error) {
            _this.msg = error;
        });
    };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'contactus',
        templateUrl: './contactus.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, contactus_service_1.ContactUsService])
], ContactUsComponent);
exports.ContactUsComponent = ContactUsComponent;
//# sourceMappingURL=contactus.component.js.map