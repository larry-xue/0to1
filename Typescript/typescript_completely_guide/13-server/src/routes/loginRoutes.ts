import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
}

const router = Router();

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'hi@hi.com' && password === '123456') {
    // mark this person as logged in
    // redirect them to the root route
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  console.log(req.session);
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href='/logout'>logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div>You are not login</div>
        <a href='/login'>login</a>
      </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get(
  '/protected',
  requireAuth,
  (req: Request, res: Response, next: NextFunction) => {
    // express的独立请求也支持类似中间件的方式
    // 通过next函数来去决定是否跳转到下一个路由
    console.log('middle ware');
    next();
    return;
  },
  (req: Request, res: Response) => {
    res.send('Welcome to protected route, logged in user');
  }
);

export { router };
