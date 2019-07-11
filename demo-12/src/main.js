import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Content from "./components/Content";


Vue.config.productionTip = false;


Vue.use(VueRouter);


//1.配置路由   注意：名字

const routes = [
  { path:'/content/:id', component:Content}
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
