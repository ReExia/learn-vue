import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;


import VueRouter from 'vue-router';

//1.创建组件
import Home from "./components/Home";
import News from "./components/News";

Vue.use(VueRouter);

//2.配置路由   注意：名字
const routes = [
    {
        path : '/home', component: Home
    },
    {
        path : '/news', component : News
    },
    {
        path : '*', redirect : '/home'
    }
];

//3.实例化VueRouter  注意：名字
const router = new VueRouter({
    routes
});

//4、挂载路由
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
