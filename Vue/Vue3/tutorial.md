# Vue3

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

> 有一个例外的情况，使用了 \<script setup\> 的组件是默认私有的：一个父组件无法访问到一个使用了 <script setup> 的子组件中的任何东西，除非子组件在其中通过 defineExpose 宏显式暴露：
