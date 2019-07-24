import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AboutUsService } from '../Service/aboutus.service';
import { IAboutUs } from '../model/aboutus';
import { Global } from '../Shared/global';

@Component({
    moduleId: module.id,
    //selector: 'aboutus',
    templateUrl: './aboutus.component.html'
})
export class AboutUsComponent implements OnInit {
    public pageTitle = 'Welcome to Stepping Stones Education Foundation';
    errorMessage: any;
    msg: string;

    public aboutus: IAboutUs[];
    indLoading: boolean = false;

    constructor(private aboutusService: AboutUsService) {

    }

    ngOnInit(): void {
        this.getAboutUsData();
    }

    getAboutUsData() : void {
        this.aboutusService.getAboutUs(Global.BASE_ABOUTUS_ENDPOINT)
            .subscribe((data) => {
                console.log(JSON.stringify(data));
                this.aboutus = data;
            },
            error => this.msg = <any>error);
    }
}
