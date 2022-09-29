# Vue3

- 组合式 API
- 声明式 API

_以下笔记均以组合式 API 为例_

## 基础使用

reactive api 与 ref api，它们之间的区别在于 reactive 接受的是一个对象，ref 可以接受任何类型的值，它会将接收的值用一个对象包裹起来，然后在 value 属性上暴露，本质上都是使用 js 的 Proxy 对象来劫持，只是因为 Proxy 只接受对象，所以基本类型才需要被包裹后才能使用。

ref 需要通过 value 来访问这个和 reactive 用起来感觉挺割裂的，所以还是统一使用 ref 会简单点

然后如果使用 reactive，watch 钩子可能不会触发

```js
<script setup>
import { ref, reactive } from 'vue'

// 组件逻辑
// 此处声明一些响应式状态
  const name = ref('azoux')
  const location = reactive({
    province: 'fujian',
    city: 'xiamen'
  })
</script>

<template>
  <h1>Make me dynamic!</h1>
  <h2>{{ name }}</h2>
  <div>
  	<div>province: {{location.province}}</div>
  	<div>city: {{location.city}}</div>
  </div>
</template>
```

组合式 API 写起来真的很像 React

v-model 是 input 事件与 value 绑定的语法糖

一个猜想，vue3 的模板，接受的是一个 expression，类似于：@click="asd",其中 asd 是一个 expression。然后我想说的是，vue 应该会去检查输入的是 reactive 类型还是 ref 类型，如果是 ref 类型会去自己读取 value 值，而不是我们自己写上去 asd.value。但是为啥 computed 那里我需要返回的仍然是 asd.value，否则是错误的，这个需要进一步的研究

组合式 API 的执行流程是怎么样的？？是和声明式 API 一样嘛

为什么这里面使用又不需要.value 了呢

```js
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const childMsg = ref('No child msg yet')
</script>

<template>
  <ChildComp @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</template>
```

vue3 的 slot 和 react 用起来是相同了，不需要写 template

vue3 一个很有意思的地方是 template 不再需要一个 root 标签了

不要一开始直接硬上 TS..

## 模板语法

模板中的表达式将被沙盒化，仅能够访问到有限的全局对象列表。该列表中会暴露常用的内置全局对象，比如 Math 和 Date。也可以配置 app.config.

动态指令参数

```html
<!--
注意，参数表达式有一些约束，
参见下面“动态参数值的限制”与“动态参数语法的限制”章节的解释
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- 简写 -->
<a :[attributeName]="url"> ... </a>
```

动态指令绑定事件是不是不能用箭头函数？只能绑定自定义的函数

## 响应式基础（todo）

ref() 让我们能创造一种对任意值的 “引用”，这个听起来有点意思，ref 的 value 值是响应式的，当 ref 的 value 被替换的时候，会自动用 reactive 去替转换替换的对象、

ref 在模板中的解包，当 ref 在模板(template)中作为顶层属性被访问时，它们会被自动“解包”，所以不需要使用 .value

```js
// 那什么是顶层属性？
let testRef = ref({
  foo: ref(1)
})

<div>{{ testRef }}</div> // 不需要写testRef.value
<div>{{ testRef.foo + 1 }}</div> // foo也是一个ref, 但是它不是顶层属性，如果把它单独提出出来就可以了
<div>{{ testRef.foo }}</div> // 但是这是一个例外
```

然后在自动解包的时候是不需要写.value 的，这样是访问不到的

浅层响应式对象不会被自动解包（shallowReactive）

数组和集合类型的 ref 不会自动解包

```js
const arr = reactive([ref('Vue 3 guide')]);
console.log(arr[0].value);
```

## 计算属性

使用起来感觉和 vue2 的计算属性差别不大，值得注意的是 vue3 的 computed 返回的是一个计算属性 ref，由于 ref 在模板字符串中会自动解包，所以使用的时候也不用加 value

**计算属性值会基于其响应式依赖被缓存**

```js
const now = computed(() => Date.now()); // 不会响应式更新
```

计算属性依赖的必须也是响应式数据，否则不会更新

- 最佳实践
  - 避免直接修改计算属性，计算属性相当于是一个快照
  - 计算属性不应该有副作用

## 类与样式绑定

感觉用处不大，需要的时候可以回来查一下

## 条件渲染

一个比较新的点：如果想用 v-if 同时控制好几个标签，那可以使用 template 标签，并且最后 template 不会被渲染出来

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

v-show 不支持在 templete 上使用

v-if 和 v-for 同时存在于一个节点上时，v-if 比 v-for 的优先级更高。这意味着 v-if 的条件将无法访问到 v-for 作用域内定义的变量别名

## 列表循环

- 数组
  - v-for="(value, key) in arr"
  - v-for="value of arr"
- 对象
  - v-for="(value, key, index) in obj"

v-for 也可以用在 template 标签上，然后这样的话可以

## 事件处理

和 vue2 使用起来差别不大

## 表单输入绑定

```html
<input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
```

true value 和 false value 是 Vue 特有的

## 生命周期

组合式 API 会多一个 Setup 阶段，在 beforeCreate 之前

## 侦听器

vue3 中很重要的一个概念就是 ref 和响应式对象

- watch 可以侦听的数据源类型：
  - ref
    - 深度监听
    - 深度监听开销很大，必要的时候使用
  - reactive
    - 任何属性变化都会触发
    - 深度监听
  - getter 函数
    - getter 的好处是只有依赖的属性变化时，才会触发

但是不能直接监听值，e.g. x.value

