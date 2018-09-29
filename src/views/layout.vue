<template>
    <div id="#app">
        <div class="app-header">
            <div class="app-header-inner">
                <img src="../images/logo.png" width="60" alt=""/>
                <div class="head-nav">
                    <ul class="nav-list">
                        <li><router-link to="/" tag="span">登录</router-link></li>
                        <li class="nav-pipe">|</li>
                        <li><a href="">注册</a></li>
                        <li class="nav-pipe">|</li>
                        <li><a href="">关于</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="app-content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="app-footer">
            <div>© 2018 xx科技有限公司</div>
        </div>
    </div>
</template>
<script>
    export default{
        data (){
            return {}
        },
        components:{

        },
        methods:{

        }
    }
</script>
<style scoped>
    .app-header-inner{
        width: 80%;
        margin: 0 auto;
    }
    .app-header{
        background: #162556;
        height: 60px;
    }
    .head-nav{
        margin-top: 20px;
        float: right;
    }
    .nav-list>li{
        color: #fff;
        font-size: 14px;
        float: left;
        margin:0 10px;
    }
    .nav-list>li>a{
        color: #fff;
        font-size: 14px;
    }

    .app-footer{
        background: #162556;
        color: #fff;
        padding: 20px 0;
        text-align: center;
    }
</style>