<template>
    <div class="orderList-wrap">
        <div class="orderList-inner">
            <span class="orderList-item">选购类型：<v-select :selections="buyTypes" @on-change="changeBuyTypes('buyType',$event)"></v-select></span>
            <span class="orderList-item">日期筛选：<v-datepicker @on-change="startDate" :width="'210px'" :styleObj="{'width':'200px','border':'solid 1px #ccc','height':'25px','border-radius':'2px'}" :readonly="true"></v-datepicker>
            -<v-datepicker @on-change="endDate" :width="'210px'" :styleObj="{'width':'200px','border':'solid 1px #ccc','height':'25px','border-radius':'2px'}" :readonly="true"></v-datepicker></span>
            <span class="orderList-item">搜索：<input type="text" class="searchInput" placeholder="请输入..." @keyup.enter="getData" v-model.lazy="query"></span>
        </div>
        <div style="width: 1000px;margin: 40px auto 0;">
            <h2 v-if='isTableshow' class="bank-title">订单详情</h2>
            <table class="buy-dialog-table" v-if='isTableshow'>
                <tr>
                    <th>产品编号</th>
                    <th>产品名称</th>
                    <th>产品描述</th>
                    <th>单价（元）</th>
                </tr>
                <tr v-for="(proitem,index) in productList">
                    <td style="width: 25%;">{{ proitem.productId }}</td>
                    <td style="width: 25%;">{{ proitem.productName }}</td>
                    <td style="width: 25%;"><img width="200" height="100" :src="proitem.productImg" alt=""/></td>
                    <td style="width: 25%;"><span style="color: #ff9900;">￥{{ proitem.productPrice }}</span></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import store from '../vuex/store.js'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    import vSelection from '../views/base/selection.vue'
    import vDatepicker from '../views/base/datepicker.vue'
    import vDialog from '../views/base/dialog.vue'
    export default{
        store,
        data (){
            return {
                isTableshow:false,
                query:"",
                ispayDialog:false,
                buyType:0,
                startTime:'',
                endTime:'',
                productList:[],
                buyTypes: [
                    {
                        label: '单次',
                        value: 0
                    },
                    {
                        label: '周卡',
                        value: 1
                    },{
                        label: '月卡',
                        value: 2
                    },
                    {
                        label: '季卡',
                        value: 3
                    },
                    {
                        label: '年卡',
                        value: 4
                    }
                ],
                productList:[
                    {

                    },
                ]
            }
        },
        components:{
            'v-select':vSelection,vDatepicker,vDialog
        },
        watch:{
            query(){
                this.getData()
            }
        },
        //利用mapState
        computed:{
        },
        methods:{
            startDate(obj){
                this.startTime = obj
                this.getData()
            },
            endDate(obj){
                this.endTime = obj
                this.getData()
            },
            getData(obj){
                this.isTableshow = true
                let paramsdata ={
                    buyType:this.buyType,
                    startTime:this.startTime,
                    endTime:this.endTime,
                    query:this.query
                }
                this.$http.post("/api",paramsdata).then((res) => {
                    this.productList = res.data.data.goods.productList
                })
            },
            changeBuyTypes(obj){
                this.buyType = obj.value
                this.getData()
            },
            showSuccDialog(){

            }
        },
        mounted(){
            this.getData()
        }
    }
</script>
<style scoped>
    .orderList-wrap{
        width: 80%;
        margin: 0 auto;
        padding: 20px 0;
        min-height: 600px;
    }
    .orderList-inner{
        text-align: center;
    }
    .orderList-item{
        margin: 0 20px;
    }
    .searchInput{
        width: 200px;
        border: solid 1px #ccc;
        border-radius:2px;
        height: 25px;
        padding: 5px 10px;
    }
    .bank-title{
        color: #333;
        font-weight: bold;
    }
    .bank-item{
        margin: 0 4px;
    }
    .buy-dialog-btn {
        margin-top: 20px;
    }
    .buy-dialog-table {
        width: 100%;
        margin-bottom: 20px;
    }
    .buy-dialog-table td,
    .buy-dialog-table th{
        border: 1px solid #e3e3e3;
        text-align: center;
        padding: 5px 0;
    }
    .buy-dialog-table th {
        background: #4fc08d;
        color: #fff;
        border: 1px solid #4fc08d;
    }
    .btn{
        padding:6px 20px;
        color: #333;
        cursor: pointer;
    }
    .btn-radius{
        border-radius: 3px;
    }
    .btn-group{
        margin: 10px auto 0 auto;
        text-align: center;
    }
    .btn-primary{
        background: #4fc08d;
        color: #fff;
        border: solid 2px #4fc08d;
    }
    .btn-primary:hover{
        background: #40976e;
        border: solid 2px #40976e;
    }
</style>