<template>
    <div>
        <details-con :context="context" :spliteCount="2"></details-con>
        <div class="shoppingBox">
            <h1 class="content-title">资费专区</h1>
            <div class="content-main">
                <table class="content-table">
                    <tr class="content-tr">
                        <th class="content-sidetxt">购买数量:</th>
                        <td class="content-sidecon">
                            <v-counter :max="20" :min="1" @on-change="onParamChange('buyNum', $event)"></v-counter>
                        </td>
                    </tr>
                    <tr class="content-tr">
                        <th class="content-sidetxt">购票类型:</th>
                        <td class="content-sidecon">
                            <v-selection :selections="buyTypes" @on-change="onParamChange('buyType', $event)"></v-selection>
                        </td>
                    </tr>
                    <tr class="content-tr">
                        <th class="content-sidetxt">适用范围:</th>
                        <td class="content-sidecon">
                            <v-chooser :selections="periodList" @on-change="onParamChange('period', $event)"></v-chooser>
                        </td>
                    </tr>
                    <tr class="content-tr">
                        <th class="content-sidetxt">景点选择:</th>
                        <td>
                            <v-mul-chooser :selections="versionList" @on-change="onParamChange('versions', $event)"></v-mul-chooser>
                        </td>
                    </tr>
                    <tr class="content-tr">
                        <th class="content-sidetxt">总价:</th>
                        <td class="content-sidecon">{{priceSum * buyNum}}</td>
                    </tr>
                    <tr class="content-tr">
                        <th class="content-sidetxt"></th>
                        <td class="content-sidecon">
                            <input type="submit" class="btn btn-radius btn-primary" value="立即购买"  @click="showShoppingDialog"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <v-dialog :isShow="isShowShoppingDialog" @on-close="closeShoppingDialog">
            <h2 class="bank-title">订单详情</h2>
            <table class="buy-dialog-table">
                <tr>
                    <th>购买数量</th>
                    <th>购票类型</th>
                    <th>适用范围</th>
                    <th>景点选择</th>
                    <th>总价（元）</th>
                </tr>
                <tr>
                    <td>{{ buyNum }}</td>
                    <td>{{ buyType.label }}</td>
                    <td>{{ period.label }}</td>
                    <td>
                        <span class="bank-item" v-for="item in versions">{{ item.label }}</span>
                    </td>
                    <td><span style="color: #ff9900;">￥{{ priceSum * buyNum }}</span></td>
                </tr>
            </table>
            <h2 class="bank-title">付款银行</h2>
            <vbankChooser></vbankChooser>
            <div class="btn-group">
                <input type="submit" class="btn btn-radius btn-primary" style="margin: 0 10px;" value="确认" @click="orderConfirmDialog"/>
                <input type="submit" class="btn btn-radius btn-primary" style="margin: 0 10px;" value="取消" @click="closeShoppingDialog"/>
            </div>
        </v-dialog>
        <v-dialog :isShow="isOrderConfirmDialog" @on-close="closeOrderConfirmDialog">
            您的订单支付状态已变更。<span class="payStatus">{{ payStatus }}</span>
            <div>
                您可以：
                <input type="submit" class="btn btn-radius btn-primary" style="margin: 0 10px;" value="订单详情" @click="gotoOrderList"/>
                <input type="submit" class="btn btn-radius btn-primary" style="margin: 0 10px;" value="返回首页" @click="gotoIndex"/>
            </div>
        </v-dialog>
    </div>
