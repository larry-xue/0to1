# 代码优化

javascript通常都是性能瓶颈，因为js需要进行编译、解析、执行，执行时还可能会阻塞网页。


# 解决方案

- Code spiliting 代码拆分，按需加载
- Tree shaking 代码减重
- 减少主线程工作量
  - 避免长任务
  - 避免超过1kB的行间脚本
    - 浏览器引擎没有办法对行间脚本进行一个很好的优化
  - 使用rAF和rIC进行时间调度
- Progressive Booststrapping渐进式启动
  - 可见不可交互 vs 最小可交互资源集

# V8编译原理
JavaScript代码 -> AST -> Interpreter -> Optimising Complier -> Machine Code -> Bytecode
如果解释器发现自己做的优化不合适时，会有一个逆优化的过程，反而增加了编译时间。

## V8优化机制

- 脚本流
- 字节码缓存
- 懒解析

# 优化

## 函数的解析方式

- lazy parsing vs eagar parsing
  - 函数饥饿解析：const add = ((a, b) => a + b); 
  - 加一个括号就可以
- 利用Optimize.js优化初次加载时间

## 对象优化可以做哪些
- 以相同顺序初始化对象成员，避免隐藏类的调整
- 实例化后避免添加新属性
- 尽量使用Array代替array-like
  - 尽量将array-like转化为数组再进行操作效率会更高
  - 转化的代价比较小
  - 尽量不要改变数组中元素的类型
  - 避免读取超过数组的长度

## HTML优化
- 减少iframes的使用
  - 可以做一个延迟加载
- 压缩空白符
- 避免节点深层次嵌套
- 避免使用table布局
- 删除注释
- CSS&JavaScript尽量外链

借助工具：html-minifier

## CSS优化

利用DevTools查看开销：Recalculate Style

- 使用选择器的区别已经不是主要影响了
- 减低CSS对渲染的阻塞
- 利用GPU进行完成动画
- 使用contain属性
  - 让开发者和浏览器能够沟通
  - 告诉浏览器这个盒子中的变化不会影响到布局，不会影响到其他盒子，这样浏览器可以进行单独处理
- 使用font-display属性
