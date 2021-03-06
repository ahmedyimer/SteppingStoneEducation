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
var user_service_1 = require("../../Service/user.service");
var global_1 = require("../../Shared/global");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var UserComponent = (function () {
    function UserComponent(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.pageTitle = 'ADMININSTRATION Login';
        this.indLoading = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.userFrm = this.fb.group({
            Id: [''],
            UserName: ['', forms_1.Validators.required],
            Password: ['', forms_1.Validators.required]
        });
    };
    UserComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        debugger;
        this.userService.GetUser(global_1.Global.BASE_USER_ENDPOINT, formData._value).subscribe(function (data) {
            _this.users = data;
            if (_this.users.length >= 1) {
                _this.msg = "Login Successful.";
                global_1.Global.IsAdmin = true;
                _this.IsAdmin = true;
                _this.router.navigate(["/home"]);
            }
            else {
                _this.msg = "Invalid Username or Password.";
                global_1.Global.IsAdmin = false;
                _this.IsAdmin = false;
            }
        }, function (error) {
            _this.msg = error;
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'user',
        templateUrl: './user.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService, router_1.Router])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map