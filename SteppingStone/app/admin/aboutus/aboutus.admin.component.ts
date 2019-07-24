import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AboutUsService } from '../../Service/aboutus.service';
import { IAboutUs} from '../../model/aboutus';
import { Global } from '../../Shared/global';
import { DBOperation } from '../../Shared/enum';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    //selector: 'aboutus',
    templateUrl: './aboutus.admin.component.html'
})
export class AboutUsAdminComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    public pageTitle = 'About Us';
    errorMessage: any;
    msg: string;

    aboutuses: IAboutUs[];
    aboutus: IAboutUs;

    indLoading: boolean = false;

    modalTitle: string;
    modalBtnTitle: string;
    aboutusFrm: FormGroup;
    dbops: DBOperation;

    constructor(private fb: FormBuilder, private aboutusService: AboutUsService) {

    }

    ngOnInit(): void {

        this.aboutusFrm = this.fb.group({
            Id: [''],
            Title: ['', Validators.required],
            Description: ['', Validators.required]
        });

        this.getAboutUsData();
    }

    getAboutUsData() : void {

        this.aboutusService.getAboutUs(Global.BASE_ABOUTUS_ENDPOINT)
            .subscribe((data) => {
                console.log("getAboutUsData from aboutus.admin.component: " + JSON.stringify(data));
                this.aboutuses = data;
            },
            error => this.msg = <any>error);
    }

    addAboutUs() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New About Us";
        this.modalBtnTitle = "Add";
        this.aboutusFrm.reset();
        this.modal.open();
    }

    editAboutUs(id: number) {
        debugger;
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Mission";
        this.modalBtnTitle = "Update";
        this.aboutus = this.aboutuses.filter(x => x.Id == id)[0];
        this.aboutusFrm.setValue(this.aboutus);
        this.modal.open();
    }

    deleteAboutUs(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.aboutus = this.aboutuses.filter(x => x.Id == id)[0];
        this.aboutusFrm.setValue(this.aboutus);
        this.modal.open();
    }

    onSubmit(formData: any) {
        this.msg = "";
        debugger;
        switch (this.dbops) {
            case DBOperation.create:
                this.aboutusService.AddAboutUs(Global.BASE_ADD_ABOUTUS_ENDPOINT, formData._value).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully added.";
                            this.getAboutUsData();
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
                this.aboutusService.UpdateAboutUs(Global.BASE_UPDATE_ABOUTUS_ENDPOINT, formData._value).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully updated.";
                            this.getAboutUsData();
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
                //this.aboutusService.DeleteAboutUs(Global.BASE_DELETE_ABOUTUS_ENDPOINT, formData._value).subscribe(
                this.aboutusService.DeleteAboutUs(Global.BASE_DELETE_ABOUTUS_ENDPOINT, formData._value.Id).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            this.getAboutUsData();
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
        isEnable ? this.aboutusFrm.enable() : this.aboutusFrm.disable();
    }
}
