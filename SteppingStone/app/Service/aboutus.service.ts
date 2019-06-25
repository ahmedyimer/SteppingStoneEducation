import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import "rxjs/Rx";
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

import { IAboutUs } from '../model/aboutus';

@Injectable()
export class AboutUsService {

    constructor(private http: Http) { }

    getAboutUs(url: string): Observable<IAboutUs[]> {
        debugger;

        return this.http.get(url)
            .map((res: Response) => <IAboutUs[]>res.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }



    private handleError(error: Response) {
        debugger;
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


   




};


