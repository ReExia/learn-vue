<template>
    <div id="Content">

        <h1>内容:+{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Content",
        data(){

            return{
                msg:'数据'
            }
        },
        methods:{

        },
        mounted(){
            /*获取动态路由传值*/
            this.msg = this.$route.params;
        },
        /*watch: {
            // 如果路由有变化，会再次执行该方法
            $route: ()=>{
                this.msg = this.$route.params;
            }
        },*/
    }
</script>

<style scoped>

</style>
