import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router as controllerRouter } from './controllers/decorators/controller';
import './controllers/LoginController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// keys is going to encode cookie
app.use(cookieSession({ keys: ['asd21daAscdxaDA6zcadZxqawdq2Fd'] }));
app.use(router);
app.use(controllerRouter);
app.listen(3000, () => {
  console.log('server is listening on port 3000!');
});
