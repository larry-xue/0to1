# 组件化
## 如何理解MVVM

- 很久以前就有组件化了
  - asp jsp php
- `数据驱动视图`
  - 传统组件，只是静态渲染，更新还要依赖于操作DOM
  - Model View ViewModel

# 响应式

- 实现数据驱动视图的第一步
- 考察Vue原理的第一题
- 核心API: Object.defineProperty
- 如何实现响应式，代码演示
- Object.defineProperty的一些缺点（Vue3.0启用Proxy）
  - Proxy有兼容性问题，且无法polyfill

## Object.defineProperty 缺点

- 深度监听，需要递归到底，一次性计算量大
- 对象很大，如何多次监听？
- 无法监听新增属性和删除属性
  - 需要使用Vue.set 和 Vue.delete

## vue 如何监听数组

- 无法原生监听数组，需要特殊处理 
  - 需要重写原型

# vdom和diff

- vdom是实现vue和react的基石
- diff算法是vdom中最核心、最关键的部分

## 虚拟DOM(vdom)和diff

- DOM操作非常耗费性能

### vdom

- 用js模拟DOM结构，计算最小变更，操作DOM
- 更多的把计算转移到js
- snabbdom

### 虚拟dom

diff算法是vdom中最核心、最关键的部分

树diff的时间复杂度O(n^3)
- 第一，遍历tree1
- 第二，遍历tree2
- 第三排序

优化时间复杂度到O(n)
- 只比较同一层级，不跨级比较
- tag不相同，则直接删掉重建，不再深度比较
- tag和key，两者都相同，则认为是相同节点，不再深度比较

# 模板编译

# 渲染过程

# 前端路由

