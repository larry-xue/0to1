"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
require("reflect-metadata");
var express_1 = require("express");
exports.router = (0, express_1.Router)();
function controller(routerPrefix) {
    return function (target) {
        // The methods/properties created through the class syntax are non-enumerable.
        for (var _i = 0, _a = Object.getOwnPropertyNames(target.prototype); _i < _a.length; _i++) {
            var key = _a[_i];
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            console.log(routeHandler, path);
            if (path) {
                exports.router.get("".concat(routerPrefix).concat(path), routeHandler);
            }
        }
    };
}
exports.controller = controller;
