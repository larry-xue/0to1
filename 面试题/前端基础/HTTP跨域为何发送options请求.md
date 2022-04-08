# 跨域请求

- 浏览器同源策略
- 同源策略一般限制ajax请求，不能跨域请求server
- 不会限制link，img，script，iframe加载第三方资源

# JSONP

A网页通过script标签的src请求B网页的数据，

B网页返回字符串

返回的字符串会被当做js执行


# CORS

服务端配置

# options请求

- 是跨域之前的预检查
- 浏览器自行发起的，无需我们干预
- 不会影响实际的功能