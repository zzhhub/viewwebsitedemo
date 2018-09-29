<template>
    <div class="index">
        <div class="left-block">
            <leftnav></leftnav>
        </div>
        <div class="right-block"></div>
    </div>
</template>
<script>
    import leftnav from "./leftnav.vue"
    export default {
        components:{
            leftnav
        },
        data (){
            return {

            }
        },
        created (){

        },
        methods: {

        },
    }
</script>
<style scoped>
    .index{
        width: 80%;
        margin: 20px auto;
    }
</style>
