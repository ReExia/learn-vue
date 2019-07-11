import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import VueRouter from 'vue-router';
import Home from "./components/Home";
import News from "./components/News";
import Content from "./components/Content";

Vue.use(VueRouter);


//2.配置路由   注意：名字

const routes = [
    {path: '/home', component: Home},
    {
        path: '/news', component: News, name: 'news',
        children: [
            {path: '/content/:id', component: Content}
        ]
    },
    {path: '*', redirect: '/home'}   /*默认跳转路由*/
];

//实例化VueRouter  注意：名字
const router = new VueRouter({
    //mode: 'history',   /*hash模式改为history*/
    routes // （缩写）相当于 routes: routes
});


new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
