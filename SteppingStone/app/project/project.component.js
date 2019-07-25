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
var project_service_1 = require("../Service/project.service");
var global_1 = require("../Shared/global");
var ProjectComponent = (function () {
    function ProjectComponent(projectService) {
        this.projectService = projectService;
        this.pageTitle = 'Our Projects';
        this.indLoading = false;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.getProjectData();
    };
    ProjectComponent.prototype.getProjectData = function () {
        var _this = this;
        this.projectService.getProjects(global_1.Global.BASE_PROJECT_ENDPOINT)
            .subscribe(function (data) {
            console.log("getProjectData from project.component: " + JSON.stringify(data));
            _this.projects = data;
        }, function (error) { return _this.msg = error; });
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'project',
        templateUrl: './project.component.html'
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectComponent);
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map