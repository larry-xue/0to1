import VueRouter from 'vue-router'

const todo = () =>
    import ('../view/TodoView.vue');
const done = () =>
    import ('../view/TodoDelay.vue');

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [{
        path: '/',
        component: todo
    },
    {
        path: '/done',
        component: done
    }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = new VueRouter({
    routes, // `routes: routes` 的缩写
})

export default router;