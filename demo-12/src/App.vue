<template>
  <div id="app">

    <router-link to="/content/1">PAGE-1</router-link>
    <br/>
    <router-link to="/content/2">PAGE-2</router-link>
    <hr/>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
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
