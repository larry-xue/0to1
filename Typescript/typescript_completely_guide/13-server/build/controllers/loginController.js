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
// need add /index, maybe i need adjust some tsconfig
var index_1 = require("./decorators/index");
function logger(req, res, next) {
    console.log('request was made!!!');
    next();
}
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    Object.defineProperty(LoginController.prototype, "getLogin", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (req, res) {
            res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" />\n      </div> \n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\"/>\n      </div>\n      <button>Submit</button>\n    </form>\n    ");
        }
    });
    Object.defineProperty(LoginController.prototype, "postLogin", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (req, res) {
            var _a = req.body, email = _a.email, password = _a.password;
            if (email === 'hi@hi.com' && password === '123456') {
                // mark this person as logged in
                // redirect them to the root route
                req.session = { loggedIn: true };
                res.redirect('/');
            }
            else {
                res.send('Invalid email or password');
            }
        }
    });
    Object.defineProperty(LoginController.prototype, "getLogout", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (req, res) {
            req.session = undefined;
            res.redirect('/');
        }
    });
    __decorate([
        (0, index_1.get)('/login'),
        (0, index_1.use)(logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        (0, index_1.post)('/login'),
        (0, index_1.bodyValidator)('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postLogin", null);
    __decorate([
        (0, index_1.get)('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogout", null);
    LoginController = __decorate([
        (0, index_1.controller)('/auth')
    ], LoginController);
    return LoginController;
}());
