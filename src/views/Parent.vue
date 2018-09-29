<template>
    <div class="parent">
        <transition name="fade" mode="out-in">
            <!-- 动态组件 -->
            <p :is="componentCurr"></p>
        </transition>
        <input type="button" value="toggle" @click="toggleComponent"/>
    </div>
</template>
<script>
    import childrenA from "./childrenA.vue"
    import childrenB from "./childrenB.vue"
    export default{
    data (){
        return {
            componentCurr : "children-a",
        }
    },
    components:{
        childrenA,
        childrenB
    },
    methods:{
        toggleComponent(){
            if(this.componentCurr==="children-a")
                this.componentCurr="children-b"
            else
                this.componentCurr="children-a"
        }
    }
    }
</script>
<style scoped>
</style>