<template>
    <div id="news">

        <h1>新闻</h1>
        <hr/>

        <router-link to="/content/1">内容-1</router-link>
        <br/>
        <router-link to="/content/2">内容-2</router-link>

        <hr/>

        <router-view  :key="$route.fullPath"></router-view>

    </div>
</template>

<script>
    export default {
        name: "News"
    }
</script>

<style scoped>

</style>
