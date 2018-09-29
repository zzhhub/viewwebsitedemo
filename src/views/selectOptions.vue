<template>
    <div>
        <Select v-model="model1">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Cascader :data="data" v-model="value1"></Cascader>
    </div>
</template>
<script>
    export default {
        data (){
            return {
                value1: [],
                model1: '',
                data: [
                    {
                        value: 'beijing',
                        label: '北京',
                        children: [
                            {
                                value: 'gugong',
                                label: '故宫'
                            },
                            {
                                value: 'tiantan',
                                label: '天坛'
                            },
                            {
                                value: 'wangfujing',
                                label: '王府井'
                            }
                        ]
                    },
                    {
                        value: 'jiangsu',
                        label: '江苏',
                        children: [
                            {
                                value: 'nanjing',
                                label: '南京',
                                children: [
                                    {
                                        value: 'fuzimiao',
                                        label: '夫子庙',
                                    }
                                ]
                            },
                            {
                                value: 'suzhou',
                                label: '苏州',
                                children: [
                                    {
                                        value: 'zhuozhengyuan',
                                        label: '拙政园',
                                    },
                                    {
                                        value: 'shizilin',
                                        label: '狮子林',
                                    }
                                ]
                            }
                        ]
                    }
                ],
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
            }
        }
    }
</script>
