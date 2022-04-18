# 传输优化加载

## GZip
- 对传输资源进行体积压缩
- 如何配置Nginx启用Gzip


## 启用keep alive
- http1.1开始默认开启
- keepalive_timeout xx;
- keepalive_requests xxx;
- 持久化tcp连接，节省了连接建立的时间

## HTTP缓存

- Cache-Control/Expires
- Last-Modified + If-Modified+Since
  - 与时间相关
  - 时间可能不同步
- E-tag: 文件标识
  - 请求时：If-None-Match: 文件标识
  - 如果返回304就从缓存中获取
  - 否则就从响应中获取

## Service Workers作用
在客户端和服务端建立起一个中间层

- 优点
  - 加速重复访问
  - 离线支持
- 注意点
  - 延长了首屏时间
  - 兼容性
  - 只能做localhost或https下使用

## HTTP/2的提升
- 二进制传输
  - http1.0和http1.1是基于文本的
- 请求响应多路复用
  - http1.1即使开启了keepalive，请求也是有顺序的
  - 而http2可以并发地发送
- Server push
  - 提前让服务器推送到客户端
  - 浏览器把推送的资源放到缓存中，在需要的时候使用

注意点：
- http/2只能用于https下
- 适合较高的请求量


## 服务端渲染(SSR)
server-side rendering
好处：
- 加速首屏渲染
- 更好的SEO

使用next.js实现SSR

是否使用SSR?
- 架构-大型，动态页面，面向公众用户
- 搜索引擎排名很重要