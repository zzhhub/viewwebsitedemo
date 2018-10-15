<template>
    <div class="detail-wrap">
        <div class="detail-left">
            <div class="product-board">
                <img :src="productIcon">
                <ul>
                    <router-link v-for="(item,index) in products" tag="li" :key="index" active-class="active"
                                 :to="{ path: item.path }">
                        {{ item.name }}
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="detail-right">
            <keep-alive>
                <router-view>details demo</router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
    export default{
        data (){
        return {
            products: [
                {
                    name: '数据统计',
                    path: 'product0',
                    icon: require('../images/product0.jpg'),
                    active: true
                },
                {
                    name: '数据预测',
                    path: 'product1',
                    active: false
                },
                {
                    name: '流量分析',
                    path: 'product2',
                    active: false
                },
                {
                    name: '广告发布',
                    path: 'product3',
                    active: false
                }
            ],
            imgMap: {
                '/details/product0': require("../images/product0.jpg"),
                '/details/product1': require("../images/product1.jpg"),
                '/details/product2': require("../images/822.jpg"),
                '/details/product3': require("../images/823.jpg")
            }
        }
    },
    components:{

    },
    methods:{

    },
    computed: {
            productIcon () {
//            获取当前路由地址[嵌套路由]
                return this.imgMap[this.$route.path]
            }
    }
    }
</script>
<style scoped>
    .detail-wrap {
        width: 80%;
        margin: 0 auto;
        overflow: hidden;
        padding: 20px 0;
    }
    .detail-left {
        float: left;
        width: 21%;
        margin-right:2%;
        border:solid 1px #ccc;
        text-align: center;
    }
    .detail-right {
        float: left;
        width: 76%;
        display: inline-block;
        border:solid 1px #ccc;
    }
    .product-board>img{
        max-width: 40%;
        max-height: 40%;
        margin: 20px auto;
        display: block;
    }
    .product-board {
        background: #fff;
        padding: 20px 0;
    }
    .product-board ul {
        margin-top: 20px;
    }
    .product-board li {
        text-align: left;
        padding: 10px 15px;
        cursor: pointer;
    }
    .product-board li.active,
    .product-board li:hover {
        background: #162556;
        color: #fff;
    }
    .product-board li a {
        display: block;
    }
    .sales-board {
        background: #fff;
    }
    .sales-board-form {

    }
    .sales-board-intro h2 {
        font-size: 20px;
        padding: 20px;
    }
    .sales-board-intro p {
        background: #f7fcff;
        padding: 10px 20px;
        color: #999;
        line-height: 1.8;
    }
    .sales-board-form {
        padding: 30px 20px;
        font-size: 14px;
    }
    .sales-board-line {
        clear: both;
        padding-bottom: 20px;
    }
    .sales-board-line-left {
        display: inline-block;
        width: 100px;
    }
    .sales-board-line-right {
        display: inline-block;
        width: 75%;
    }
    .sales-board-des {
        border-top: 20px solid #f0f2f5;
        padding: 15px 20px;
    }
    .sales-board-des p {
        line-height: 1.6;
    }
    .sales-board-des h2 {
        font-size: 20px;
        padding-bottom: 15px;
    }
    .sales-board-des h3 {
        font-size: 18px;
        font-weight: bold;
        padding: 20px 0 10px 0;
    }
    .sales-board-des li {
        padding: 5px 0;
    }
    .sales-board-table {
        width: 100%;
        margin-top: 20px;
    }
    .sales-board-table th {
        background: #162556;
        color: #fff;
    }
    .sales-board-table td {
        border: 1px solid #f0f2f5;
        padding: 15px;
    }
</style>