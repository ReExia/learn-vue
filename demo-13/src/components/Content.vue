<template>
    <div id="content">
            <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Content",
        data(){
            return{
                'msg':'',
            }
        },

        mounted() {
            this.msg = this.$route.params;
        }
    }
</script>

<style scoped>

</style>
