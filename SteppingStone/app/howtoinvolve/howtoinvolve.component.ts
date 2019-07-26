import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HowToInvolveService } from '../Service/howtoinvolve.service';
import { IHowToInvolve } from '../model/howtoinvolve';
import { Global } from '../Shared/global';

@Component({
    moduleId: module.id,
    //selector: 'howtoinvolve',
    templateUrl: './howtoinvolve.component.html'
})
export class HowToInvolveComponent implements OnInit {
    public pageTitle = 'How To Involve';
    errorMessage: any;
    msg: string;

    public howtoinvolve: IHowToInvolve[];
    indLoading: boolean = false;

    constructor(private howtoinvolveService: HowToInvolveService) {

    }

    ngOnInit(): void {
        this.getHowToInvolveData();
    }

    getHowToInvolveData(): void {
        this.howtoinvolveService.getHowToInvolve(Global.BASE_HOWTOINVOLVE_ENDPOINT)
            .subscribe((data) => {
                console.log(JSON.stringify(data));
                this.howtoinvolve = data;
            },
            error => this.msg = <any>error);
    }
}
