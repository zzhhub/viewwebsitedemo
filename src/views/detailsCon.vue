<template>
    <div class="details-con">
        <h1 class="content-title">{{context.title}}</h1>
        <div class="details-main">
            <div v-if="index<spliteCount" class="content-pram" v-for="(items,index) in context.prams" :key="index">
                {{items}}
            </div>
            <img class="content-img" v-for="(itemsimg,index) in context.imgurl" :src="itemsimg" alt=""/>
            <div v-if="index>=spliteCount" class="content-pram" v-for="(items,index) in context.prams" :key="index">
                {{items}}
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data (){
            return {}
        },
        props:{
            context:{
                type:Object,
                default:{}
            },
            spliteCount:{
                type:Number,
                default:1
            }
        },
        components:{

        },
        methods:{

        },

    }
</script>
<style scoped>
    .details-con{
        padding: 10px;
    }
    .content-title{
        font-size: 20px;
        padding: 0 20px;
        background: #419ff7;
        color: #fff;
    }
    .details-main{
        padding: 15px 20px;
    }
    .content-pram{
        padding: 10px 0;
        line-height: 24px;
        color: #666;
        font-size: 14px;
        text-indent: 2em;
    }
    .content-img{
        width: 23%;
        margin: 1%;
        max-height: 170px;
    }
</style>