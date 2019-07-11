import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 在vuex中用于存储数据
let state = {
    count : 1,
    list:[]
};

//mutations里面放的是方法，方法主要用于改变state里面的数据
let mutations = {

    incCount() {
        ++this.state.count;
    },

};

//优点类似计算属性   ，  改变state里面的count数据的时候会触发 getters里面的方法 获取新的值 (基本用不到)
let getters = {
    total : (state) => {
        window.console.log(state);
    }
};

//基本没有用
// Action 类似于 mutation，不同在于：
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。

let actions = {
    incMutationsCount(context) {    /*因此你可以调用 context.commit 提交一个 mutation*/
        context.commit('incCount');    /*执行 mutations 里面的incCount方法 改变state里面的数据*/
    }
};

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});

export default store;
