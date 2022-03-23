# Vue2
## 插值、指令、动态属性、表达式、v-html
1. 插值：{{ data }}
2. 指令 & 动态属性：例子（:id="xxx"）
3. 表达式：可以用于赋值，写在{{}}里面
4. v-html 替换绑定v-html的元素的所有子元素
    - 有xss风险
    - 会覆盖子组件

## 计算属性
1. 计算属性有缓存，只在与其关联的数据更新时重新计算
2. 计算属性可以设置get和set函数。如果计算属性用于双向绑定，必须使用set来定义赋值操作

## watch监听器
1. 监听数据变化，可以拿到 newValue 和 oldValue 
2. 如果监听的是引用类型，需要添加属性deep: true, 并且提供handler函数
3. watch监听引用类型拿到的newValue和oldValue都是同一个~

## 动态绑定类名和样式
```html
<!-- class -->
<div class="class_1" :class="{ "className": isActive }">
<div class="class_1" :class="['className1', 'className2']">
<!-- style -->
<div class="class_1" :style="styleObj">
```
1. 类：
    1. 对象语法：是否添加该类，取决于该类名所对应的值，即isActive是否为true
    2. 数组语法：是否添加该类，取决于数组内是否有该类名
2. 样式: 在styleObj中定义样式属性

## v-if 和 v-show 的区别
1. v-if : 创建dom，销毁dom
2. v-show: 操作css即可

## v-for 列表循环

不推荐v-for和v-if一起使用，因为v-for的优先级比v-if高。所以会先去v-for渲染，然后再每一个去判断。

## 事件
1. vue事件对象的原型的构造函数是原生事件构造函数
2. vue根据我们在哪个元素上写了@click，就往哪个元素上绑定事件处理函数
3. 如果是多个参数，可以用$event传入

## 父子组件通信方式 之 props/$emit
1. 父组件中使用动态绑定属性传值
2. 子组件使用props属性接收
3. 子组件向父组件传值：this.$emit('add',...[arguments)
4. 父组件监听add事件@add="method"

## 兄弟组件通信方式
1. eventBus: 是一个Vue实例
2. eventBus.$emit('event', ...[arguments);
3. eventBus.$on('event', method);
4. 组件销毁的时候可以解绑事件监听，使用eventBus.$off('event', method);

## 父子组件生命周期执行顺序
1. created, mounted, beforeDestroyed
2. Vue实例创建时，父组件先创建，子组件先渲染
3. 在更新时，子组件先更新完，父组件才能更新完。但是是父组件先触发更新

## 什么是 nextTick
1. vue渲染是异步的，当我们更新数据时，vue不会马上去做渲染，而是在下一个tick的时候去做渲染
2. 如果需要准确获取vue更新后的结果的话，可以使用vue提供的api，vue.$nextTick(fn); 在fn中去获取需要的结果

## slot 插槽
1. 什么是插槽？预留一个位置，可以让我们插入任何内容
```html
<!-- app.vue -->
<ul-slot>
    <li-slot>123</li-slot>
    <li-slot>123</li-slot>
    <li-slot>123</li-slot>
</ul-slot>
<!-- ulSlot -->
<ul id='ul-slot'>
    <slot></slot>
</ul>
<!-- li-slot -->
<li id="li-slot">
    <slot></slot>
</li>
```
2. 子组件中slot标签的内容可以作为默认内容，如果没有内容传进插槽的话，就会显示默认内容

## 作用域插槽

```html
<!-- parent -->
<son-slot>
    <template v-slot:default="slotProps">
        {{ slotProps.user.age }}
    </template>
</son-slot>

<!-- son -->
<!-- 注：user是子组件中的数据 -->
<slot :user=user>{{ user.name }}</slot>
```

## 具名插槽
```html
<!-- App -->
<app>
    <layout>
        <template v-slot:header>
            <h1>header</h1>
        </template>

        <p>main content</p>
        <p>main content</p>

        <template v-slot:footer>
            <h1>footer</h1>
        </template>
    </layout>
</app>

<!-- layout -->

<div>
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
</div>
```

`个人理解：slot有点像是说a组件指定了b组件里面的一些内容，前提是b组件需要提供一些接口，这个接口就是slot标签`


## 动态组件
```html
<component type="xxx"></component>
<!-- 指定xxx可以动态决定当前是使用哪一个组件进行渲染 -->
```

## 异步组件
当前组件如果不需要使用的话，但是一并加载进来会很影响性能，所以这时候需要异步组件。
```js
// 语法：
components: {
    test: () => import('./components/test')
}
```

## keep-alive
把想要保存的组件用keep-alive标签包裹起来
```html
<keep-alive>
    <A></A>
    <B></B>
    <C></C>
</keep-alive>
<!-- 这样组件ABC就不会销毁了，会缓存其dom内容 -->
```

## mixin
```js
// mixin.js
// 抽离公共部分的逻辑
export default {
    data() {
        return {
            commonData: 123，
            commonData2: 234
        }
    },
    methods: {
        commonMethod1() {

        },
        commonMethod2() {

        }
    }
}

// vue
// 然后在vue中的mixin配置项配置一下
import mixin from './mixin';

export default {
    mixins: [mixin]
}
```

## computed
computed有缓存，data没有变化，不会更新。

## v-if 和 v-else用法
- 可以使用 `===`
- 会根据条件进行渲染或销毁组件

## v-for
- 对象也可以用v-for遍历
- key很关键，不能是index或者random，需要是业务相关

## 事件
- event参数，自定义参数
    - $event
    - 原生的event对象，没有进行装饰
    - event.target：事件是挂载在哪个对象上
    - event.currentTarget：事件是在哪个对象上触发的
- 事件修饰符，按键修饰符
    - .stop
    - .prevent
    - .self
    - .ctrl
-【观察】事件被绑定到哪里


## Vue组件使用
- props和$emit
    - props可以定义一下type和default
- 组件间通讯 - 自定义事件
    - vue本身就具有自定义事件的能力
    - $on $emit
    - 在beforeDestroy时及时解绑，否则会导致内存泄露（$off）
- 组件生命周期 
    - 单个组件
        - 挂载阶段
            - created阶段Vue实例已经初始化，但是页面还没有开始渲染
            - mounted阶段页面已经渲染完了
        - 更新阶段
        - 销毁阶段 
    - 父子组件
        - 创建是从外到内，渲染是从内到外
        - 父组件先更新，然后是子组件，但是是子组件先更新完，然后才是父组件更新完