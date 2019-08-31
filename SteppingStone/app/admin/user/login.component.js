"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var login_service_1 = require("../../Service/login.service");
var global_1 = require("../../Shared/global");
var forms_1 = require("@angular/forms");
var LoginComponent = (function () {
    function LoginComponent(fb, loginService) {
        this.fb = fb;
        this.loginService = loginService;
        this.pageTitle = 'Login';
        this.indLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginFrm = this.fb.group({
            Id: [''],
            UserName: ['', forms_1.Validators.required],
            Password: ['', forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        debugger;
        this.loginService.GetUser(global_1.Global.BASE_LOGIN_MESSAGE_ENDPOINT, formData._value).subscribe(function (data) {
            if (data.Id == 0) {
                _this.msg = "Logged in successfully.";
            }
            else {
                _this.msg = "Invalid username or password!";
            }
        }, function (error) {
            _this.msg = error;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'login',
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map