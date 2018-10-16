<template>
    <div id="#app">
        <div class="app-header">
            <div class="app-header-inner">
                <router-link :to="{path:'/'}">
                    <img src="./images/logo.png" width="60" alt=""/>
                </router-link>
                <div class="head-nav">
                    <ul class="nav-list">
                        <!--<li><router-link to="/" tag="span" @click="showLoginDialog">登录</router-link></li>-->
                        <li><a v-if="userName!==''">{{userName}}</a></li>
                        <li><a v-if="userName===''" @click="showLoginDialog">登录</a></li>
                        <li class="nav-pipe">|</li>
                        <li><a v-if="userName!==''" @click="quit">退出</a></li>
                        <li><a v-if="userName===''" @click="showRegisterDialog">注册</a></li>
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
                    <input v-model="regPhoneInput" id="regPhoneInput" type="text" placeholder="手机号"/>
                    <a class="error-msg">{{regPhonemsg.errortext}}</a>
                </div>
                <div class="dialog-items">
                    <span>密码:</span>
                    <input v-model="regPsdInput" id="regPsdInput" type="password" placeholder="密码"/>
                    <a class="error-msg">{{regPsdmsg.errortext}}</a>
                </div>
                <div class="dialog-items">
                    <span>验证码:</span>
                    <input v-model="regPsdCfmInput" id="regPsdCfmInput" type="text" placeholder="验证码"/>
                    <img v-if="!cfmcode" src="" alt="cfmcode">
                    <a class="error-msg">{{regPsdCfmsg.errortext}}</a>
                </div>
                <div class="dialog-items">
                    <span></span>
                    <input type="submit" value="注册" @click="reg"/>
                </div>
            </div>
        </dialogs>
        <!--登录-->
        <dialogs :isShow="showLogin" @closeDialog="closeDialog('showLogin')">
            <div slot="dialog-header">登录</div>
            <div slot="dialog-content">
                <div class="dialog-items">
                    <span>手机号:</span>
                    <input v-model="logUserPhone" id="logUserPhoneInput" type="text" placeholder="手机号"/>
                    <a class="error-msg">{{logphonemsg.errortext}}</a>
                </div>
                <div class="dialog-items">
                    <span>密码:</span>
                    <input v-model="logPassword" id="logUserPsdInput" type="password" placeholder="密码"/>
                    <a class="error-msg">{{logpsdmsg.errortext}}</a>
                </div>
                <div class="dialog-items">
                    <span></span>
                    <input @click="login" type="submit" value="登录"/>
                </div>
            </div>
        </dialogs>
    </div>
</template>
<script>
    import dialogs from "./views/dialog.vue"
    const phoneReg = /^1[34578]\d{9}$/
    const psdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/
    export default{
        data (){
            return {
                userName:'',
                showAbout:false,
                showRegister:false,
                showLogin:false,
                userPhoneFlag:false,
                userPsdFlag:false,
                logUserPhone:'',
                logPassword:'',
                errortext:'',
                cfmcode:'',
                regPhoneInput:'',
                regPsdInput:'',
                regPsdCfmInput:'',
            }
        },
        components:{
            dialogs
        },
        computed:{
            logphonemsg(){
                let errortext,status
                if(!(phoneReg.test(this.logUserPhone))){
                    status = false
                    errortext='手机格式不对'
                }
                else{
                    status = true
                    errortext=''
                }
                if(!this.userPhoneFlag){
                    errortext=''
                    this.userPhoneFlag = true
                }
                return{
                    status,
                    errortext
                }
            },
            logpsdmsg(){
                let errortext,status
                if(!(psdReg.test(this.logPassword))){
                    status = false
                    errortext='密码必须是6位数(包含)以上数字与字母的组合'
                }
                else{
                    status = true
                    errortext=''
                }
                if(!this.userPsdFlag){
                    errortext=''
                    this.userPsdFlag = true
                }
                return{
                    status,
                    errortext
                }
            },
            regPhonemsg(){
                let errortext,status
                if(!(phoneReg.test(this.regPhoneInput))){
                    status = false
                    errortext='手机格式不对'
                }
                else{
                    status = true
                    errortext=''
                }
                if(!this.regPhoneFlag){
                    errortext=''
                    this.regPhoneFlag = true
                }
                return{
                    status,
                    errortext
                }
            },
            regPsdmsg(){
                let errortext,status
                if(!(psdReg.test(this.regPsdInput))){
                    status = false
                    errortext='密码必须是6位数(包含)以上数字与字母的组合'
                }
                else{
                    status = true
                    errortext=''
                }
                if(!this.regPsdFlag){
                    errortext=''
                    this.regPsdFlag = true
                }
                return{
                    status,
                    errortext
                }
            },
            regPsdCfmsg(){
                let errortext,status
                if(this.cfmcode!==this.regPsdCfmInput){
                    status = false
                    errortext='验证码不正确'
                }
                else{
                    status = true
                    errortext=''
                }
                if(!this.regPsdCfmFlag){
                    errortext=''
                    this.regPsdCfmFlag = true
                }
                return{
                    status,
                    errortext
                }
            }
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
            },
            login(){
                if(!this.logphonemsg.status || !this.logpsdmsg.status){
                    if(this.logUserPhone===''){
                        alert( '手机号码未填写');
                        $("#logUserPhoneInput").focus();
                    }else if(this.logPassword===''){
                        alert('密码未填写');
                        $("#logUserPsdInput").focus();
                    }
                }
                else{
                    this.$http.get("/api/login").then((res) => {
                        let datas = res.data.data;
                        this.userName = datas.userName;
//                        隐藏弹出层
                        this.showLogin = false;
                        this.closeDialog('showLogin');
//                        重置内容
                        this.logUserPhone = '';
                        this.logPassword = '';
                        this.errortext = '';
                        this.userPsdFlag = false;
                        this.userPhoneFlag = false
                    },(err)=>{
                        console.log(err)
                    })
                }
            },
            quit(){
                this.userName = ''
            },
            reg(){
                if(!this.regPhonemsg.status || !this.regPsdmsg.status || !this.regPsdCfmsg.status){
                    if(this.regPhoneInput===''){
                        alert( '手机号码未填写');
                        $("#regPhoneInput").focus();
                    }else if(this.regPsdInput===''){
                        alert('密码未填写');
                        $("#regPsdInput").focus();
                    }else if(this.regPsdCfmInput===''){
                        alert('验证码未填写');
                        $("#regPsdCfmInput").focus();
                    }
                }
                else {
                    alert("注册成功");
                    this.showRegister = false;
                    this.closeDialog('showRegister');
                    this.regPsdCfmFlag = false;
                    this.regPsdFlag = false;
                    this.regPhoneFlag = false;
                    this.regPsdCfmInput = '';
                    this.regPsdInput = '';
                    this.regPhoneInput = '';
//                this.https.post('/api/reg').then((res)=>{
//
//                },(err)=>{
//                    console.log(err)
//                })
                }
            }
        },
        mounted(){
            this.$http.get("/api/cfmreg").then((res)=>{
                let datas = res.data.data
                this.cfmcode = datas.code
                console.log(this.cfmcode)
        },(err)=>{
            console.log(err)
        })
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
        padding: 10px 0;
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
    .msg-tips{
        color: #999;
    }
    .error-msg{
        color: #ff3533;
        margin-left: 4px;
    }
</style>