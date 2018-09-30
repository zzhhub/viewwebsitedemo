<template>
    <div class="index">
        <div class="left-block">
            <leftnav></leftnav>
        </div>
        <div class="right-block">
            <div class="top-block">top</div>
            <div class="bottom-block">
                <board-list></board-list>
            </div>
        </div>
    </div>
</template>
<script>
    import leftnav from "./leftnav.vue"
    import boardList from "./boardList.vue"
    export default {
        components:{
            leftnav,
            boardList
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
    .right-block{
        /*background: #f0d0dd;*/
    }
    .left-block{
        width: 23%;
        display: inline-block;
    }
    .right-block{
        width: 76%;
        display: inline-block;
    }
</style>
