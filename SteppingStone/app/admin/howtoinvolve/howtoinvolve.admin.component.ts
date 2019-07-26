import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HowToInvolveService } from '../../Service/howtoinvolve.service';
import { IHowToInvolve} from '../../model/howtoinvolve';
import { Global } from '../../Shared/global';
import { DBOperation } from '../../Shared/enum';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    //selector: 'howtoinvolve',
    templateUrl: './howtoinvolve.admin.component.html'
})
export class HowToInvolveAdminComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    public pageTitle = 'How To Involve';
    errorMessage: any;
    msg: string;

    howtoinvolves: IHowToInvolve[];
    howtoinvolve: IHowToInvolve;

    indLoading: boolean = false;

    modalTitle: string;
    modalBtnTitle: string;
    howtoinvolveFrm: FormGroup;
    dbops: DBOperation;

    constructor(private fb: FormBuilder, private howtoinvolveService: HowToInvolveService) {

    }

    ngOnInit(): void {

        this.howtoinvolveFrm = this.fb.group({
            Id: [''],
            Title: ['', Validators.required],
            Description: ['', Validators.required]
        });

        this.getHowToInvolveData();
    }

    getHowToInvolveData() : void {

        this.howtoinvolveService.getHowToInvolve(Global.BASE_HOWTOINVOLVE_ENDPOINT)
            .subscribe((data) => {
                console.log("getHowToInvolveData from howtoinvolve.admin.component: " + JSON.stringify(data));
                this.howtoinvolves = data;
            },
            error => this.msg = <any>error);
    }

    addHowToInvolve() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New How To Involve";
        this.modalBtnTitle = "Add";
        this.howtoinvolveFrm.reset();
        this.modal.open();
    }

    editHowToInvolve(id: number) {
        debugger;
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit How To Involve";
        this.modalBtnTitle = "Update";
        this.howtoinvolve = this.howtoinvolves.filter(x => x.Id == id)[0];
        this.howtoinvolveFrm.setValue(this.howtoinvolve);
        this.modal.open();
    }

    deleteHowToInvolve(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.howtoinvolve = this.howtoinvolves.filter(x => x.Id == id)[0];
        this.howtoinvolveFrm.setValue(this.howtoinvolve);
        this.modal.open();
    }

    onSubmit(formData: any) {
        this.msg = "";
        debugger;
        switch (this.dbops) {
            case DBOperation.create:
                this.howtoinvolveService.AddHowToInvolve(Global.BASE_ADD_HOWTOINVOLVE_ENDPOINT, formData._value).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully added.";
                            this.getHowToInvolveData();
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
                this.howtoinvolveService.UpdateHowToInvolve(Global.BASE_UPDATE_HOWTOINVOLVE_ENDPOINT, formData._value).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully updated.";
                            this.getHowToInvolveData();
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
                //this.howtoinvolveService.DeleteHowToInvolve(Global.BASE_DELETE_HOWTOINVOLVE_ENDPOINT, formData._value).subscribe(
                this.howtoinvolveService.DeleteHowToInvolve(Global.BASE_DELETE_HOWTOINVOLVE_ENDPOINT, formData._value.Id).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            this.getHowToInvolveData();
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
        isEnable ? this.howtoinvolveFrm.enable() : this.howtoinvolveFrm.disable();
    }
}
