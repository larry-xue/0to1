# Vue生命周期

- beforeCreate
  - 创建一个空白的Vue实例
  - data method 尚未被初始化，不可使用
- created
  - Vue实例初始化完成，完成响应式绑定
  - data method都已经初始化完成，可调用
  - 尚未开始渲染模板
- beforeMount
  - 编译模板，调用render生成vdom
  - 还没有开始渲染DOM
- mounted
  - 完成组件渲染
  - 组件创建完成
  - 开始由“创建阶段”进入“运行阶段“
- beforeUpdate
  - data发生了变化
  - 准备更新DOM（尚未更新DOM）
- updated
  - data发生变化，且DOM更新完成
  - 不要在updated中修改data，可能会导致死循环
- beforeDestroy
  - 解绑事件
- destroyed
- onActivated
  - 缓存组件被激活
- onDeactivated
  - 缓存组件被隐藏

# 一些问题

## 在Vue中什么时候操作dom比较好
- $nextTick
- mounted和updated都不能保证子组件全部挂载完成

## Ajax应该放在哪个生命周期
- created
- mounted（推荐）