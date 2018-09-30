<template>
    <div class="board-list">
        <ul>
            <li class="board-list-items" v-for="boardlist in boardlist">
                <img class="board-list-img" :src="boardlist.imgurl" :alt="boardlist.title"/>
                <div class="board-list-discribe">
                    <h2 class="board-list-title">{{boardlist.title}}<a class="more-link" >more>></a></h2>
                    <div class="board-list-content">{{boardlist.describe}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data (){
            return {
                boardlist:[
                    {
                        imgurl:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=233033918,3133937497&fm=58",
                        title:"普罗旺斯",
                        describe:"东方普罗旺斯薰衣草庄园，2009年创建，占地面积10亩左右，为华北地区较大大单体薰衣草庄园。普罗旺斯的薰衣草主要分为3类：原生薰衣..."
                    },
                    {
                        imgurl:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2163124850,2077998330&fm=58",
                        title:"萤火虫主题公园",
                        describe:"萤火虫主题公园，是全国首家萤火虫主题公园，位于福建厦门市文曾路怡情谷的国内，由东林电子创办，是国内首家萤火虫低碳环保节能教育..."
                    },
                    {
                        imgurl:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4109356133,611844553&fm=58",
                        title:"牟尼沟",
                        describe:"牟尼沟位于四川省阿坝藏族羌族自治州松潘县境内，国家4A级旅游风景区，2011年顶峰国际旅游规划项目。距成都三百多公里，占地160平方..."
                    },
                    {
                        imgurl:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3977509054,564219102&fm=58",
                        title:"亚龙湾海底世界",
                        describe:"海南亚龙湾海底世界 雨林文化旅游区整体规划面积45平方公里周边是123平方公里的生态恢复保护区,呀诺达景区坚持天人合一的生态开发理念..."
                    },
                ]
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
    .board-list-items{
        width: 48%;
        margin: 0 0 2% 2%;
        padding: 2%;
        display: inline-block;
        border: solid 1px #ccc;
    }
    .board-list-img{
        width: 80px;
        height: 80px;
        display: inline-block;
        vertical-align: top;
    }
    .board-list-discribe{
        width: 78%;
        display: inline-block;
        margin-left: 5%;
    }
    .board-list-title{
        height: 34px;
        line-height: 34px;
        font-weight: bold;
    }
    .board-list-content{
        line-height: 24px;
        color: #666;
        overflow: hidden;
        height: 48px;
    }
    .more-link{
        color: #F38D12;
        float: right;
    }
    .more-link:hover{
        text-decoration: underline;
    }
</style>