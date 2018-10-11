<template>
    <div id="#app">
        <div class="app-header">
            <div class="app-header-inner">
                <img src="./images/logo.png" width="60" alt=""/>
                <div class="head-nav">
                    <ul class="nav-list">
                        <!--<li><router-link to="/" tag="span" @click="showLoginDialog">登录</router-link></li>-->
                        <li><a @click="showLoginDialog">登录</a></li>
                        <li class="nav-pipe">|</li>
                        <li><a @click="showRegisterDialog">注册</a></li>
                        <li class="nav-pipe">|</li>
                        <li><a @click="showAboutDialog">关于</a></li>
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
        <!--关于-->
        <dialogs :isShow="showAbout" @closeDialog="closeDialog('showAbout')">
            <div slot="dialog-header">温馨提示</div>
            <div slot="dialog-content">相关的所有代码都是免费开源的，所以如果在官网上看到的任何内容都可以在我的git项目中找到源码，不要发邮件向我要代码，我没有私自保留任何代码。</div>
        </dialogs>
        <!--注册-->
        <dialogs :isShow="showRegister" @closeDialog="closeDialog('showRegister')">
            <div slot="dialog-header">注册</div>
            <div slot="dialog-content">
                <div class="dialog-items">
                    <span>手机号:</span>
                    <input type="text" placeholder="手机号"/>
                </div>
                <div class="dialog-items">
                    <span>密码:</span>
                    <input type="password" placeholder="密码"/>
                </div>
                <div class="dialog-items">
                    <span>验证码:</span>
                    <input type="text" placeholder="验证码"/>
                    <img src="" alt="验证码">
                </div>
                <div class="dialog-items">
                    <span></span>
                    <input type="submit" value="注册"/>
                </div>
            </div>
        </dialogs>
        <!--登录-->
        <dialogs :isShow="showLogin" @closeDialog="closeDialog('showLogin')">
            <div slot="dialog-header">登录</div>
            <div slot="dialog-content">
                <div class="dialog-items">
                    <span>手机号:</span>
                    <input type="text" placeholder="手机号"/>
                </div>
                <div class="dialog-items">
                    <span>密码:</span>
                    <input type="password" placeholder="密码"/>
                </div>
                <div class="dialog-items">
                    <span></span>
                    <input type="submit" value="登录"/>
                </div>
            </div>
        </dialogs>
    </div>
</template>
<script>
    import dialogs from "./views/dialog.vue"
    export default{
        data (){
            return {
                showAbout:false,
                showRegister:false,
                showLogin:false
            }
        },
        components:{
            dialogs
        },
        methods:{
            showAboutDialog(){
                this.showAbout = true
            },
            showLoginDialog(){
                this.showLogin = true
            },
            showRegisterDialog(){
                this.showRegister = true
            },
            closeDialog(value){
                this[value] = false
            }
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
    .dialog-items{
        display: block;
        height: 30px;
        line-height: 30px;
        margin: 0 auto 10px auto;
    }
    .dialog-items:last-child{
        margin-bottom: 0;
    }
    .dialog-items>span{
        display: inline-block;
        width: 10%;
        text-align: right;
        margin-right: 3%;
    }
    .dialog-items>input[type='text'],.dialog-items>input[type='password']{
        display: inline-block;
        height: 30px;
        line-height: 30px;
        border: solid 1px #dbdbdb;
        border-radius: 3px;
        padding: 0 4px;
        width: 200px;
    }
    .dialog-items>img{
        height: 30px;
        line-height: 30px;
        width: 80px;
        cursor: pointer;
    }
    .dialog-items>input[type='submit']{
        width: 200px;
        height: 36px;
        line-height: 36px;
        color: #fff;
        background: #162556;
        border-radius: 3px;
        cursor: pointer;
        border: none;
    }
</style>