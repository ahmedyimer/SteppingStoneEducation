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
var project_service_1 = require("../../Service/project.service");
var global_1 = require("../../Shared/global");
var enum_1 = require("../../Shared/enum");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var forms_1 = require("@angular/forms");
var ProjectAdminComponent = /** @class */ (function () {
    function ProjectAdminComponent(fb, projectService) {
        this.fb = fb;
        this.projectService = projectService;
        this.pageTitle = 'Project';
        this.indLoading = false;
    }
    ProjectAdminComponent.prototype.ngOnInit = function () {
        this.projectFrm = this.fb.group({
            Id: [''],
            Title: ['', forms_1.Validators.required],
            Description: ['', forms_1.Validators.required]
        });
        this.getProjectData();
    };
    ProjectAdminComponent.prototype.getProjectData = function () {
        var _this = this;
        this.projectService.getProjects(global_1.Global.BASE_PROJECT_ENDPOINT)
            .subscribe(function (data) {
            console.log("getProjectData from project.admin.component: " + JSON.stringify(data));
            _this.projects = data;
        }, function (error) { return _this.msg = error; });
    };
    ProjectAdminComponent.prototype.addProject = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Project";
        this.modalBtnTitle = "Add";
        this.projectFrm.reset();
        this.modal.open();
    };
    ProjectAdminComponent.prototype.editProject = function (id) {
        debugger;
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Project";
        this.modalBtnTitle = "Update";
        this.project = this.projects.filter(function (x) { return x.Id == id; })[0];
        this.projectFrm.setValue(this.project);
        this.modal.open();
    };
    ProjectAdminComponent.prototype.deleteProject = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.project = this.projects.filter(function (x) { return x.Id == id; })[0];
        this.projectFrm.setValue(this.project);
        this.modal.open();
    };
    ProjectAdminComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        debugger;
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this.projectService.AddProject(global_1.Global.BASE_ADD_PROJECT_ENDPOINT, formData._value).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) //Success
                     {
                        _this.msg = "Data successfully added.";
                        _this.getProjectData();
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
                this.projectService.UpdateProject(global_1.Global.BASE_UPDATE_PROJECT_ENDPOINT, formData._value).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) //Success
                     {
                        _this.msg = "Data successfully updated.";
                        _this.getProjectData();
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
                //this.projectService.DeleteProject(Global.BASE_DELETE_PROJECT_ENDPOINT, formData._value).subscribe(
                this.projectService.DeleteProject1(global_1.Global.BASE_DELETE_PROJECT_ENDPOINT1, formData._value.Id).subscribe(function (data) {
                    console.log(data);
                    // if (data == 'ok') //Success
                    if (data.Id == 0) //Success
                     {
                        _this.msg = "Data successfully deleted.";
                        _this.getProjectData();
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
    ProjectAdminComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.projectFrm.enable() : this.projectFrm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], ProjectAdminComponent.prototype, "modal", void 0);
    ProjectAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            //selector: 'project',
            templateUrl: './project.admin.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, project_service_1.ProjectService])
    ], ProjectAdminComponent);
    return ProjectAdminComponent;
}());
exports.ProjectAdminComponent = ProjectAdminComponent;
//# sourceMappingURL=project.admin.component.js.map