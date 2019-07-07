<template>

    <div id="life">
        <br/>

        <h1>{{msg}}</h1>
        <br/>
        <button @click="setMsg()">执行方法改变</button>
    </div>

</template>

<script>
    export default {
        name: "LifeCycle",

        data(){
            return{
                msg : 'msg'
            }
        },

        methods:{
            setMsg(){
                this.msg="我是改变后的数据"
            }

        },

        beforeCreate(){
            window.console.log('实例刚刚被创建1--------------beforeCreate()');
        },
        created(){
            window.console.log('实例已经创建完成2----------------created()');
        },
        beforeMount(){
            window.console.log('模板编译之前3---------------------beforeMount()');
        },
        mounted(){     /*请求数据，操作dom , 放在这个里面  mounted*/
            window.console.log('模板编译完成4---------------mounted()');
        },
        beforeUpdate(){
            window.console.log('数据更新之前----------------beforeUpdate()');
        },
        updated(){
            window.console.log('数据更新完毕-----------------updated()');
        },
        beforeDestroy(){   /*页面销毁的时候要保存一些数据，就可以监听这个销毁的生命周期函数*/
            window.console.log('实例销毁之前--------------beforeDestroy()');
        },
        destroyed(){
            window.console.log('实例销毁完成--------------destroyed()');
        }

    }
</script>

<style scoped>

</style>