如果希望在创建监听器时，立即执行一遍回调，可以使用 watchEffect

```js
import { watch, ref } from 'vue';
const url = ref('1.1.1.1/api');
const data = ref(null);
const fetchData = async function () {
  try {
    const response = await fetch(url.value);
    ref.value = await response.json();
  } catch (err) {
    throw err;
  }
};

// 先执行
fetchData();
// 监听
watch(url, fetchData);
```

```js
watchEffect(async () => {
  try {
    const response = await fetch(url.value);
    ref.value = await response.json();
  } catch (err) {
    throw err;
  }
});
```

watch 追踪的数据源都很明确，控制可更精确。watchEffect 追踪的数据依赖关系不会很明确，但是写出的代码会很简洁。如果需求比较简单就用后者就行了

- watch 的一些参数配置
  - deep: 是否启用深层监听
  - flush: 是否希望在监听回调中访问到 d

在 setup() 或 \<script setup\>中用同步语句创建的侦听器，会自动绑定到宿主组件实例上, 异步创建的监听器必须手动释放，否则会有内存泄漏的可能

```js
const unwatch = watchEffect(() => {});

// ...当该侦听器不再需要时
unwatch();
```

## 模板引用

获取 dom，需要在 setup 中定义一个同名的 ref

v-for 标签上使用 ref

```js
<script setup>
import { ref, onMounted } from 'vue'

const list = ref([
  /* ... */
])

const itemRefs = ref([])

onMounted(() => console.log(itemRefs.value))
</script>

<template>
  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
</template>

// ref 数组并不保证与源数组相同的顺序

// 函数式模板，每次组件更新都会调用该函数，组件被卸载时，也会访问一次，此时el是null
<input :ref="(el) => { /* 将 el 赋值给一个数据属性或 ref 变量 */ }">
```

> 如果一个子组件使用的是选项式 API 或没有使用 \\<script setup\>，被引用的组件实例和该子组件的 this 完全一致，这意味着父组件对子组件的每一个属性和方法都有完全的访问权。这使得在父组件和子组件之间创建紧密耦合的实现细节变得很容易，当然也因此，应该只在绝对需要时才使用组件引用。大多数情况下，你应该首先使用标准的 props 和 emit 接口来实现父子组件交互。

> 有一个例外的情况，使用了 \<script setup\> 的组件是默认私有的：一个父组件无法访问到一个使用了 \<script setup\> 的子组件中的任何东西，除非子组件在其中通过 defineExpose 宏显式暴露：

## 深入组件

### 组件注册

- 组件注册
  - 全局注册
  - 局部注册
    - 就是平常引入组件的方法
  - - 在 components 对象中注册
    - app.component('name', compnent)
- 组件命名的规范
  - PascalCase
  - 自闭和标签
  - kebab-case

### Props 声明

- Props
  - defineProps() 宏
    - 接收方式
      - 字符串数组
      - 对象(prop 校验)
  - 静态 & 动态 props
  - 单向数据流
    - prop readonly
    - 修改 prop
      - computed
      - 作为 ref 或 reactive 的初始值
    - 由于对象传递的是引用,所以可以在子组件中修改传入的对象,但是这样做并不推荐
    - prop 校验
      - 开发时可以在控制台中获得更多提示
      - 类型校验
        - type 可以是原生构造函数
        - 自定义的类,vue 会通过 instanceOf 判断
      - boolean 类型转换
        - bool 值如果有传就是 true,没有传就是 false
        - 例子: disabled

```html
<!-- 传递一个对象的多个属性 -->
<!-- todo是一个object -->
<!-- React -->
<TodoItem ...todo />
<!-- Vue3 -->
<TodoItem v-bind="todo"></TodoItem>
```

### 组件事件

- 组件事件
  - 子组件: $emit 触发
  - 父组件: @接收
  - 父组件接收时推荐使用 kebab-case
  - vue 组件的事件没有冒泡机制
  - defineEmits
    - 字符对象
    - 也支持对象语法
  - 可以覆盖原生事件:定义同名事件
  - 自定义 v-model
    - 可以用 get set 函数
    - 绑定多个 v-model

```html
<!-- v-model 参数 -->
<childComponent v-model="search" />
<!-- 会被解析为: -->
<childComponent
  @update:modelValue="newValue => search = newValue"
  :modelValue="search"
/>

<!-- 子组件 -->
<input
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
/>
```

### fallthrough attributes

- child component didn't using props or emits to receive attribute from parent component, but it appear after render.
  - such as: class, style attribute
- forbid fallthrough attributes
- $attrs, control the all attributes
- 透传 attributes 在 JavaScript 中保留了它们原始的大小写
- 多根节点的 attributes 继承，需要使用 v-bind 绑定$attrs, 否则 vue 会有警告
- 也可以使用 useAttrs()访问所有透传属性

### slot

- slot标签是插槽出口
- 插槽中的内容只能访问父组件的作用域，无法访问子组件的作用域
- 默认内容，在父组件没有提供插槽时显示
- 具名插槽，父组件使用v-slot指定插槽名
  - v-slot:header
  - 缩写：#header
    - #default 表示默认插槽
  - 支持动态插槽名
- 作用域插槽
  - 用来解决插槽无法访问到父组件数据的痛点
  - 可以访问子组件在slot标签上绑定的属性
    - \<slot :text="greetingMessage" >\</slot>
    - \<MyComponent v-slot="slotProps"\>\{\{ slotProps.greetingMessage \}\}
    - name是vue特意保留的一个prop，不会传递给插槽