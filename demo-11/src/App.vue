<template>
    <div id="app">

        <ul style="list-style: none;">
            <li style="display: inline-block;margin: 10px;">
                <router-link to="/home">首页</router-link>
            </li>
            <li STYLE="display: inline-block;margin: 10px;">
                <router-link to="/news">新闻</router-link>
            </li>
        </ul>

        <hr/>
        <router-view></router-view>

    </div>

</template>

<script>

    export default {
        name: 'app',
        components: {}
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
