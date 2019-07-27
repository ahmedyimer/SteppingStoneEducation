import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ContactUsService } from '../Service/contactus.service';
import { IContactUs } from '../model/contactus';
import { IContactUsMessage } from '../model/contactusmessage';
import { Global } from '../Shared/global';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    //selector: 'contactus',
    templateUrl: './contactus.component.html'
})
export class ContactUsComponent implements OnInit {
    public pageTitle = 'Contact Us';
    errorMessage: any;
    msg: string;

    public contactus: IContactUs[];
    indLoading: boolean = false;
    contactusFrm: FormGroup;

    constructor(private fb: FormBuilder, private contactusService: ContactUsService) {

    }

    ngOnInit(): void {

        this.contactusFrm = this.fb.group({
            Id: [''],
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            Email: ['', Validators.required],
            Message: ['', Validators.required]
        });

        this.getContactUsData();
    }

    getContactUsData(): void {
        this.contactusService.getContactUs(Global.BASE_CONTACTUS_ENDPOINT)
            .subscribe((data) => {
                console.log(JSON.stringify(data));
                this.contactus = data;
            },
            error => this.msg = <any>error);
    }

    onSubmit(formData: any) {
        debugger;

        this.contactusService.AddContactUs(Global.BASE_CONTACTUS_MESSAGE_ENDPOINT, formData._value).subscribe(
            data => {
                if (data.Id == 0) //Success
                {
                    this.msg = "Data successfully added.";
                }
                else {
                    this.msg = "There is some issue in creating record, please contact to system administrator!"
                }
            },
            error => {
                this.msg = error;
            });
    }

}



