"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
require("reflect-metadata");
var express_1 = require("express");
exports.router = (0, express_1.Router)();
function controller(routerPrefix) {
    return function (target) {
        console.log(123);
        console.log(Object.getPrototypeOf(target));
        // The methods/properties created through the class syntax are non-enumerable.
        for (var key in Object.getOwnPropertyNames(target.prototype)) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                exports.router.get("".concat(routerPrefix).concat(path), routeHandler);
            }
        }
    };
}
exports.controller = controller;
