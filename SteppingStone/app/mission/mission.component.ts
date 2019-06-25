import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MissionService } from '../Service/mission.service';
import { IMission } from '../model/mission';
import { Global } from '../Shared/global';

@Component({
    moduleId: module.id,
    //selector: 'mission',
    templateUrl: './mission.component.html'
})
export class MissionComponent implements OnInit {
    public pageTitle = 'Mission';
    msg: string;

    missions: IMission[];
    indLoading: boolean = false;

    constructor(private missionService: MissionService) {

    }

    ngOnInit(): void {
        this.getMissionData();
    }

    getMissionData() : void {

        this.missionService.getMission(Global.BASE_MISSION_ENDPOINT)
            .subscribe((data) => {
                console.log("getMissionData from mission.component: " + JSON.stringify(data));
                this.missions = data;
            },
            error => this.msg = <any>error);
    }
}
