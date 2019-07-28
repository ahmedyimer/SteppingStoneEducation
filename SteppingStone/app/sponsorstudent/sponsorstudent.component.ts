import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SponsorStudentService } from '../Service/sponsorstudent.service';
import { IContactUs } from '../model/contactus';
import { ISponsorStudent } from '../model/sponsorstudent';
import { Global } from '../Shared/global';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    //selector: 'sponsorastudent',
    templateUrl: './sponsorstudent.component.html'
})
export class SponsorStudentComponent implements OnInit {
    public pageTitle = 'Sponsor a Student';
    errorMessage: any;
    msg: string;

    public contactus: IContactUs[];
    indLoading: boolean = false;
    sponsorStudentFrm: FormGroup;

    constructor(private fb: FormBuilder, private sponsorstudentservice: SponsorStudentService) {

    }

    ngOnInit(): void {

        this.sponsorStudentFrm = this.fb.group({
            Id: [''],
            NumberOfStudent: ['1', Validators.required],
            Currency: ['USD', Validators.required],
            Email: ['', Validators.required],
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            Address1: ['', Validators.required],
            Address2: [''],
            Country: ['', Validators.required],
            City: ['', Validators.required],
            State: ['', Validators.required],
            PostalZipCode: ['', Validators.required],
            Message: ['']
        });
    }

    onSubmit(formData: any) {
        debugger;

        this.sponsorstudentservice.AddSponsorStudent(Global.BASE_SPONSORSTUDENT_MESSAGE_ENDPOINT, formData._value).subscribe(
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



