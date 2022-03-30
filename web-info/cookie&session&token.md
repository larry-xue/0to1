# http无状态

# Cookie与Session

## Cookie

`一种存储在浏览器的数据`

- 浏览器发送http请求给服务器
- 服务器set-cookie
- `之后客户端的每次http请求，浏览器都会自动附上cookie`

cookie不太安全，在Dev tool中可以看到cookie

## Session

Session是服务器端设置的
- SessionId是一串没有规则的字符串
- 过期时间
- and.. 其他参数

服务器通过set-cookie将session id保存到cookie中，之后利用浏览器每次请求都会附带cookie的特性，这样就能够识别到用户。

如果服务器访问人数过多，就面临着存储许多sessionId的问题，如果使用分布式session存储，又面临着共享的问题。如果用数据库存储sessionid，那如果数据库奔溃了，就会影响服务器的正常运行。


# Token

`JWT(JSON  Web Token)`

组成：`header.payload.signature`

服务器不保存JWT，JTW保存在客户端，但是服务器需要保存一段密码。signature通过密码和header，payload来生成。

## Token代码

