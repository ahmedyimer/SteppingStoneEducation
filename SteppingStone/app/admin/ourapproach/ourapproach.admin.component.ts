import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { OurApproachService } from '../../Service/ourapproach.service';
import { IOurApproach} from '../../model/ourapproach';
import { Global } from '../../Shared/global';
import { DBOperation } from '../../Shared/enum';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    //selector: 'ourapproach',
    templateUrl: './ourapproach.admin.component.html'
})
export class OurApproachAdminComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    public pageTitle = 'Our Approach';
    errorMessage: any;
    msg: string;

    ourapproaches: IOurApproach[];
    ourapproach: IOurApproach;

    indLoading: boolean = false;

    modalTitle: string;
    modalBtnTitle: string;
    ourapproachFrm: FormGroup;
    dbops: DBOperation;

    constructor(private fb: FormBuilder, private ourapproachService: OurApproachService) {

    }

    ngOnInit(): void {

        this.ourapproachFrm = this.fb.group({
            Id: [''],
            Title: ['', Validators.required],
            Description: ['', Validators.required]
        });

        this.getOurApproachData();
    }

    getOurApproachData() : void {

        this.ourapproachService.getAOurApproach(Global.BASE_OURAPPROACH_ENDPOINT)
            .subscribe((data) => {
                console.log("getOurApproachData from ourapproach.admin.component: " + JSON.stringify(data));
                this.ourapproaches = data;
            },
            error => this.msg = <any>error);
    }

    addOurApproach() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Approach Us";
        this.modalBtnTitle = "Add";
        this.ourapproachFrm.reset();
        this.modal.open();
    }

    editOurApproach(id: number) {
        debugger;
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Our Approach";
        this.modalBtnTitle = "Update";
        this.ourapproach = this.ourapproaches.filter(x => x.Id == id)[0];
        this.ourapproachFrm.setValue(this.ourapproach);
        this.modal.open();
    }

    deleteOurApproach(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.ourapproach = this.ourapproaches.filter(x => x.Id == id)[0];
        this.ourapproachFrm.setValue(this.ourapproach);
        this.modal.open();
    }

    onSubmit(formData: any) {
        this.msg = "";
        debugger;
        switch (this.dbops) {
            case DBOperation.create:
                this.ourapproachService.AddOurApproach(Global.BASE_ADD_OURAPPROACH_ENDPOINT, formData._value).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully added.";
                            this.getOurApproachData();
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
                this.ourapproachService.UpdateOurApproach(Global.BASE_UPDATE_OURAPPROACH_ENDPOINT, formData._value).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully updated.";
                            this.getOurApproachData();
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
                //this.ourapproachService.DeleteOurApproach(Global.BASE_DELETE_OURAPPROACH_ENDPOINT, formData._value).subscribe(
                this.ourapproachService.DeleteOurApproach(Global.BASE_DELETE_OURAPPROACH_ENDPOINT, formData._value.Id).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            this.getOurApproachData();
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
        isEnable ? this.ourapproachFrm.enable() : this.ourapproachFrm.disable();
    }
}
