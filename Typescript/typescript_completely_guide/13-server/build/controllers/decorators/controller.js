"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
function controller(routerPrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        // The methods/properties created through the class syntax are non-enumerable.
        for (var _i = 0, _a = Object.getOwnPropertyNames(target.prototype); _i < _a.length; _i++) {
            var key = _a[_i];
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                router.get("".concat(routerPrefix).concat(path), routeHandler);
            }
        }
    };
}
exports.controller = controller;
