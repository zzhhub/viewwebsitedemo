<template>
    <div>
        <div style="padding: 10px;background: #f8f8f9">
            <Card title="Options" icon="ios-options" :padding="0" shadow style="width: 300px;">
                <CellGroup>
                    <Cell title="Only show titles" />
                    <Cell title="Display label content" label="label content" />
                    <Cell title="Display right content" extra="details" />
                    <Cell title="Link" extra="details" to="/button" />
                    <Cell title="Open link in new window" to="/components/button" target="_blank" />
                    <Cell title="Disabled" disabled />
                    <Cell title="Selected" selected />
                    <Cell title="With Badge" to="/components/badge">
                        <Badge :count="10" slot="extra" />
                    </Cell>
                    <Cell title="With Switch">
                        <Switch v-model="switchValue" slot="extra" />
                    </Cell>
                </CellGroup>
            </Card>
        </div>
        <div>Text
            <Divider type="vertical" />
            <a href="#">Link</a>
            <Divider type="vertical" />
            <a href="#">Link</a>
        </div>
        <Divider orientation="left">Left Text</Divider>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
        <Divider orientation="center">Center Text</Divider>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
        <Divider orientation="right">Right Text</Divider>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
        <Divider />
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
        <Divider>With Text</Divider>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
        <Divider dashed />
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
        <div class="demo-split">
            <Split v-model="split1">
                <div slot="left" class="demo-split-pane">
                    Left Pane
                </div>
                <div slot="right" class="demo-split-pane">
                    Right Pane
                </div>
            </Split>
        </div>
        <div class="demo-split">
            <Split v-model="split2" mode="vertical">
                <div slot="top" class="demo-split-pane">
                    Top Pane
                </div>
                <div slot="bottom" class="demo-split-pane">
                    Bottom Pane
                </div>
            </Split>
        </div>
        <Card style="width:350px;display: inline-block;" >
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                {{title}}
            </p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>
                Change
            </a>
            <ul>
                <li v-for="item in randomMovieList">
                    <a :href="item.url" target="_blank">{{ item.name }}</a>
                <span right>
                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
                    <Icon type="ios-star" v-if="item.rate >= 9.5"></Icon>
                    <Icon type="ios-star-half" v-else></Icon>
                    {{ item.rate }}
                </span>
                </li>
            </ul>
        </Card>
        <Card style="width:350px;display: inline-block;">
            <div style="text-align:center">
                <img src="../images/logo.png" width="40%;">
                <h3>A high quality UI Toolkit based on Vue.js</h3>
            </div>
        </Card>
        <Row type="flex" justify="center" align="middle">
            <Col span="6" offset="2" style="padding: 20px;background: #f8f8f9;">
                <div style="background:#eee;width:350px;padding: 20px">
                    <Card>
                        <p slot="title">No border title</p>
                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                    </Card>
                </div>
            </Col>
            <Col span="6" offset="1" style="padding: 20px;background: #f8f8f9;">
                <div style="background:#eee;padding: 20px">
                    <Card shadow>
                        <p slot="title">No border title</p>
                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                    </Card>
                </div>
            </Col>
            <Col span="6" offset="1" style="padding: 20px;background: #f8f8f9;">
                <div style="background:#eee;width:350px;padding: 20px">
                    <Card shadow>
                        <p slot="title">No border title</p>
                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
        return {
            split2: 0.3,
            split1: 0.5,
            title:'列表',
            temp_array:'',
            movieList: [
                {
                    name: 'The Shawshank Redemption',
                    url: 'https://movie.douban.com/subject/1292052/',
                    rate: 9.6
                },
                {
                    name: 'Leon:The Professional',
                    url: 'https://movie.douban.com/subject/1295644/',
                    rate: 9.4
                },
                {
                    name: 'Farewell to My Concubine',
                    url: 'https://movie.douban.com/subject/1291546/',
                    rate: 9.5
                },
                {
                    name: 'Forrest Gump',
                    url: 'https://movie.douban.com/subject/1292720/',
                    rate: 9.4
                },
                {
                    name: 'Life Is Beautiful',
                    url: 'https://movie.douban.com/subject/1292063/',
                    rate: 9.5
                },
                {
                    name: 'Spirited Away',
                    url: 'https://movie.douban.com/subject/1291561/',
                    rate: 9.2
                },
                {
                    name: 'Schindler List',
                    url: 'https://movie.douban.com/subject/1295124/',
                    rate: 9.4
                },
                {
                    name: 'The Legend of 1900',
                    url: 'https://movie.douban.com/subject/1292001/',
                    rate: 9.2
                },
                {
                    name: 'WALL·E',
                    url: 'https://movie.douban.com/subject/2131459/',
                    rate: 9.3
                },
                {
                    name: 'Inception',
                    url: 'https://movie.douban.com/subject/3541415/',
                    rate: 9.2
                }
                ],
            randomMovieList: []
        }
    },
    methods: {
        changeLimit () {
            function getArrayItems(arr, num) {
                const temp_array = [];
                for (let index in arr) {
                    temp_array.push(arr[index]);
                }
                const return_array = [];
                for (let i = 0; i<num; i++) {
                    if (temp_array.length>0) {
                        const arrIndex = Math.floor(Math.random()*temp_array.length);
                        return_array[i] = temp_array[arrIndex];
                        temp_array.splice(arrIndex, 1);//arrIndex位置，删掉一个(temp_array数据池排除一个)==随机生成return_array 0=
                    } else {
                        break;
                    }
                }
                return return_array;
            }
            this.randomMovieList = getArrayItems(this.movieList, 5);
        }
    },
    mounted () {
        this.changeLimit();
    }
    }
</script>
<style scoped>
    .ivu-card ul:not([class^=ivu-]){
        list-style: none;
    }
    .ivu-card ul li span{
        float: right;
        color: #ffac2d;
    }
    .demo-split{
        width: 100%;
        height: 200px;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding: 10px;
    }
</style>
