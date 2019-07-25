import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { OurApproachService } from '../Service/ourapproach.service';
import { IOurApproach } from '../model/ourapproach';
import { Global } from '../Shared/global';

@Component({
    moduleId: module.id,
    //selector: 'ourapproach',
    templateUrl: './ourapproach.component.html'
})
export class OurApproachComponent implements OnInit {
    public pageTitle = 'Our Approach';
    errorMessage: any;
    msg: string;

    public ourapproaches: IOurApproach[];
    indLoading: boolean = false;

    constructor(private ourapproachService: OurApproachService) {

    }

    ngOnInit(): void {
        this.getOurApproachData();
    }

    getOurApproachData() : void {
        this.ourapproachService.getAOurApproach(Global.BASE_OURAPPROACH_ENDPOINT)
            .subscribe((data) => {
                console.log(JSON.stringify(data));
                this.ourapproaches = data;
            },
            error => this.msg = <any>error);
    }
}
