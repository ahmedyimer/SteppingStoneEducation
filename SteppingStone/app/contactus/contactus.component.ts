import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ContactUsService } from '../Service/contactus.service';
import { IContactUs } from '../model/contactus';
import { Global } from '../Shared/global';

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

    constructor(private contactusService: ContactUsService) {

    }

    ngOnInit(): void {
        this.getContactUsData();
    }

    getContactUsData() : void {
        this.contactusService.getContactUs(Global.BASE_CONTACTUS_ENDPOINT)
            .subscribe((data) => {
                console.log(JSON.stringify(data));
                this.contactus = data;
            },
            error => this.msg = <any>error);
    }
}
