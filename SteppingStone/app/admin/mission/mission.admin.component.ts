import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MissionService } from '../../Service/mission.service';
import { IMission} from '../../model/mission';
import { Global } from '../../Shared/global';
import { DBOperation } from '../../Shared/enum';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    //selector: 'mission',
    templateUrl: './mission.admin.component.html'
})
export class MissionAdminComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    public pageTitle = 'Mission1';
    errorMessage: any;
    msg: string;

    missions: IMission[];
    mission: IMission;

    indLoading: boolean = false;

    modalTitle: string;
    modalBtnTitle: string;
    missionFrm: FormGroup;
    dbops: DBOperation;

    constructor(private fb: FormBuilder, private missionService: MissionService) {

    }

    ngOnInit(): void {

        this.missionFrm = this.fb.group({
            Id: [''],
            Title: ['', Validators.required],
            Description: ['', Validators.required]
        });

        this.getMissionData();
    }

    getMissionData() : void {

        this.missionService.getMission(Global.BASE_MISSION_ENDPOINT)
            .subscribe((data) => {
                console.log("getMissionData from mission.admin.component: " + JSON.stringify(data));
                this.missions = data;
            },
            error => this.msg = <any>error);

       
      
    }

    addMission() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Mission";
        this.modalBtnTitle = "Add";
        this.missionFrm.reset();
        this.modal.open();

    }

    editMission(id: number) {
        debugger;
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Mission";
        this.modalBtnTitle = "Update";
        this.mission = this.missions.filter(x => x.Id == id)[0];
        this.missionFrm.setValue(this.mission);
        this.modal.open();
    }

    deleteMission(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.mission = this.missions.filter(x => x.Id == id)[0];
        this.missionFrm.setValue(this.mission);
        this.modal.open();
    }

    onSubmit(formData: any) {
        this.msg = "";
        debugger;
        switch (this.dbops) {
            case DBOperation.create:
                this.missionService.AddMission(Global.BASE_ADD_MISSION_ENDPOINT, formData._value).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully added.";
                            this.getMissionData();
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
                this.missionService.UpdateMission(Global.BASE_UPDATE_MISSION_ENDPOINT, formData._value).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully updated.";
                            this.getMissionData();
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
                this.missionService.DeleteMission(Global.BASE_DELETE_MISSION_ENDPOINT, formData._value).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            this.getMissionData();
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
        isEnable ? this.missionFrm.enable() : this.missionFrm.disable();
    }
}
