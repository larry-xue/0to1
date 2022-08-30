"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import { router } from './routes/loginRoutes';
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controllers/LoginController");
require("./controllers/RootController");
var AppRouter_1 = require("./AppRouter");
var app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
// keys is going to encode cookie
app.use((0, cookie_session_1.default)({ keys: ['asd21daAscdxaDA6zcadZxqawdq2Fd'] }));
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log('server is listening on port 3000!');
});
