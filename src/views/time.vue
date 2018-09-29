<template>
    <div class="container">
        <Timeline>
            <TimelineItem>
                <p class="time">1976年</p>
                <p class="content">Apple I 问世</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">1984年</p>
                <p class="content">发布 Macintosh</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2007年</p>
                <p class="content">发布 iPhone</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2010年</p>
                <p class="content">发布 iPad</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2011年10月5日</p>
                <p class="content">史蒂夫·乔布斯去世</p>
            </TimelineItem>
        </Timeline>
        <Timeline>
            <TimelineItem color="green">发布1.0版本</TimelineItem>
            <TimelineItem color="green">发布2.0版本</TimelineItem>
            <TimelineItem color="red">严重故障</TimelineItem>
            <TimelineItem color="blue">发布3.0版本</TimelineItem>
            <TimelineItem><a href="">查看更多</a></TimelineItem>
        </Timeline>
        <Timeline>
            <TimelineItem color="green">
                <Icon type="ios-trophy" slot="dot"></Icon>
                <span>发布里程碑版本</span>
            </TimelineItem>
            <TimelineItem>发布1.0版本</TimelineItem>
            <TimelineItem>发布2.0版本</TimelineItem>
            <TimelineItem>发布3.0版本</TimelineItem>
        </Timeline>
    </div>
</template>
<script>
    export default{
    data (){
        return {}
    }
    ,
    components:{

    }
    }
</script>
<style scoped>
    .container{
        padding: 2rem;
    }
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>