import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueRouter from 'vue-router';
import store from '@/store';

Vue.config.productionTip = false

Vue.use(VueRouter)

const app = new Vue({
    render: h => h(App),
    router,
    store
});


app.$mount('#app');