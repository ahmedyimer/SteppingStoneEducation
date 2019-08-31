import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../../Service/user.service';
import { IUser } from '../../model/user';
import { ISponsorStudent } from '../../model/sponsorstudent';
import { Global } from '../../Shared/global';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    //selector: 'user',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    public pageTitle = 'ADMININSTRATION Login';
    errorMessage: any;
    msg: string;
    public IsAdmin: boolean;

    public users: IUser[];
    indLoading: boolean = false;
    userFrm: FormGroup;

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router,) {

    }

    ngOnInit(): void {

        this.userFrm = this.fb.group({
            Id: [''],
            UserName: ['', Validators.required],
            Password: ['', Validators.required]
        });
    }

    onSubmit(formData: any) {
        debugger;

        this.userService.GetUser(Global.BASE_USER_ENDPOINT, formData._value).subscribe(
            data => {
               this.users = data;
                if (this.users.length >= 1) //Success
                {
                    this.msg = "Login Successful."
                    Global.IsAdmin = true;
                    this.IsAdmin = true;
                    this.router.navigate(["/home"])
                }
                else {
                    this.msg = "Invalid Username or Password."
                    Global.IsAdmin = false;
                    this.IsAdmin = false;
                }
            },
            error => {
                this.msg = error;
            });
    }

}
