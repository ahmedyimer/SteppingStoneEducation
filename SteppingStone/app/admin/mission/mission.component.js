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
var mission_service_1 = require("../../Service/mission.service");
var global_1 = require("../../Shared/global");
var MissionAdminComponent = (function () {
    function MissionAdminComponent(missionService) {
        this.missionService = missionService;
        this.pageTitle = 'Mission';
        this.indLoading = false;
    }
    MissionAdminComponent.prototype.ngOnInit = function () {
        this.getMissionData();
    };
    MissionAdminComponent.prototype.getMissionData = function () {
        var _this = this;
        this.missionService.getMission(global_1.Global.BASE_MISSION_ENDPOINT)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.aboutus = data;
        }, function (error) { return _this.msg = error; });
    };
    return MissionAdminComponent;
}());
MissionAdminComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'mission',
        templateUrl: './mission.component.html'
    }),
    __metadata("design:paramtypes", [mission_service_1.MissionService])
], MissionAdminComponent);
exports.MissionAdminComponent = MissionAdminComponent;
//# sourceMappingURL=mission.component.js.map