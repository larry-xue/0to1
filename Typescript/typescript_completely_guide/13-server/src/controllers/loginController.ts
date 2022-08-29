import { Request, Response } from 'express';
// need add /index, maybe i need adjust some tsconfig
import { get, controller } from './decorators/index';
@controller('/auth')
class LoginController {
  @get('/login')
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
}
