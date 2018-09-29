<template>
    <div>
        <h1>用于浅色背景</h1>
        <div style="background: #f8f8f9;padding: 20px;">
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>
        </div>
        <h1>用于有背景的按钮</h1>
        <div style="background: #000;padding: 20px;">
            <Button type="default" ghost>Default</Button>
            <Button type="primary" ghost>Primary</Button>
            <Button type="dashed" ghost>Dashed</Button>
            <Button type="text" ghost>Text</Button>
            <Button type="info" ghost>Info</Button>
            <Button type="success" ghost>Success</Button>
            <Button type="warning" ghost>Warning</Button>
            <Button type="error" ghost>Error</Button>
        </div>
        <h1>带图标按钮</h1>
        <div>
            <Button type="primary" shape="circle" icon="ios-search"></Button>
            <Button type="primary" icon="ios-search">Search</Button>
            <Button type="primary" shape="circle" icon="ios-search">Search</Button>
            <Button type="primary" shape="circle">Circle</Button>
            <Button shape="circle" icon="ios-search"></Button>
            <Button icon="ios-search">Search</Button>
            <Button shape="circle" icon="ios-search">Search</Button>
            <Button shape="circle">Circle</Button>
        </div>
        <h1>按钮组</h1>
        <div>
            <RadioGroup v-model="buttonSize">
                <Radio label="large">Large</Radio>
                <Radio label="default">Default</Radio>
                <Radio label="small">small</Radio>
            </RadioGroup>
            <RadioGroup v-model="buttonSize" type="button">
                <Radio label="large">Large</Radio>
                <Radio label="default">Default</Radio>
                <Radio label="small">small</Radio>
            </RadioGroup>
            <br><br>
            <Button :size="buttonSize" type="primary">Primary</Button>
            <Button :size="buttonSize" type="default">Default</Button>
            <Button :size="buttonSize" type="dashed">Dashed</Button>
            <Button :size="buttonSize" type="text">Text</Button>
            <Button :size="buttonSize" icon="ios-download-outline" type="primary" shape="circle"></Button>
            <Button :size="buttonSize" icon="ios-download-outline" type="primary">Download</Button>
            <ButtonGroup :size="buttonSize">
                <Button :size="buttonSize" type="primary">
                    <Icon type="ios-arrow-back" />
                    Backward
                </Button>
                <Button :size="buttonSize" type="primary">
                    Forward
                    <Icon type="ios-arrow-forward" />
                </Button>
            </ButtonGroup>
        </div>
        <h1>100%宽度</h1>
        <div>
            <Button type="info short">SUBMIT</Button>
            <Button type="warning short">SUBMIT</Button>
            <br><br>
            <Button type="success" long>SUBMIT</Button>
            <br><br>
            <Button type="warning" long>SUBMIT</Button>
            <br><br>
            <Button type="error" long>DELETE</Button>
        </div>
        <h1>disabled按钮</h1>
        <div>
            <Button>Default</Button>
            <Button disabled>Default(Disabled)</Button>
            <br>
            <Button type="primary">Primary</Button>
            <Button type="primary" disabled>Primary(Disabled)</Button>
            <br>
            <Button type="dashed">Dashed</Button>
            <Button type="dashed" disabled>Dashed(Disabled)</Button>
            <br>
            <Button type="text">Text</Button>
            <Button type="text" disabled>Text(Disabled)</Button>
        </div>
        <div>
            <Button type="primary" loading>Loading...</Button>
            <Button type="primary" :loading="loading" @click="toLoading">
                <span v-if="!loading">Click me!</span>
                <span v-else="loading">Loading...</span>
            </Button>
            <Button type="primary" :loading="loading2" icon="ios-power" @click="toLoading2">
                <span v-if="!loading2">Click me!</span>
                <span v-else="loading2">Loading...</span>
            </Button>
            <Button loading shape="circle"></Button>
            <Button loading shape="circle" type="primary"></Button>
            <Button type="primary" :loading="loading" @click="loading = !loading">
                <span v-if="!loading">Click me!</span>
                <span v-else = "loading">Loading...</span>
            </Button>
        </div>
        <div>
            <h4>Basic</h4>
            <br><br>
            <ButtonGroup>
                <Button>Cancel</Button>
                <Button type="primary">Confirm</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button disabled>Yesterday</Button>
                <Button disabled>Today</Button>
                <Button disabled>Tomorrow</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button type="primary">L</Button>
                <Button>M</Button>
                <Button>M</Button>
                <Button type="dashed">R</Button>
            </ButtonGroup>
            <br><br>
            <h4>Icons</h4>
            <br><br>
            <ButtonGroup>
                <Button type="primary">
                    <Icon type="ios-arrow-back"></Icon>
                    Backward
                </Button>
                <Button type="primary">
                    Forward
                    <Icon type="ios-arrow-forward"></Icon>
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button type="primary" icon="ios-skip-backward"></Button>
                <Button type="primary" icon="ios-skip-forward"></Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button icon="ios-color-wand-outline"></Button>
                <Button icon="ios-sunny-outline"></Button>
                <Button icon="ios-crop"></Button>
                <Button icon="ios-color-filter-outline"></Button>
            </ButtonGroup>
            <br><br>
            <h4>Circle</h4>
            <br><br>
            <ButtonGroup shape="circle">
                <Button type="primary">
                    <Icon type="ios-arrow-back"></Icon>
                    Backward
                </Button>
                <Button type="primary">
                    Forward
                    <Icon type="ios-arrow-forward"></Icon>
                </Button>
            </ButtonGroup>
            <ButtonGroup shape="circle">
                <Button type="primary" icon="ios-skip-backward"></Button>
                <Button type="primary" icon="ios-skip-forward"></Button>
            </ButtonGroup>
            <ButtonGroup shape="circle">
                <Button icon="ios-color-wand-outline"></Button>
                <Button icon="ios-sunny-outline"></Button>
                <Button icon="ios-crop"></Button>
                <Button icon="ios-color-filter-outline"></Button>
            </ButtonGroup>
            <br><br>
            <h4>Size</h4>
            <br><br>
            <ButtonGroup size="large">
                <Button>Large</Button>
                <Button>Large</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button>Default</Button>
                <Button>Default</Button>
            </ButtonGroup>
            <ButtonGroup size="small" vertical>
                <Button>Small</Button>
                <Button>Small</Button>
            </ButtonGroup>
            <br><br>
            <ButtonGroup size="large" shape="circle">
                <Button>Large</Button>
                <Button>Large</Button>
            </ButtonGroup>
            <ButtonGroup shape="circle">
                <Button>Default</Button>
                <Button>Default</Button>
            </ButtonGroup>
            <ButtonGroup size="small" shape="circle">
                <Button>Small</Button>
                <Button>Small</Button>
            </ButtonGroup>
        </div>
    </div>
</template>
<script>
    export default{
    data (){
        return {
            buttonSize:'large',
            loading:false,
            loading2:false
        }
    },
    components:{

    },
    methods:{
        toLoading(){
            this.loading = true;
        },
        toLoading2(){
            this.loading2 = true;
        },
    }
    }
</script>
<style scoped>
    .short{
        width: 50%;
    }
</style>