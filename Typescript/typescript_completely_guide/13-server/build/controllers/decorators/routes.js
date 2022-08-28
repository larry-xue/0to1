"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const express_1 = require("express");
require("reflect-metadata");
const router = (0, express_1.Router)();
function get(path) {
    return function (target, key, desc) {
        Reflect.defineMetadata('path', path, target, key);
    };
}
exports.get = get;
