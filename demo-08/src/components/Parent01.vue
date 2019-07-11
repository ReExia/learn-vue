<template>

    <div id="parent01">

        <v-child01 :title="title" :msg="msg" :run="run" :parent01="this">
        </v-child01>
        <hr/>

    </div>

</template>

<script>
    import Child01 from "./Child01";

    export default {
        name: "Parent01",

        data(){
            return{
                msg : 'parent01的Msg',
                title:'parent01的Title'
            }
        },

        components:{
            'v-child01':Child01
        },

        methods:{
            run(){
                alert('parent01的run方法')
            }
        }


    }
</script>

<style scoped>

</style>
