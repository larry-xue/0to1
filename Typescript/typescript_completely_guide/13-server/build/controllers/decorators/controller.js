"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
require("reflect-metadata");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
function controller(routerPrefix) {
    return function (target) {
        // The methods/properties created through the class syntax are non-enumerable.
        for (let key in Object.getOwnPropertyNames(target.prototype)) {
            const routeHandler = target.prototype[key];
            console.log(routeHandler);
            const path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                exports.router.get(`${routerPrefix}${path}`, routeHandler);
            }
        }
    };
}
exports.controller = controller;
