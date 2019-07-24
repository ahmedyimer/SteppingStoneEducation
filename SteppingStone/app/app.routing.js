"use strict";
var router_1 = require("@angular/router");
var aboutus_component_1 = require("./aboutus/aboutus.component");
var home_component_1 = require("./home/home.component");
var mission_component_1 = require("./mission/mission.component");
var project_component_1 = require("./project/project.component");
var mission_admin_component_1 = require("./admin/mission/mission.admin.component");
var project_admin_component_1 = require("./admin/project/project.admin.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'aboutus', component: aboutus_component_1.AboutUsComponent },
    { path: 'mission', component: mission_component_1.MissionComponent },
    { path: 'project', component: project_component_1.ProjectComponent },
    { path: 'missionadmin', component: mission_admin_component_1.MissionAdminComponent },
    { path: 'projectadmin', component: project_admin_component_1.ProjectAdminComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map