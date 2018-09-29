<style scoped>
    .grid .col-items{
        padding: 20px 0;
        background: #f5f5f5;
        text-align: center;
    }
    .grid .col-items:nth-child(even){
        background: #d6d7d8;
    }
</style>
<template>
    <div class="grid">
        <Row>
            <Col class="col-items" span="12">col-12</Col>
            <Col class="col-items" span="12">col-12</Col>
        </Row>
        <Row>
            <Col class="col-items" span="8">col-8</Col>
            <Col class="col-items" span="8">col-8</Col>
            <Col class="col-items" span="8">col-8</Col>
        </Row>
        <Row>
            <Col class="col-items" span="6">col-6</Col>
            <Col class="col-items" span="6">col-6</Col>
            <Col class="col-items" span="6">col-6</Col>
            <Col class="col-items" span="6">col-6</Col>
        </Row>
        <!-- (16+8n)px -->
        <Row :gutter="16">
            <Col class="col-items" span="6">
            <div>col-6</div>
            </Col>
            <Col class="col-items" span="6">
            <div>col-6</div>
            </Col>
            <Col class="col-items" span="6">
            <div>col-6</div>
            </Col>
            <Col class="col-items" span="6">
            <div>col-6</div>
            </Col>
        </Row>
        <Row :gutter="24">
            <Col class="col-items" span="6">
            <div>col-6</div>
            </Col>
            <Col class="col-items" span="6">
            <div>col-6</div>
            </Col>
            <Col class="col-items" span="6">
            <div>col-6</div>
            </Col>
            <Col class="col-items" span="6">
            <div>col-6</div>
            </Col>
        </Row>
        <Row type="flex">
            <Col class="col-items" span="6" order="4">1 | order-4</Col>
            <Col class="col-items" span="6" order="3">2 | order-3</Col>
            <Col class="col-items" span="6" order="2">3 | order-2</Col>
            <Col class="col-items" span="6" order="1">4 | order-1</Col>
        </Row>
        <Row>
            <Col class="col-items" span="18" push="6">col-18 | push-6</Col>
            <Col class="col-items" span="6" pull="18">col-6 | pull-18</Col>
        </Row>
        <Row>
            <Col class="col-items" span="18">col-18 | push-6</Col>
            <Col class="col-items" span="6" pull="6">col-6 | pull-18</Col>
        </Row>
        <!-- justify-content="水平"-->
        <p>子元素向左排列</p>
        <Row type="flex" justify="start" class="code-row-bg">
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
        </Row>
        <p>子元素向右排列</p>
        <Row type="flex" justify="end" class="code-row-bg">
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
        </Row>
        <p>子元素居中排列</p>
        <Row type="flex" justify="center" class="code-row-bg">
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
        </Row>
        <p>子元素等宽排列</p>
        <Row type="flex" justify="space-between" class="code-row-bg">
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
        </Row>
        <p>子元素分散排列</p>
        <Row type="flex" justify="space-around" class="code-row-bg">
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
            <Col class="col-items" span="4">col-4</Col>
        </Row>
        <!-- align-items="垂直"-->
        <p>顶部对齐</p>
        <Row type="flex" justify="center" align="top" class="code-row-bg">
            <Col class="col-items" span="4"><p style="height: 80px">col-4</p></Col>
            <Col class="col-items" span="4"><p style="height: 30px">col-4</p></Col>
            <Col class="col-items" span="4"><p style="height: 100px">col-4</p></Col>
            <Col class="col-items" span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <p>底部对齐</p>
        <Row type="flex" justify="center" align="bottom" class="code-row-bg">
            <Col class="col-items" span="4"><p style="height: 80px">col-4</p></Col>
            <Col class="col-items" span="4"><p style="height: 30px">col-4</p></Col>
            <Col class="col-items" span="4"><p style="height: 100px">col-4</p></Col>
            <Col class="col-items" span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <p>居中对齐</p>
        <Row type="flex" justify="center" align="middle" class="code-row-bg">
            <Col class="col-items" span="4"><p style="height: 80px">col-4</p></Col>
            <Col class="col-items" span="4"><p style="height: 30px">col-4</p></Col>
            <Col class="col-items" span="4"><p style="height: 100px">col-4</p></Col>
            <Col class="col-items" span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <Row>
            <Col class="col-items" :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
            <Col class="col-items" :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
            <Col class="col-items" :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
        </Row>
        <Row>
            <Col class="col-items" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
            <Col class="col-items" :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
            <Col class="col-items" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
        </Row>
    </div>
</template>
<script>
    export default {

    }
</script>

<script>
    export default {
        methods: {
            handleStart () {
        this.$Modal.info({
            title: 'Bravo',
            content: 'Now, enjoy the convenience of iView.'
        });
    }
    }
    }
</script>
