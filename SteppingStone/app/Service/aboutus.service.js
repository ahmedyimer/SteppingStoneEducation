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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/Rx");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var AboutUsService = (function () {
    function AboutUsService(http) {
        this.http = http;
    }
    AboutUsService.prototype.getAboutUs = function (url) {
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AboutUsService.prototype.AddAboutUs = function (url, model) {
        debugger;
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AboutUsService.prototype.UpdateAboutUs = function (url, model) {
        debugger;
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AboutUsService.prototype.DeleteAboutUs1 = function (url, model) {
        debugger;
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AboutUsService.prototype.DeleteAboutUs = function (url, Id) {
        debugger;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, params: { Id: Id } });
        return this.http.post(url, null, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AboutUsService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return AboutUsService;
}());
AboutUsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AboutUsService);
exports.AboutUsService = AboutUsService;
;
//# sourceMappingURL=aboutus.service.js.map