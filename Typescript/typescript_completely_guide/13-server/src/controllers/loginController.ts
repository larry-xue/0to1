import { NextFunction, Request, Response } from 'express';
// need add /index, maybe i need adjust some tsconfig
import { get, controller, use, bodyValidator, post } from './decorators/index';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('request was made!!!');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response) {
    res.send(
      `
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div> 
      <div>
        <label>Password</label>
        <input name="password" type="password"/>
      </div>
      <button>Submit</button>
    </form>
    `
    );
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'hi@hi.com' && password === '123456') {
      // mark this person as logged in
      // redirect them to the root route
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
