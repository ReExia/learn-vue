<template>


    <div id="child01">
        <hr/>
        <h1>Child01</h1>
        <h2>parent01</h2>
        <h3>title : {{title}}</h3>
        <h3>{{msg}}</h3>

        <button @click="getParent()">child01的方法</button>
        <hr/>

    </div>

</template>

<script>
    export default {
        name: "Child01",

        data(){
          return {
          }
        },

        methods:{
            getParent(){
                this.parent01.run();
            }
        },

        props:{
            title:{
                default : 'child01的Title'
            },
            msg :{
                default: 'child01的Msg',
            },
            run:{
                default:() => {
                    alert('child01的run')
                }
            },
            parent01:{

            }
        }
    }
</script>

<style scoped>

</style>
