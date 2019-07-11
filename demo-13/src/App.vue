<template>
  <div id="app">

    <ul style="list-style: none">
      <li style="display: inline-block">
        <h3>
          <router-link to="/home">首页</router-link>
        </h3>
      </li>
      <li style="display: inline-block">
        <h3>
          <router-link to="/news">新闻</router-link>
        </h3>
      </li>
    </ul>

    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
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
