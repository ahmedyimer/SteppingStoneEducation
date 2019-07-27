"use strict";
var router_1 = require("@angular/router");
//UI
var home_component_1 = require("./home/home.component");
var aboutus_component_1 = require("./aboutus/aboutus.component");
var mission_component_1 = require("./mission/mission.component");
var project_component_1 = require("./project/project.component");
var ourapproach_component_1 = require("./ourapproach/ourapproach.component");
var howtoinvolve_component_1 = require("./howtoinvolve/howtoinvolve.component");
var contactus_component_1 = require("./contactus/contactus.component");
//Admin
var aboutus_admin_component_1 = require("./admin/aboutus/aboutus.admin.component");
var mission_admin_component_1 = require("./admin/mission/mission.admin.component");
var project_admin_component_1 = require("./admin/project/project.admin.component");
var ourapproach_admin_component_1 = require("./admin/ourapproach/ourapproach.admin.component");
var howtoinvolve_admin_component_1 = require("./admin/howtoinvolve/howtoinvolve.admin.component");
var contactus_admin_component_1 = require("./admin/contactus/contactus.admin.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'aboutus', component: aboutus_component_1.AboutUsComponent },
    { path: 'mission', component: mission_component_1.MissionComponent },
    { path: 'project', component: project_component_1.ProjectComponent },
    { path: 'ourapproach', component: ourapproach_component_1.OurApproachComponent },
    { path: 'howtoinvolve', component: howtoinvolve_component_1.HowToInvolveComponent },
    { path: 'contactus', component: contactus_component_1.ContactUsComponent },
    { path: 'aboutusadmin', component: aboutus_admin_component_1.AboutUsAdminComponent },
    { path: 'missionadmin', component: mission_admin_component_1.MissionAdminComponent },
    { path: 'projectadmin', component: project_admin_component_1.ProjectAdminComponent },
    { path: 'ourapproachadmin', component: ourapproach_admin_component_1.OurApproachAdminComponent },
    { path: 'howtoinvolveadmin', component: howtoinvolve_admin_component_1.HowToInvolveAdminComponent },
    { path: 'contactusadmin', component: contactus_admin_component_1.ContactUsAdminComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map