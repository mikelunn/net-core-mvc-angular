webpackJsonp(["weather.module"],{

/***/ "../../../../../src/app/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"model.length > 0; else empty\" class=\"table\">\n  <thead>\n  <tr>\n    <th>Date</th>\n    <th>Temp. (C)</th>\n    <th>Temp. (F)</th>\n    <th>Summary</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let item of model\">\n    <td>{{ item.dateFormatted }}</td>\n    <td>{{ item.temperatureC }}</td>\n    <td>{{ item.temperatureF }}</td>\n    <td>{{ item.summary }}</td>\n  </tr>\n  </tbody>\n</table>\n<ng-template #empty>No data</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var preload_service_1 = __webpack_require__("../../../../../src/app/core/services/preload.service.ts");
var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(preloadService) {
        this.preloadService = preloadService;
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this.model = this.preloadService.data;
    };
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'app-weather',
            template: __webpack_require__("../../../../../src/app/weather/weather.component.html"),
            styles: [__webpack_require__("../../../../../src/app/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [preload_service_1.PreloadService])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;


/***/ }),

/***/ "../../../../../src/app/weather/weather.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var weather_component_1 = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var WeatherModule = /** @class */ (function () {
    function WeatherModule() {
    }
    WeatherModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: weather_component_1.WeatherComponent
                    }
                ])
            ],
            declarations: [weather_component_1.WeatherComponent]
        })
    ], WeatherModule);
    return WeatherModule;
}());
exports.WeatherModule = WeatherModule;


/***/ })

});
//# sourceMappingURL=weather.module.chunk.js.map