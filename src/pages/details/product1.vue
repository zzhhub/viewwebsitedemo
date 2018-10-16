<template>
    <div>
        <details-con :context="context" :spliteCount="4"></details-con>
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
                    title:'萤火之森',
                    imgurl:[
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=583420028,112267570&fm=27&gp=0.jpg',
                        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2749167609,1759473760&fm=27&gp=0.jpg',
                        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2282511595,4064317561&fm=27&gp=0.jpg',
                    ],
                    prams:[
                        '上海萤火虫主题公园位于上海市松江区辰花路388号的青青旅游世界生态公园内。',
                        '城市污染的加剧，让不少人儿时夏天记忆里的萤火虫消失了。7月2日，新民晚报新民网记者获悉，上海首个萤火虫主题公园将于7月10日开放，生活在城市里的孩子将有机会寻找父辈童年的微光。届时，数万只萤火虫将陪伴游客共度仲夏夜之梦。',
                        '据了解，萤火虫主题公园位于上海市松江区辰花路388号的青青旅游世界生态公园内。主题公园分为四个区：萤火虫科普区、幼虫繁育区、萤光隧道、亲密接触区。届时，每天将有数万只萤火虫同时呈现，围绕在游客的身旁漫天飞舞，仿佛置身银河之中。由于不设隔离，游客可以与萤火虫亲密接触。据园方介绍，这些萤火虫来自武汉、江西、广东等地的养殖基地，并非野外采集。',
                        '萤火虫是很多人童年时最好的小伙伴，每到夏季，他们都会在漆黑的夜晚，追逐这些漫天飞舞的精灵。现在不少年轻人会选择到户外找寻萤火虫的身影。此前，全国只有厦门、广州、武汉等地建有萤火虫公园，如今，上海的萤火虫主题公园也将开业。',
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