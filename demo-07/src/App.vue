<template>
  <div id="app">

    <button @click="getData()">请求数据</button>
    <hr>
    <br>

    <ul>
      <li v-for="item in list" :key="item.aid">
        <hr/>
        {{item.title}}
      </li>
    </ul>

  </div>
</template>

<script>

  import Axios from 'axios';

export default {
  name: 'app',
  components: {
  },

  data(){
    return {
      list:[]
    }
  },
  methods:{

    getData(){

      let api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
      Axios.get(api).then((response)=>{
        window.console.log(response);
        this.list=response.data.result;
      }).catch((error)=>{
        window.console.log(error);
      })

    }
  },
  mounted(){  /*生命周期函数*/

    this.getData();

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
