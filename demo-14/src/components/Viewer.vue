<template>
    <div id="viewer">
        <h1>结果 : {{this.$store.state.count}}</h1>
    </div>
</template>

<script>
    import store from '../vuex/store.js';
    export default {
        name: "Viewer",
        store,
    }
</script>

<style scoped>

</style>
