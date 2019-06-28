import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ProjectService } from '../Service/project.service';
import { IProject } from '../model/project';
import { Global } from '../Shared/global';

@Component({
    moduleId: module.id,
    //selector: 'project',
    templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
    public pageTitle = 'Project';
    msg: string;

    projects: IProject[];
    indLoading: boolean = false;

    constructor(private projectService: ProjectService) {

    }

    ngOnInit(): void {
        this.getProjectData();
    }

    getProjectData() : void {

        this.projectService.getProjects(Global.BASE_PROJECT_ENDPOINT)
            .subscribe((data) => {
                console.log("getProjectData from project.component: " + JSON.stringify(data));
                this.projects = data;
            },
            error => this.msg = <any>error);
    }
}
