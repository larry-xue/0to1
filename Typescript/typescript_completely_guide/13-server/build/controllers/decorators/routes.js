"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
var Method_1 = require("./Method");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', target, key);
        };
    };
}
exports.get = routeBinder(Method_1.Method.get);
exports.post = routeBinder(Method_1.Method.post);
exports.put = routeBinder(Method_1.Method.put);
exports.del = routeBinder(Method_1.Method.del);
exports.patch = routeBinder(Method_1.Method.patch);
