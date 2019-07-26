import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import "rxjs/Rx";
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

import { IContactUs } from '../model/contactus';

@Injectable()
export class ContactUsService {

    constructor(private http: Http) { }

    getContactUs(url: string): Observable<IContactUs[]> {
        return this.http.get(url)
            .map((res: Response) => <IContactUs[]>res.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    AddContactUs(url: string, model: any): Observable<any> {
        debugger;

        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    UpdateContactUs(url: string, model: any): Observable<any> {
        debugger;

        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    DeleteContactUs1(url: string, model: any): Observable<any> {
        debugger;

        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    DeleteContactUs(url: string, Id: number): Observable<any> {
        debugger;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, params: { Id: Id } });
        return this.http.post(url, null, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
};


