<template>
  <div id="app">

    <!--01 双向绑定-->
    <h2>{{msg}}</h2>
    <input type="text" v-model="msg">
    <button @click="getMsg()">获取消息</button>
    <button @click="setMsg()">设置消息</button>

    <br/>
    <br/>
    <br/>
    <br/>


    <!--02 获取dom-->
    <input type="text" ref="userinfo">
    <div ref="box">一个盒子</div>
    <button @click="getInputValue()">获取第二个表单的数据</button>

  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      msg:'hello vue'
    }
  },
  methods : {

    getMsg(){
      alert(this.msg);
    },


    setMsg(){
      this.msg = "改变后的数据";
    },

    getInputValue(){
      //获取ref定义的节点
      window.console.log(this.$refs.userinfo);

      this.$refs.box.style.background = 'red';

      alert(this.$refs.userinfo.value);
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
