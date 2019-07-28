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
var volunteer_service_1 = require("../Service/volunteer.service");
var global_1 = require("../Shared/global");
var forms_1 = require("@angular/forms");
var VolunteerComponent = (function () {
    function VolunteerComponent(fb, volunteerservice) {
        this.fb = fb;
        this.volunteerservice = volunteerservice;
        this.pageTitle = 'Volunteer for our summer enrichment program';
        this.indLoading = false;
    }
    VolunteerComponent.prototype.ngOnInit = function () {
        this.volunteerFrm = this.fb.group({
            Id: [''],
            FirstName: ['', forms_1.Validators.required],
            LastName: ['', forms_1.Validators.required],
            StartDate: ['', forms_1.Validators.required],
            EndDate: ['', forms_1.Validators.required],
            Email: ['', forms_1.Validators.required],
            Country: ['', forms_1.Validators.required],
            TypeOfPlacement: ['', forms_1.Validators.required],
            TellUs: ['']
        });
    };
    VolunteerComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        debugger;
        this.volunteerservice.AddVolunteer(global_1.Global.BASE_VOLUNTEER_MESSAGE_ENDPOINT, formData._value).subscribe(function (data) {
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
    return VolunteerComponent;
}());
VolunteerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'volunteer',
        templateUrl: './volunteer.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, volunteer_service_1.VolunteerService])
], VolunteerComponent);
exports.VolunteerComponent = VolunteerComponent;
//# sourceMappingURL=volunteer.component.js.map