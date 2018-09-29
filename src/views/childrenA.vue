<template>
    <div class="childrenA">
        <h1>
            子组件A
        </h1>
        <div>role传值：{{role}}</div>
        <input type="text" placeholder="请输入..." v-model="name"/>
        <input type="button" value="提交" @click="addTo"/>
        <!--<span>name输入：{{name}}</span>-->
        <slot name="header">header无插槽内容</slot>
        <slot>main无插槽内容</slot>
        <slot name="footer">footer无插槽内容</slot>
    </div>
</template>
<script>
    export default{
    props:["role"],
    data (){
        return {
            name : "",
        }
    }
    ,
    components:{

    }
    ,
    methods:{
        addTo(){
//            子组件自定义事件add-result
            this.$emit("add-result",this.name);
        }
    }
    }
</script>
<style scoped>
    .childrenA{
        border: solid 2px #DC0;
    }
</style>