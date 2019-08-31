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
import { URLSearchParams } from '@angular/http';
import { IUser } from '../model/user';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    GetUser(url: string, model: any): Observable<IUser[]> {
        debugger;

        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let myParams = new URLSearchParams();
        myParams.append('username', model.UserName);
        myParams.append('password', model.Password);
        let options = new RequestOptions({ headers: myHeaders, params: myParams });

        return this.http.get(url, options)
            .map((res: Response) => <IUser[]>res.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
};


