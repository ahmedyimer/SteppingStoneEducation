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
var sponsorstudent_service_1 = require("../Service/sponsorstudent.service");
var global_1 = require("../Shared/global");
var forms_1 = require("@angular/forms");
var SponsorStudentComponent = (function () {
    function SponsorStudentComponent(fb, sponsorstudentservice) {
        this.fb = fb;
        this.sponsorstudentservice = sponsorstudentservice;
        this.pageTitle = 'Sponsor a Student';
        this.indLoading = false;
    }
    SponsorStudentComponent.prototype.ngOnInit = function () {
        this.sponsorStudentFrm = this.fb.group({
            Id: [''],
            NumberOfStudent: ['1', forms_1.Validators.required],
            Currency: ['USD', forms_1.Validators.required],
            Email: ['', forms_1.Validators.required],
            FirstName: ['', forms_1.Validators.required],
            LastName: ['', forms_1.Validators.required],
            Address1: ['', forms_1.Validators.required],
            Address2: [''],
            Country: ['', forms_1.Validators.required],
            City: ['', forms_1.Validators.required],
            State: ['', forms_1.Validators.required],
            PostalZipCode: ['', forms_1.Validators.required],
            Message: ['']
        });
    };
    SponsorStudentComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        debugger;
        this.sponsorstudentservice.AddSponsorStudent(global_1.Global.BASE_SPONSORSTUDENT_MESSAGE_ENDPOINT, formData._value).subscribe(function (data) {
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
    return SponsorStudentComponent;
}());
SponsorStudentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'sponsorastudent',
        templateUrl: './sponsorstudent.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, sponsorstudent_service_1.SponsorStudentService])
], SponsorStudentComponent);
exports.SponsorStudentComponent = SponsorStudentComponent;
//# sourceMappingURL=sponsorstudent.component.js.map