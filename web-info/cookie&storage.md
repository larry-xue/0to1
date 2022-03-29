# cookie
- 最大为4kb
- 支持H4 & H5
- [document.cookie](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)
- document.cookie = 'name=key; ' 
  - 使用 `; `来分割
  - 一次只能设置一个！！
- 任何窗口都能访问
- 无过期时间
- 会和请求一起发送
- 存储位置：浏览器和服务器

# web 存储

## localStorage
- 同步执行，太大会影响渲染速度
- 10Mb
- H5
- 任何窗口都能访问
- 存储位置： 浏览器
- 不和请求一起发送

## sessionStorage
- H5
- 同一窗口才能访问
- 有效期到窗口关闭
- 存储位置： 浏览器
- 不和请求一起发送