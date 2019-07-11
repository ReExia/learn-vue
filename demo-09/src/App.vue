<template>
  <div id="app">
    <v-parent></v-parent>
  </div>
</template>

<script>

import Parent from "./components/Parent";

export default {
  name: 'app',
  components: {
    'v-parent':Parent,
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
