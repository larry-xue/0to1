import { controller, get, use } from './decorators/index';
import { Request, Response, NextFunction } from 'express';

function requireAuth(req: Request, res: Response, next: NextFunction) {
  // express的独立请求也支持类似中间件的方式
  // 通过next函数来去决定是否跳转到下一个路由
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not Permitted');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <div>
        <div>You are logged in</div>
        <a href='/auth/logout'>logout</a>
      </div>
    `);
    } else {
      res.send(`
      <div>
        <div>You are not login</div>
        <a href='/auth/login'>login</a>
      </div>
    `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route, logged in user');
  }
}
