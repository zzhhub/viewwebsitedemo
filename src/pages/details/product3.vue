<template>
    <div>
        <details-con :context="context" :spliteCount="1"></details-con>
    </div>
</template>
<script>
    import detailsCon from '../../views/detailsCon.vue'
    export default{
        components:{
            detailsCon
        },
        data (){
            return {
                context:{
                    title:'有趣世界',
                    imgurl:[
                        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3550748254,1644484757&fm=27&gp=0.jpg',
                        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3061237829,3039869056&fm=27&gp=0.jpg',
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3965629581,623298655&fm=27&gp=0.jpg',
                        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3904163370,2390941520&fm=27&gp=0.jpg',
                    ],
                    prams:[
                        '历史上的普罗旺斯地域范围变化很大，古罗马时期普罗旺斯行省北至阿尔卑斯山，南抵比利牛斯山脉，包括整个法国南部。罗马帝国时期，普罗旺斯就被列为其所属的省份。18世纪末大革命时期，法国被分成5个不同的行政省份，普罗旺斯是其中之一。到了20世纪60年代，行政省份又被重新组合划分成22个大区，于是有了普罗旺斯－阿尔卑斯大区。在温文尔雅的大学名城艾克斯、教皇之城亚维农的前后，还有那些逃过世纪变迁的中世纪小村落和古老的山镇。',
                        '海底游览：由澳大利亚进口的国际最先进的半潜式海底游览船，使您像潜水员一样一睹海底神奇景观。',
                        '远海垂钓：游人可乘坐设施精良的澳大利亚进口钓鱼船，体味垂钓的乐趣。',
                        '空中跳伞：从开阔的海上平台自由起落，在浩瀚无垠的海上天空随意翱翔，游人可以亲自体验一段奇妙的旅行。',
                        '快艇：海上快艇，引领游人领略亚龙湾热带海域迷人的风光。',
                        '海上娱乐酒店：由日本进口的3800吨大型客轮改装成的目前中国规模最大的海上娱乐酒店，为游客提供客房、餐饮、娱乐、游戏、购物等各种游乐服务设施。',
                    ]
                },
            }
        },
        methods:{

        }
    }
</script>
<style scoped>

</style>