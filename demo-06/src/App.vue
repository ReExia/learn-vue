/* eslint-disable */
<template>
  <div id="app">

      <button @click="getData()">
          请求数据
      </button>

      <ul>
          <li v-for="(item) in list"  :key='item.aid'>

              {{item.title}}
          </li>
      </ul>
  </div>
</template>

<script>

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
          this.$http.get(api).then((response) => {
              window.console.log(response);

              this.list = response.body.result;
          },(err) => {
             window.console.log(err)
          });
      }
  },

  mounted() {
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
