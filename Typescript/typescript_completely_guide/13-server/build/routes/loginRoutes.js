"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var router = (0, express_1.Router)();
exports.router = router;
router.get('/', function (req, res) {
    console.log(req.session);
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are logged in</div>\n        <a href='/logout'>logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div>You are not login</div>\n        <a href='/login'>login</a>\n      </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res, next) {
    // express的独立请求也支持类似中间件的方式
    // 通过next函数来去决定是否跳转到下一个路由
    console.log('middle ware');
    next();
    return;
}, function (req, res) {
    res.send('Welcome to protected route, logged in user');
});
