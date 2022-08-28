"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
const router = (0, express_1.Router)();
exports.router = router;
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === '123456') {
        // mark this person as logged in
        // redirect them to the root route
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', (req, res) => {
    console.log(req.session);
    if (req.session && req.session.loggedIn) {
        res.send(`
      <div>
        <div>You are logged in</div>
        <a href='/logout'>logout</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <div>You are not login</div>
        <a href='/login'>login</a>
      </div>
    `);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res, next) => {
    // express的独立请求也支持类似中间件的方式
    // 通过next函数来去决定是否跳转到下一个路由
    console.log('middle ware');
    next();
    return;
}, (req, res) => {
    res.send('Welcome to protected route, logged in user');
});
