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
                            <v-counter @on-change="onParamChange('buyNum', $event)"></v-counter>
                        </td>
                    </tr>
                    <tr class="content-tr">
                        <th class="content-sidetxt">购票类型:</th>
                        <td class="content-sidecon">
                            <v-selection :selections="buyTypes" @on-change="onParamChange('buyType', $event)"></v-selection>
                        </td>
                    </tr>
                    <tr class="content-tr">
                        <th class="content-sidetxt">性别:</th>
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
                        <td class="content-sidecon">0</td>
                    </tr>
                    <tr class="content-tr">
                        <th class="content-sidetxt"></th>
                        <td class="content-sidecon">
                            <input type="submit" value="立即购买"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import detailsCon from '../../views/detailsCon.vue'
    import vChooser from '../../views/base/chooser.vue'
    import vCounter from '../../views/base/counter.vue'
    import vSelection from '../../views/base/selection.vue'
    import vMulChooser from '../../views/base/multiplyChooser.vue'
    export default{
        components:{
            detailsCon,vChooser,vCounter,vSelection,vMulChooser
        },
        data (){
            return {
                buyNum:0,
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
                        label: '男',
                        value: 0
                    },
                    {
                        label: '女',
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
            }
        },
        methods:{
            onParamChange(attr,val){
                this[attr] = val
            }
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
</style>