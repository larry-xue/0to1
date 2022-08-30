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
var index_1 = require("./decorators/index");
function requireAuth(req, res, next) {
    // express的独立请求也支持类似中间件的方式
    // 通过next函数来去决定是否跳转到下一个路由
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not Permitted');
}
var RootController = /** @class */ (function () {
    function RootController() {
    }
    Object.defineProperty(RootController.prototype, "getRoot", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (req, res) {
            if (req.session && req.session.loggedIn) {
                res.send("\n      <div>\n        <div>You are logged in</div>\n        <a href='/auth/logout'>logout</a>\n      </div>\n    ");
            }
            else {
                res.send("\n      <div>\n        <div>You are not login</div>\n        <a href='/auth/login'>login</a>\n      </div>\n    ");
            }
        }
    });
    Object.defineProperty(RootController.prototype, "getProtected", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (req, res) {
            res.send('Welcome to protected route, logged in user');
        }
    });
    __decorate([
        (0, index_1.get)('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        (0, index_1.get)('/protected'),
        (0, index_1.use)(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        (0, index_1.controller)('')
    ], RootController);
    return RootController;
}());
