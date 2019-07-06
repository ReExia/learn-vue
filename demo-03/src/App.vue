<template>
  <div id="app">

    <!--图片-->
   <!-- <img v-bind:src = 'url'/>
    <img :src="url" alt="title">-->

    <h2>{{msg}}</h2>

    <br/>
    <br/>
    <br/>
    <br/>

    <button v-on:click="run1()">第一种写法</button>
    <button @click="run2()">第二种写法</button>

    <br/>
    <br/>
    <br/>

    <button @click="getMsg()">获取data里面的msg</button>

    <br/>
    <br/>
    <br/>

    <button @click="setMsg()">改变data里面的msg</button>

    <br/>
    <br/>
    <br/>

    <button @click="requestData()">请求数据</button>

    <hr/>

    <ul>
      <li v-for="(item,key) in list">
        {{key}}---   {{item}}
      </li>
    </ul>

    <br/>
    <br/>
    <br/>

    <button @click="deleteData('111')">执行方法传值111</button>
    <button @click="deleteData('2222')">执行方法传值2222</button>

    <br/>
    <br/>

    <button data-aid="123" @click="eventFn($event)">事件对象</button>
    <br/>
    <br/>

  </div>
</template>

<script>

export default {
  name: 'app',

  data(){
    return {
      msg : '你好vue',
      list : []
    }
  },

  methods : {

    run1:function(){

      alert('这是一个方法');

    },


    run2(){
      alert('这是另一个方法');
    },

    getMsg(){
      alert(this.msg);
    },
    setMsg(){

      this.msg="我是改变后的数据"
    },

    requestData(){

      for(var i=0;i<10;i++){

        this.list.push('我是第'+i+'条数据');
      }
    },

    deleteData(val){

      alert(val);
    },

    eventFn(e){
      window.console.log(e);

      // e.srcElement  dom节点
      e.srcElement.style.background='red';

      window.console.log(e.srcElement.dataset.aid);  /*获取自定义属性的值*/
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
