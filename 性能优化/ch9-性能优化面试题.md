# 性能优化面试题

## 输入URL后发生的事情

- UI thread: 搜索 or URL?
  - URL解析
    - 协议
    - 路径名
    - 端口
    - 请求参数
    - hash
- Network thread
  - dns查找ip
  - https还要建立TLS连接
  - 收到301
  - web server
  - 设置UA
  - 读取到response后会分析数据类型，进行安全检查
- Renderer process
  - step1
    - 解析文本，构建DOM
    - 边解析DOM，边加载子资源
    - JS阻塞解析
      - async不阻塞
      - defer不阻塞
  - step2
    - 解析CSS，计算style
    - 构造布局树&大小（真正要画出来的东西）
- Raster Thread & Compositior Thread
  - 创建绘制记录，确定绘制的顺序
  - 将页面拆分成图层构建图层树
  - 复合线程像素图层，创建一个复合帧

## 首屏加载优化

### 什么是首屏加载？怎么优化？

- Web增量加载的特点决定了首屏性能不会完美
- 过长的白屏影响用户体验和留存
- 首屏(above the fold) -> 初次印象

## 解答

- 资源体积太大
  - 资源压缩
  - 传输压缩
  - 代码拆分
  - Tree shaking 
  - HTTP/2
  - 缓存
- 首页内容太多
  - 路由/组件/内容
  - lazy-loading 
  - 预渲染
  - Inline CSS
- 加载顺序不合适
  - prefetch
  - preload

## JS内存泄露
创建变量时，自动分配内存，不使用时，自动回收。

- 引用计数
  - 无法解决循环引用
- 标记清除
  - Mark and sweep
