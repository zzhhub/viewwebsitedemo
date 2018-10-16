<template>
    <div>
        <details-con :context="context" :spliteCount="2"></details-con>
    </div>
</template>
<script>
    import detailsCon from '../../views/detailsCon.vue'
    export default{
        components:[
            detailsCon
        ],
        data (){
            return {
                context: {
                    title: '接近天堂的地方',
                    imgurl:[
                        'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=26ffe7f07b899e517c8e3d1672a7d990/8ad4b31c8701a18b94d326429e2f07082838fe86.jpg',
                        'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=160c8b5bd843ad4ba22e41c2b2035a89/060828381f30e92477a6eacf45086e061c95f7ca.jpg',
                        'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=4ad0da8dd688d43ff4a996f04d1cd2aa/b219ebc4b74543a934f587341e178a82b801145f.jpg',
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3345577541,440491519&fm=27&gp=0.jpg',
                    ],
                    prams:[
                        '牟尼沟风景区位于松潘县西南牟尼乡镜内。占地面积160平方公里，最低海拔2800米，最高海拔4070米，年平均气温约4度。2011年顶峰国际旅游规划项目。',
                        '景区内山、林、洞、海等相应成辉，林木遍野，大小海子可与九寨彩池比美，钙化池瀑布可与黄龙“瑶池”争辉。主要景点有：扎嘎瀑布、牟尼森林、百亩杜鹃、翡翠温泉、百花湖、月亮湖、天鹅湖和溶洞群等。',
                        '牟尼沟位于四川省阿坝藏族羌族自治州松潘县境内，距成都三百多公里，占地160平方公里，最高海拔4070米，最低海拔2800米，年平均气温7℃，自然风光迷人、民族风情浓郁、汇聚了原始森林之神韵，牟尼沟风景主要以原始森林、高山湖泊、温泉、巨型钙华瀑布、环形瀑布、钙华彩池为主要特色，景区由扎嘎瀑布和二道海两部分组成。山、水、林在这里巧妙地融为一体。',
                        '松潘牟尼沟位于四川省阿坝州藏族羌族自治州松潘县城西36公里处，距成都300余公里，面积160平方公 里，最低海拔2800米，最高海拔4070米，年平均气温7℃，属于黄龙景区的西部景观，经过十几年的发展，昔日名不见经转的小山沟，已成为世界级的风景名胜区，被列入联合国“世界生物圈保护区”、“世界自然遗产”、“绿色环球21”。牟尼沟景区占地160平方公里，最高海拔4070米，最低海拔 2899 米，年平均气温7℃自然风光独特、民族风情浓郁,天宇飞瀑、梦幻花海堪称中国一绝！',
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