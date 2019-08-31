import { Component, OnInit, ViewChild } from "@angular/core"
import { Observable } from 'rxjs/Rx';
import { Global } from './Shared/global';
import { UserComponent } from './admin/user/user.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './Service/user.service';
import { IUser } from './model/user';
import { Router } from '@angular/router';
import { DBOperation } from './Shared/enum';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: "ss-app",
    moduleId: module.id,
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    public pageTitle = 'ADMININSTRATION Login';
    errorMessage: any;
    msg: string;
    public IsAdmin: boolean;
    public IsAdmin1: any = Global.IsAdmin;

    public users: IUser[];
    indLoading: boolean = false;
    userFrm: FormGroup;

    modalTitle: string;
    modalBtnTitle: string;
    dbops: DBOperation;

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router, ) {

    }

    ngOnInit(): void {

        this.userFrm = this.fb.group({
            Id: [''],
            UserName: ['', Validators.required],
            Password: ['', Validators.required]
        });
    }

    Userlogin() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New About Us";
        this.modalBtnTitle = "Add";
        this.userFrm.reset();
        this.modal.open();
    }

    logout() {
        this.IsAdmin = false;
        this.router.navigate(["/home"])
    }

    onSubmit(formData: any) {
        debugger;

        this.userService.GetUser(Global.BASE_USER_ENDPOINT, formData._value).subscribe(
            data => {
                this.users = data;
                if (this.users.length >= 1) //Success
                {
                    this.msg = "Login Successful."
                    this.IsAdmin = true;
                    this.modal.dismiss();
                    //Global.IsAdmin = true;
                
                    this.router.navigate(["/aboutusadmin"])
                }
                else {
                    this.msg = "Invalid Username or Password."
                    this.IsAdmin = false;

                    //Global.IsAdmin = false;
                    
                }
            },
            error => {
                this.msg = error;
            });
    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    }
   
}