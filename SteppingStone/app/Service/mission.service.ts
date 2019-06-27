import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import "rxjs/Rx";
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

import { IMission } from '../model/mission';

@Injectable()
export class MissionService {

    constructor(private http: Http) { }

    getMission(url: string): Observable<IMission[]> {
        debugger;

        return this.http.get(url)
            .map((res: Response) => <IMission[]>res.json())
           // .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    AddMission(url: string, model: any): Observable<any> {
        debugger;

        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    UpdateMission(url: string, model: any): Observable<any> {
        debugger;

        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    DeleteMission(url: string, model: any): Observable<any> {
        debugger;

        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        debugger;
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


   




};


