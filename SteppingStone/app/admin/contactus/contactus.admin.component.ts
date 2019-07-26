import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ContactUsService } from '../../Service/contactus.service';
import { IContactUs } from '../../model/contactus';
import { Global } from '../../Shared/global';
import { DBOperation } from '../../Shared/enum';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    //selector: 'contactus',
    templateUrl: './contactus.admin.component.html'
})
export class ContactUsAdminComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    public pageTitle = 'Contact Us';
    errorMessage: any;
    msg: string;

    contactuses: IContactUs[];
    contactus: IContactUs;

    indLoading: boolean = false;

    modalTitle: string;
    modalBtnTitle: string;
    contactusFrm: FormGroup;
    dbops: DBOperation;

    constructor(private fb: FormBuilder, private contactusService: ContactUsService) {

    }

    ngOnInit(): void {

        this.contactusFrm = this.fb.group({
            Id: [''],
            Title: ['', Validators.required],
            Description: ['', Validators.required]
        });

        this.getContactUsData();
    }

    getContactUsData() : void {

        this.contactusService.getContactUs(Global.BASE_CONTACTUS_ENDPOINT)
            .subscribe((data) => {
                console.log("getContactUsData from contactus.admin.component: " + JSON.stringify(data));
                this.contactuses = data;
            },
            error => this.msg = <any>error);
    }

    addContactUs() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Contact Us";
        this.modalBtnTitle = "Add";
        this.contactusFrm.reset();
        this.modal.open();
    }

    editContactUs(id: number) {
        debugger;
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Contact Us";
        this.modalBtnTitle = "Update";
        this.contactus = this.contactuses.filter(x => x.Id == id)[0];
        this.contactusFrm.setValue(this.contactus);
        this.modal.open();
    }

    deleteContactUs(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.contactus = this.contactuses.filter(x => x.Id == id)[0];
        this.contactusFrm.setValue(this.contactus);
        this.modal.open();
    }

    onSubmit(formData: any) {
        this.msg = "";
        debugger;
        switch (this.dbops) {
            case DBOperation.create:
                this.contactusService.AddContactUs(Global.BASE_ADD_CONTACTUS_ENDPOINT, formData._value).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully added.";
                            this.getContactUsData();
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
                this.contactusService.UpdateContactUs(Global.BASE_UPDATE_CONTACTUS_ENDPOINT, formData._value).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully updated.";
                            this.getContactUsData();
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
                //this.contactusService.DeleteContactUs(Global.BASE_DELETE_CONTACTUS_ENDPOINT, formData._value).subscribe(
                this.contactusService.DeleteContactUs(Global.BASE_DELETE_CONTACTUS_ENDPOINT, formData._value.Id).subscribe(
                    data => {
                        console.log(data);
                        // if (data == 'ok') //Success
                        if (data.Id == 0) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            this.getContactUsData();
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
        isEnable ? this.contactusFrm.enable() : this.contactusFrm.disable();
    }
}
