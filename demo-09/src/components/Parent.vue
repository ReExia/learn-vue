<template>
    <!-- 所有的内容要被根节点包含起来 -->
    <div id="home">

        <v-header ref="header"></v-header>

        <hr>
        首页组件

        <button @click="getChildData()">获取子组件的数据和方法</button>

    </div>

</template>


<script>


    /*
    父组件给子组件传值

        1.父组件调用子组件的时候 绑定动态属性
            <v-header :title="title"></v-header>

        2、在子组件里面通过 props接收父组件传过来的数据
            props:['title']



            props:{

                'title':String
            }

        3.直接在子组件里面使用



    父组件主动获取子组件的数据和方法：

        1.调用子组件的时候定义一个ref

            <v-header ref="header"></v-header>

        2.在父组件里面通过

            this.$refs.header.属性

            this.$refs.header.方法





    子组件主动获取父组件的数据和方法：


            this.$parent.数据

            this.$parent.方法



    */


    import Child from "./Child";

    export default{
        data(){
            return {
                msg:'我是一个home组件',
                title:'首页111'
            }
        },
        components:{

            'v-header':Child
        },
        methods:{

            run(){

                alert('我是Home组件的run方法');
            },
            getChildData(){

                //父组件主动获取子组件的数据和方法：
                // alert(this.$refs.header.msg);

                this.$refs.header.run();
            }
        }


    }

</script>

<style >

    /*css  局部作用域  scoped*/

    h2{

        color:red
    }


</style>
