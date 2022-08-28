"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
function controller(routerPrefix) {
    return function (target) {
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata('path', target.prototype, key);
        }
    };
}
exports.controller = controller;
