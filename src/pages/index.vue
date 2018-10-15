<template>
    <div class="index">
        <div class="left-block">
            <leftnav></leftnav>
        </div>
        <div class="right-block">
            <div class="top-block">
                <slide-show :slides="slides" :invTime="invTime"></slide-show>
            </div>
            <div class="bottom-block">
                <board-list></board-list>
            </div>
        </div>
    </div>
</template>
<script>
    import leftnav from "./../views/leftnav.vue"
    import boardList from "./../views/boardList.vue"
    import slideShow from "./../views/slideShow.vue"
    export default {
        components:{
            leftnav,
            boardList,
            slideShow,
        },
        data (){
            return {
                goods:'',
                invTime: 3000,
                slides: [
                    {
                        src: require('../images/820.jpg'),
                        title: 'xxx1',
                        href: 'detail/analysis'
                    },
                    {
                        src: require('../images/821.jpg'),
                        title: 'xxx2',
                        href: 'detail/count'
                    },
                    {
                        src: require('../images/822.jpg'),
                        title: 'xxx3',
                        href: 'http://xxx.xxx.com'
                    },
                    {
                        src: require('../images/823.jpg'),
                        title: 'xxx4',
                        href: 'detail/forecast'
                    }
                ],
            }
        },
        created (){
//        this.$http.get("/api/goods").then((res) => {
        this.$http.post("/api/goods").then((res) => {
            this.goods = res.data
         })
        },
        methods: {
            dosomething(){
                console.log("dosomething changed !")
            }
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
        vertical-align: top;
    }
    .right-block{
        width: 76%;
        display: inline-block;
        vertical-align: top;
    }
</style>
