import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ProjectService } from '../Service/project.service';
import { IProject } from '../model/project';
import { Global } from '../Shared/global';

@Component({
    moduleId: module.id,
    //selector: 'mission',
    templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
    public pageTitle = 'Project';
    msg: string;

    project: IProject[];
    indLoading: boolean = false;

    constructor(private projectService: ProjectService) {

    }

    ngOnInit(): void {
        this.getProjectData();
    }

    getProjectData() : void {

        this.projectService.getProjects(Global.BASE_MISSION_ENDPOINT)
            .subscribe((data) => {
                console.log("getProjectData from project.component: " + JSON.stringify(data));
                this.project = data;
            },
            error => this.msg = <any>error);
    }
}