</template>
<script>
    import detailsCon from '../../views/detailsCon.vue'
    import vChooser from '../../views/base/chooser.vue'
    import vCounter from '../../views/base/counter.vue'
    import vSelection from '../../views/base/selection.vue'
    import vMulChooser from '../../views/base/multiplyChooser.vue'
    import vbankChooser from '../../views/base/bankChooser.vue'
    import vDialog from '../../views/base/dialog.vue'
    import _ from 'lodash'
    export default{
        components:{
            detailsCon,vChooser,vCounter,vSelection,vMulChooser,vbankChooser,vDialog
        },
        data (){
            return {
                payStatus:'',
                isShowShoppingDialog:false,
                isOrderConfirmDialog:false,
                buyNum:1,
                buyType:{},
                period:{},
                versions:[],
                context:{
                    title:'紫色之都',
                    imgurl:[
                        'http://c.hiphotos.baidu.com/baike/s%3D220/sign=98bba49e4f90f60300b09b450913b370/503d269759ee3d6d47c2af6446166d224f4ade1c.jpg',
                        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1160123391,4050533370&fm=27&gp=0.jpg',
                        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=728329552,2582169832&fm=27&gp=0.jpg',
                        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2496955354,1482441793&fm=200&gp=0.jpg',
                    ],
                    prams:[
                        '普罗斯旺是法国东南部的一个地区，毗邻地中海，和意大利接壤。曾是是罗马帝国的一个行省，普罗斯旺境内有艾克斯（Aix-en-Provence）、马赛等名城，还有阿尔（Arles)市、葛德市、阿维尼翁（Avignon)、尼姆(Nimes)市等组成，并出产优质葡萄酒，该地区物产丰饶、阳光明媚、风景优美，从古希腊、古罗马时代起就吸引着无数游人，至今依然是旅游胜地。',
                        '提到普罗斯旺，在现今摩登浪漫的人的脑海里第一个出现的是代表甜美爱情的薰衣草，它的空气中总是充满了薰衣草、百里香、松树等的香气，这种独特的自然香气是在其他地方所无法轻易体验到的，其中又以薰衣草最为得天独厚且受到喜爱。在普罗旺斯，薰衣草花田一年四季都有着截然不同的景观。',
                        '如果有人说普罗斯旺是彻底的浪漫，大概也不过分，因为这里除了很久流传的浪漫爱情传奇，还有因《马赛曲》而闻名的马赛，因《基督山伯爵》而为众人皆知的依夫岛，还有儒雅的大学城艾克斯和阿维尼翁，回味久远的中世纪山庄，街边舒适的小咖啡馆等等，令人沉醉。',
                        '历史上的普罗旺斯地域范围变化很大，古罗马时期普罗旺斯行省北至阿尔卑斯山，南抵比利牛斯山脉，包括整个法国南部。罗马帝国时期，普罗旺斯就被列为其所属的省份。18世纪末大革命时期，法国被分成5个不同的行政省份，普罗旺斯是其中之一。到了20世纪60年代，行政省份又被重新组合划分成22个大区，于是有了普罗旺斯－阿尔卑斯大区。在温文尔雅的大学名城艾克斯、教皇之城亚维农的前后，还有那些逃过世纪变迁的中世纪小村落和古老的山镇。',
                    ]
                },
                versionList: [
                    {
                        label: '入门版',
                        value: 0
                    },
                    {
                        label: '中级版',
                        value: 1
                    },
                    {
                        label: '高级版',
                        value: 2
                    }
                ],
                periodList: [
                    {
                        label: '成人',
                        value: 0
                    },
                    {
                        label: '儿童',
                        value: 1
                    }
                ],
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
                priceSum:0
            }
        },
        methods:{
            onParamChange(attr,val){
                this[attr] = val
                this.getPrice()
            },
            getPrice(){
                let versionsArray = _.map(this.versions,(obj)=>{return obj.value})
                let paramsdata = {
                    buyNum:this.buyNum,
                    buyType:this.buyType.value,
                    period:this.period.value,
                    versions:versionsArray.join(',')
                }
                this.$http.post("/api/getPrice",paramsdata).then((res) => {
                    this.priceSum = res.data.data.priceSum
                })
            },
            showShoppingDialog(){
                this.isShowShoppingDialog = true;
            },
            closeShoppingDialog(){
                this.isShowShoppingDialog = false;
            },
            orderConfirmDialog(){
                this.isShowShoppingDialog = false;
                this.isOrderConfirmDialog = true;
                let versionsArray = _.map(this.versions,(obj)=>{return obj.value})
                let params = {
                    buyNum : this.buyNum,
                    buyType : this.buyType.value,
                    period : this.period.value,
                    versions : versionsArray.join(",")
                }
                this.$http.post("/api",params).then((res) => {
                    this.payStatus =  res.data.data.payStatus.msg
                })
            },
            closeOrderConfirmDialog(){
                this.isOrderConfirmDialog = false;
            },
            gotoOrderList(){
                this.isOrderConfirmDialog = false;
                this.$router.push({path:"/orderList"})
            },
            gotoIndex(){
                this.isOrderConfirmDialog = false;
                this.$router.push({path:"/"})
            }
        },
        mounted(){
            this.buyNum=1
            this.buyType=this.buyTypes[0]
            this.period=this.periodList[0]
            this.versions=[this.versionList[0]]
            this.getPrice()
        }
    }
</script>
<style scoped>
    .shoppingBox{
        padding: 10px;
    }
    .content-title{
        font-size: 20px;
        padding: 0 20px;
        background: #419ff7;
        color: #fff;
    }
    .content-table{
        width: 100%;
        margin: 10px auto;
    }
    .content-tr{
        height: 50px;
    }
    .content-sidetxt{
        color: #333;
        text-align: right;
        padding-right: 2%;
        width: 15%;
        font-size: 14px;
        font-weight: bold;
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
    .payStatus{
        font-weight: bold;
        font-size: 24px;
        margin: 0 15px;
        color: #ff9900;
    }
</style>