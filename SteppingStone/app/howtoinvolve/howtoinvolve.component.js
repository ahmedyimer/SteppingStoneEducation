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
var howtoinvolve_service_1 = require("../Service/howtoinvolve.service");
var global_1 = require("../Shared/global");
var HowToInvolveComponent = (function () {
    function HowToInvolveComponent(howtoinvolveService) {
        this.howtoinvolveService = howtoinvolveService;
        this.pageTitle = 'How To Involve';
        this.indLoading = false;
    }
    HowToInvolveComponent.prototype.ngOnInit = function () {
        this.getHowToInvolveData();
    };
    HowToInvolveComponent.prototype.getHowToInvolveData = function () {
        var _this = this;
        this.howtoinvolveService.getHowToInvolve(global_1.Global.BASE_HOWTOINVOLVE_ENDPOINT)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.howtoinvolve = data;
        }, function (error) { return _this.msg = error; });
    };
    return HowToInvolveComponent;
}());
HowToInvolveComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'howtoinvolve',
        templateUrl: './howtoinvolve.component.html'
    }),
    __metadata("design:paramtypes", [howtoinvolve_service_1.HowToInvolveService])
], HowToInvolveComponent);
exports.HowToInvolveComponent = HowToInvolveComponent;
//# sourceMappingURL=howtoinvolve.component.js.map