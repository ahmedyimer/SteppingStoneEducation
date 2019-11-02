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
var global_1 = require("./Shared/global");
var forms_1 = require("@angular/forms");
var user_service_1 = require("./Service/user.service");
var router_1 = require("@angular/router");
var enum_1 = require("./Shared/enum");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var AppComponent = (function () {
    function AppComponent(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.pageTitle = 'ADMININSTRATION Login';
        this.IsAdmin1 = global_1.Global.IsAdmin;
        this.indLoading = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userFrm = this.fb.group({
            Id: [''],
            UserName: ['', forms_1.Validators.required],
            Password: ['', forms_1.Validators.required]
        });
    };
    AppComponent.prototype.Userlogin = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New About Us";
        this.modalBtnTitle = "Add";
        this.userFrm.reset();
        this.modal.open();
    };
    AppComponent.prototype.logout = function () {
        this.IsAdmin = false;
        this.msg = "";
        this.router.navigate(["/home"]);
    };
    AppComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        debugger;
        this.userService.GetUser(global_1.Global.BASE_USER_ENDPOINT, formData._value).subscribe(function (data) {
            _this.users = data;
            if (_this.users.length >= 1) {
                _this.msg = "Login Successful.";
                _this.IsAdmin = true;
                _this.modal.dismiss();
                //Global.IsAdmin = true;
                _this.router.navigate(["/aboutusadmin"]);
            }
            else {
                _this.msg = "Invalid Username or Password.";
                _this.IsAdmin = false;
            }
        }, function (error) {
            _this.msg = error;
        });
    };
    AppComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], AppComponent.prototype, "modal", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "ss-app",
        moduleId: module.id,
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map