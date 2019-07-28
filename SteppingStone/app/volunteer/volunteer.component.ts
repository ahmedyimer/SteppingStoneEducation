import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { VolunteerService } from '../Service/volunteer.service';
import { IVolunteer } from '../model/volunteer';
import { Global } from '../Shared/global';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    //selector: 'volunteer',
    templateUrl: './volunteer.component.html'
})
export class VolunteerComponent implements OnInit {
    public pageTitle = 'Volunteer for our summer enrichment program';
    errorMessage: any;
    msg: string;

    public volunteer: IVolunteer[];
    indLoading: boolean = false;
    volunteerFrm: FormGroup;

    constructor(private fb: FormBuilder, private volunteerservice: VolunteerService) {

    }

    ngOnInit(): void {

        this.volunteerFrm = this.fb.group({
            Id: [''],
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            StartDate: ['', Validators.required],
            EndDate: ['', Validators.required],
            Email: ['', Validators.required],
            Country: ['', Validators.required],
            TypeOfPlacement: ['', Validators.required],
            TellUs: ['']
        });
    }

    onSubmit(formData: any) {
        debugger;

        this.volunteerservice.AddVolunteer(Global.BASE_VOLUNTEER_MESSAGE_ENDPOINT, formData._value).subscribe(
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



