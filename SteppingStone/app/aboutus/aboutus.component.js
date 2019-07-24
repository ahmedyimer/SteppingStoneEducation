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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var aboutus_service_1 = require("../Service/aboutus.service");
var global_1 = require("../Shared/global");
var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(aboutusService) {
        this.aboutusService = aboutusService;
        this.pageTitle = 'Welcome to Stepping Stones Education Foundation';
        this.indLoading = false;
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        this.getAboutUsData();
    };
    AboutUsComponent.prototype.getAboutUsData = function () {
        var _this = this;
        this.aboutusService.getAboutUs(global_1.Global.BASE_ABOUTUS_ENDPOINT)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.aboutus = data;
        }, function (error) { return _this.msg = error; });
    };
    AboutUsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            //selector: 'aboutus',
            templateUrl: './aboutus.component.html'
        }),
        __metadata("design:paramtypes", [aboutus_service_1.AboutUsService])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
exports.AboutUsComponent = AboutUsComponent;
//# sourceMappingURL=aboutus.component.js.map