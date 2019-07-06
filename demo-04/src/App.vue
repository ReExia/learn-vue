<template>
  <div id="app">

    <input type="text" v-model="todo" @keydown="doAdd($event)"/>
    <hr/>

    <h1>进行中</h1>
    <ul>
      <li v-for="(item,key) in list" >
        <div v-if="!item.checked">
          <input type="checkbox" v-model="item.checked" @change="saveList()"/>  {{item.title}} <button @click="removeData(key)">删除</button>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>

import db from "./model/db";

export default {
  name: 'app',

  data(){
    return {
      todo : '',
      list :[],
    }
  },

  methods:{
    doAdd(e){

      if (13 == e.keyCode){
        this.list.push({
          title : this.todo,
          check : false
        });

        db.set('list',this.list);
      }
    },


    removeData(key){
      this.list.splice(key,1);
      db.set('list',this.list);
    },

    saveList(){
      db.set('list',this.list);
    }
  },

  mounted() {
    let list = db.get('list');

    if (list) {
      this.list = list;
    }
  },


  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
