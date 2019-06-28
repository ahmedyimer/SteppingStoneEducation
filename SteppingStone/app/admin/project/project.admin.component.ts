import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ProjectService } from '../../Service/project.service';
import { IProject} from '../../model/project';
import { Global } from '../../Shared/global';
import { DBOperation } from '../../Shared/enum';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    //selector: 'project',
    templateUrl: './project.admin.component.html'
})
export class ProjectAdminComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    public pageTitle = 'Project';
    errorMessage: any;
    msg: string;

    projects: IProject[];
    project: IProject;

    indLoading: boolean = false;

    modalTitle: string;
    modalBtnTitle: string;
    projectFrm: FormGroup;
    dbops: DBOperation;

    constructor(private fb: FormBuilder, private projectService: ProjectService) {

    }

    ngOnInit(): void {

        this.projectFrm = this.fb.group({
            Id: [''],
            Title: ['', Validators.required],
            Description: ['', Validators.required]
        });

        this.getProjectData();
    }

    getProjectData() : void {

        this.projectService.getProjects(Global.BASE_PROJECT_ENDPOINT)
            .subscribe((data) => {
                console.log("getProjectData from project.admin.component: " + JSON.stringify(data));
                this.projects = data;
            },
            error => this.msg = <any>error);

       
      
    }

    addProject() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Project";
        this.modalBtnTitle = "Add";
        this.projectFrm.reset();
        this.modal.open();

    }

    editProject(id: number) {
        debugger;
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Project";
        this.modalBtnTitle = "Update";
        this.project = this.projects.filter(x => x.Id == id)[0];
        this.projectFrm.setValue(this.project);
        this.modal.open();
    }

    deleteProject(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.project = this.projects.filter(x => x.Id == id)[0];
        this.projectFrm.setValue(this.project);
        this.modal.open();
    }

    onSubmit(formData: any) {
        this.msg = "";
        debugger;
        switch (this.dbops) {
            case DBOperation.create:
                this.projectService.AddProject(Global.BASE_ADD_PROJECT_ENDPOINT, formData._value).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully added.";
                            this.getProjectData();
                        }
                        else {
                            this.msg = "There is some issue in creating record, please contact to system administrator!"
                        }
                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;

            case DBOperation.update:
                this.projectService.UpdateProject(Global.BASE_UPDATE_PROJECT_ENDPOINT, formData._value).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully updated.";
                            this.getProjectData();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }
                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;

            case DBOperation.delete:
                //this.projectService.DeleteProject(Global.BASE_DELETE_PROJECT_ENDPOINT, formData._value).subscribe(
                this.projectService.DeleteProject1(Global.BASE_DELETE_PROJECT_ENDPOINT1, formData._value.Id).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            this.getProjectData();
                        }
                        else {
                            this.msg = "There is some issue in deleting a record, please contact to system administrator!"
                        }
                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
               break;
        }
    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.projectFrm.enable() : this.projectFrm.disable();
    }
}
