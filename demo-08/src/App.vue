<template>
  <div id="app">
    <h1>父组件向子组件传递值</h1>
    <v-parent01></v-parent01>
    <hr/>

  </div>
</template>

<script>

import Parent01 from "./components/Parent01";
import Child01 from "./components/Child01";

export default {
  name: 'app',
  components: {
    'v-parent01':Parent01,
    'v-child01' : Child01
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
