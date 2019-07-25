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
var ourapproach_service_1 = require("../Service/ourapproach.service");
var global_1 = require("../Shared/global");
var OurApproachComponent = (function () {
    function OurApproachComponent(ourapproachService) {
        this.ourapproachService = ourapproachService;
        this.pageTitle = 'Our Approach';
        this.indLoading = false;
    }
    OurApproachComponent.prototype.ngOnInit = function () {
        this.getOurApproachData();
    };
    OurApproachComponent.prototype.getOurApproachData = function () {
        var _this = this;
        this.ourapproachService.getAOurApproach(global_1.Global.BASE_OURAPPROACH_ENDPOINT)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.ourapproaches = data;
        }, function (error) { return _this.msg = error; });
    };
    return OurApproachComponent;
}());
OurApproachComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'ourapproach',
        templateUrl: './ourapproach.component.html'
    }),
    __metadata("design:paramtypes", [ourapproach_service_1.OurApproachService])
], OurApproachComponent);
exports.OurApproachComponent = OurApproachComponent;
//# sourceMappingURL=ourapproach.component.js.map