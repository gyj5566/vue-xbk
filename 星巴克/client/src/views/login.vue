<template>
    <div class="wrap">
        <h1>欢迎来到星享俱乐部</h1>
        <div>
            <p>
                <input type="tel" placeholder="手机号码" v-model="phone"/>
            </p>
            <p v-if="!ifLogin">
                <input type="password" placeholder="验证码" v-model="authCode"/>
                <button>获取验证码</button>
            </p>
            <p v-else>
                <input type="password" placeholder="密码" v-model="password"/>
            </p>
            <button :class="canClick?'loginBtn active':'loginBtn'" @click="clickLogin">登录/注册</button>
            <button class="tab" @click="clickTab">使用账号密码登录</button>
            <div class="foot">
                <p>使用以下方式进行账户注册/登录</p>
                <div>
                    <a href="javascript:;"><img src="../../static/images/taobao.jpg"/></a>
                    <a href="javascript:;"><img src="../../static/images/zhifubao.jpg"/></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from "../api/"

export default {
    data(){
        return {
            ifLogin:false,
            phone:"",
            password:"",
            authCode:""
        }
    },
    computed:{
        canClick(){
            if(this.ifLogin){
                return /^[a-z0-9_-]{6,18}$/.test(this.password)&&/^1[3456789]\d{9}$/.test(this.phone)
            }else{
                return /^[a-z0-9_-]{6,18}$/.test(this.authCode)&&/^1[3456789]\d{9}$/.test(this.phone)
            }
        }
    },
    methods:{
        clickTab(){
            this.ifLogin=!this.ifLogin
            if(this.ifLogin){
                this.authCode=""
            }else{
                this.password=""
            }
        },
        clickLogin(){
            if(this.canClick){
                let {phone,password,authCode}=this
                if(this.ifLogin){
                    api.login(phone,password).then(res=>{
                        this.$alerta(res.message)
                        window.localStorage.setItem("token",res.token)
                        this.$router.push("/")
                    })
                }else{
                    api.register(phone,authCode).then(res=>{
                        this.$alerta(res.message)
                    })
                }
            }
        }
    }
}
</script>
<style scoped lang="scss">
    @import "../../static/css/_minin.scss";
    .wrap{
        background: #f8f8f6;
        @include H;
        @include display_flex;
        flex-direction: column;
        h1{
            @include W;
            font-size: 25px;
            font-weight: 600;
            line-height: rem(62px);
            padding-left: rem(15px);
            box-shadow: 1px 5px 10px #ccc;
            background: #fff;
        }
        button{
            background: 0;
            border: 0;
            outline: none;
        }
        >div{
            @include W;
            flex: 1;
            position: relative;
            >p{
                @include H(rem(30px));
                margin: rem(25px) rem(15px) 0;
                @include display_flex(flex-start,center);
                @include setBottomLine;
                input{
                    flex: 1;
                }
            }
            .loginBtn{
                display: block;
                @include W(85vw);
                height: rem(38px);
                background: #d4d4d4;
                color: #fff;
                margin: rem(70px) auto 0;
                border-radius: rem(19px);
                &.active{
                    background: #20af73;
                }
            }
            .tab{
                display: block;
                color: #20af73;
                margin: rem(40px) auto 0;
            }
            .foot{
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
                @include H(rem(100px));
                @include display_flex;
                flex-direction: column;
                >div{
                    flex: 1;
                    width: 100%;
                    @include display_flex(space-around,center)
                }
            }
        }
    }
</style>