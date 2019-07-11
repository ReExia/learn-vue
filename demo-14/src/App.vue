<template>
  <div id="app">
    <v-counter></v-counter>
    <hr/>
    <v-viewer></v-viewer>
  </div>
</template>

<script>

import Counter from "./components/Counter";
import Viewer from "./components/Viewer";

export default {
  name: 'app',
  components: {
    'v-counter':Counter,
    'v-viewer':Viewer,
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
