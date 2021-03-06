"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./home/home.component");
//About Us
var aboutus_component_1 = require("./aboutus/aboutus.component");
var aboutus_admin_component_1 = require("./admin/aboutus/aboutus.admin.component");
var aboutus_service_1 = require("./Service/aboutus.service");
//Mission
var mission_component_1 = require("./mission/mission.component");
var mission_admin_component_1 = require("./admin/mission/mission.admin.component");
var mission_service_1 = require("./Service/mission.service");
//Project
var project_component_1 = require("./project/project.component");
var project_admin_component_1 = require("./admin/project/project.admin.component");
var project_service_1 = require("./Service/project.service");
//Project
var ourapproach_component_1 = require("./ourapproach/ourapproach.component");
var ourapproach_admin_component_1 = require("./admin/ourapproach/ourapproach.admin.component");
var ourapproach_service_1 = require("./Service/ourapproach.service");
//How To Involve
var howtoinvolve_component_1 = require("./howtoinvolve/howtoinvolve.component");
var howtoinvolve_admin_component_1 = require("./admin/howtoinvolve/howtoinvolve.admin.component");
var howtoinvolve_service_1 = require("./Service/howtoinvolve.service");
//Contact Us
var contactus_component_1 = require("./contactus/contactus.component");
var contactus_admin_component_1 = require("./admin/contactus/contactus.admin.component");
var contactus_service_1 = require("./Service/contactus.service");
//Sponsor student
var sponsorstudent_component_1 = require("./sponsorstudent/sponsorstudent.component");
var sponsorstudent_service_1 = require("./Service/sponsorstudent.service");
//Volunteer
var volunteer_component_1 = require("./volunteer/volunteer.component");
var volunteer_service_1 = require("./Service/volunteer.service");
//User
var user_component_1 = require("./admin/user/user.component");
var user_service_1 = require("./Service/user.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing, ng2_bs3_modal_1.Ng2Bs3ModalModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, aboutus_component_1.AboutUsComponent, aboutus_admin_component_1.AboutUsAdminComponent, mission_component_1.MissionComponent, project_component_1.ProjectComponent, howtoinvolve_component_1.HowToInvolveComponent, contactus_component_1.ContactUsComponent, sponsorstudent_component_1.SponsorStudentComponent, volunteer_component_1.VolunteerComponent,
            ourapproach_component_1.OurApproachComponent, mission_admin_component_1.MissionAdminComponent, project_admin_component_1.ProjectAdminComponent, ourapproach_admin_component_1.OurApproachAdminComponent, howtoinvolve_admin_component_1.HowToInvolveAdminComponent, contactus_admin_component_1.ContactUsAdminComponent, user_component_1.UserComponent],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, aboutus_service_1.AboutUsService, mission_service_1.MissionService, project_service_1.ProjectService, ourapproach_service_1.OurApproachService, howtoinvolve_service_1.HowToInvolveService, contactus_service_1.ContactUsService, sponsorstudent_service_1.SponsorStudentService, volunteer_service_1.VolunteerService, user_service_1.UserService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map