<template>
    <div id="counter">
        <button @click="add()">增加</button>
    </div>
</template>

<script>
    import store from '../vuex/store.js'
    export default {
        name: "Counter",
        store,
        methods:{
            add(){
                this.$store.commit('incCount');   /*触发 mutations 改变 state里面的数据*/
                //this.$store.dispatch('incMutationsCount');   /*触发 actions里面的方法   */
            }
        }
    }
</script>

<style scoped>

</style>
