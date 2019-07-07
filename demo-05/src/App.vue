<template>
  <div id="app">

    <v-life></v-life>

  </div>
</template>

<script>

import LifeCycle from "./components/LifeCycle";

export default {
  name: 'app',
  components: {
    'v-life':LifeCycle,
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
