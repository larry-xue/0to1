# 宏任务与微任务

- 宏任务
  - setTimeout
  - setInterval
  - 网络请求
- 微任务
  - promise
  - async await
- 微任务在下一轮DOM渲染之前执行，宏任务在之后执行

# 浏览器event loop
- 先执行同步任务
  - 将异步任务放到队列中
  - 将微任务放到微任务队列中
- 执行微任务队列中的任务
- 网页渲染
- 取出宏任务队列中的任务并执行

# nodejs event loop
- 宏任务按照优先级执行
  - setTimeout优先级最高
- 微任务也按照优先级执行
  - process.nextTick优先级最高

- 执行同步代码
- 执行微任务
- 执行宏任务
  - 按照优先级顺序执行宏任务
  - 每当执行之前，都去执行微任务