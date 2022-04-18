# 浏览器的渲染流程

## 关键路径
JavaScript(触发视觉变化) -> Style(样式计算) -> Layout -> Paint -> Composite

### 布局和绘制

#### 影响回流（reflow）的操作
初次加载叫做布局，修改页面内容导致重新布局，叫做回流

- 添加/删除元素
- display: none
- 移动元素位置
- 操作styles
- offsetLeft, scrollTop, clientWidth
- 修改浏览器大小，字体大小

#### 避免layout thrashing
- 避免回流
- 读写分离
  - 批量的进行，先把读操作做完再做写
- fastdom

#### 复合线程(compositor thread)与图层(layers)

- 复合线程的作用
  - 将页面拆分图层进行绘制再进行复合
  - 利用DevTools了解网页拆分情况
  - 那些样式仅影响复合

[浏览器渲染流程&Composite（渲染层合并）简单总结](https://segmentfault.com/a/1190000014520786)

#### 减少重绘
- 利用DevTools识别paint的瓶颈
- 利用will-change创建新的图层
  - 尽量不要创建过多的图层
  - 一般是使用transform做动画的才有需要创建新图层
- 使用transform提高渲染效率

## 浏览器构造对象模型

- 构建DOM对象
  - HTML -> DOM
- 构建CSSM对象
  - CSS -> CSSOM

DOM & CSSOM -> Render Tree(渲染树)

## 高频处理函数防抖

rAF是在Layout之前去做的

## React时间调度实现

- RequestIdleCallback: 如果一帧内还有空闲时间，就去做一些事
  - 浏览器支持并不好
- 通过rAF模拟rIC