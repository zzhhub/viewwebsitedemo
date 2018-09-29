<template>
    <div class="left-nav">
        <div class="left-nav-block">
            <h2>分类</h2>
            <template v-for="list in dataList">
                <h3>{{list.title}}</h3>
                <ul>
                    <li v-for="item in list.list">
                        <a :href="item.url" target="_blank">{{item.title}}</a>
                    </li>
                </ul>
                <div v-if="!list.last" class="hr"></div>
            </template>
        </div>
        <div class="left-nav-block latest-news">
            <h2>热搜</h2>
            <template>
                <ul>
                    <li v-for="itemlist in hotList.list">
                        <a>{{itemlist.title}}</a>
                    </li>
                </ul>
            </template>
        </div>
    </div>
</template>
<script>
    export default{
        data (){
            return {
                dataList:{
                    pc:{
                        title:"美食栏目",
                        last:false,
                        list:[
                            {
                                title:"美团",
                                url:"www.meituan.com"
                            },
                            {
                                title:"大众",
                                url:"www.dazhong.com"
                            },
                            {
                                title:"深夜食堂",
                                url:"www.shenyeshitang.com"
                            },
                        ]
                    },
                    travel:{
                        title:"旅行栏目",
                        last:true,
                        list:[
                            {
                                title:"去哪儿",
                                url:"www.qunaer.com"
                            },
                            {
                                title:"携程",
                                url:"www.xiecheng.com"
                            },
                            {
                                title:"途牛",
                                url:"www.tuniu.com"
                            },
                        ]
                    }
                },
                hotList:{
                    list:[
                        {
                            title:"黄山",
                        },
                        {
                            title:"大众",
                        },
                        {
                            title:"南京",
                        },
                        {
                            title:"鼓浪屿",
                        },
                        {
                            title:"画家村",
                        },
                        {
                            title:"天堂岛",
                        },
                    ]
                }
            }
        }
        ,
        components:{

        }
        ,
        methods:{

        }
    }
</script>
<style scoped>
    .left-nav{
        width: 18%;
        margin-right: 5%;
    }
    .left-nav-block{
        margin-bottom: 20px;
        border:solid 1px #CDCDCD;
    }
    .left-nav-block>h2{
        border:solid 1px #162556;
        padding:0 10px;
        background: #162556;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        height: 32px;
        line-height: 32px;
    }
    .left-nav-block>h3{
        padding:0 15px;
        color: #333;
        font-size: 12px;
        font-weight: bold;
        height: 36px;
        line-height: 36px;
    }
    .left-nav-block>ul{
        padding: 0 25px 6px;
    }
    .left-nav-block>ul>li>a{
        display: block;
        color: #808080;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 20px;
        line-height: 20px;
    }
    .hr{
        margin: 0 15px;
        border-bottom:solid 1px #CDCDCD;
    }
    .latest-news{
        min-height: 250px;
    }
    .latest-news>ul{
        margin-top: 10px;
        padding: 0 10px;
    }
    .latest-news>ul>li{
        float: left;
        padding: 0 0 5px 0;
    }
    .latest-news>ul>li>a{
        display: inline-block;
        background: rgba(22, 181, 247, 0.39);
        padding: 4px 15px;
        border-radius: 20px;
        margin: 0 4px;
        height: auto;
     }
</style>