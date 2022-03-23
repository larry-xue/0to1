# Vue高级特性

## 自定义v-model

## $nextTick & refs

- $nextTick
    - Vue是异步渲染，data改变之后，DOM不会立刻渲染
    - $nextTick会在DOM渲染之后被触发，以获取最新DOM节点
- refs
    - 只要在标签上写上ref="xxx"(xxx是自定义的名字)
    - 就可以通过this.$refs.xxx 就可以获取到dom元素

## slot

插槽的意思就是父组件想往子组件中插入一些内容
- 普通插槽
- 作用域插槽
- 具名插槽

## 动态、异步组件

- 动态组件
    - :is="component-name" 用法
    - 需要根据数据，动态渲染的场景。即组件类型不确定。
- `异步`组件
    - import()函数
    - 按需加载，异步加载大组件
        - FormComponent: () => import('../FormComponent.vue')
        - 什么时候用什么时候加载
        - 优化页面加载

## keep-alive

- 缓存组件
- 频繁切换，不需要重复渲染
- Vue常见性能优化

## mixin

- 多个组件有相同的逻辑，抽离处理
- mixin 并不是完美的解决方案，会有一些问题
  - 变量来源不明确，不利于阅读
  - 多mixin可能造成变量冲突
  - 多mixin可能出现多对多的关系，复杂度高
- Vue3提出的Composition API 旨在解决这些问题
- mixin.js