webpackJsonp(["counter.module"],{

/***/ "../../../../../src/app/counter/counter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/counter/counter.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Counter {{count}}</h1>\n<p>Increment: <button (click)=\"increment()\">+</button></p>\n<p>Decrement: <button (click)=\"decrement()\">-</button></p>\n"

/***/ }),

/***/ "../../../../../src/app/counter/counter.component.ts":
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
var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.count = 0;
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent.prototype.increment = function () {
        return this.count += 1;
    };
    CounterComponent.prototype.decrement = function () {
        return this.count -= 1;
    };
    CounterComponent = __decorate([
        core_1.Component({
            selector: 'app-counter',
            template: __webpack_require__("../../../../../src/app/counter/counter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/counter/counter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());
exports.CounterComponent = CounterComponent;


/***/ }),

/***/ "../../../../../src/app/counter/counter.module.ts":
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
var counter_component_1 = __webpack_require__("../../../../../src/app/counter/counter.component.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var CounterModule = /** @class */ (function () {
    function CounterModule() {
    }
    CounterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: counter_component_1.CounterComponent
                    }
                ])
            ],
            declarations: [counter_component_1.CounterComponent]
        })
    ], CounterModule);
    return CounterModule;
}());
exports.CounterModule = CounterModule;


/***/ })

});
//# sourceMappingURL=counter.module.chunk.js.map