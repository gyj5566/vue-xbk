<template>
    <div class="user">
        <div class="left" v-if="data">
            <div class="head">
                <img :src="data.avatar"/>
            </div>
            <div class="center">
                <slot name="center"/>
            </div>
            <i class="iconfont icon-chevron-thin-right"></i>
        </div>
        <div class="radian"><div></div></div>
        <div class="container">
            <slot name="container"/>
        </div>
        <div class="back"></div>
    </div>
</template>
<script>
export default {
    props:{
        data:Object
    }
}
</script>
<style scoped lang="scss">
    @import "../../static/css/_minin.scss";
    .user{
        @include W;
        @include display_flex(flex-start,center);
        background: #006341;
        color: #fff;
        padding: rem(25px) rem(18px);
        position: relative;
        .left{
            width: 100%;
            @include display_flex;
            position: relative;
            .head{
                width: rem(46px);
                height: rem(46px);
                border-radius: 50%;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            .center{
                margin-left: rem(20px);
                p{
                    line-height: rem(22px);
                    span{
                        display: inline-block;
                        width:25vw;
                    }
                }
            }
            i{
                position: absolute;
                right: 0;
                top: rem(23px);
                transform: translateY(-50%);
            }
        }
        .radian{
            width: 100%;
            height: rem(200px);
            position: absolute;
            left:0;
            bottom: -37px;
            z-index: -1;
            overflow: hidden;
            >div{
                width: 120%;
                height: rem(200px);
                background: #006341;
                position: absolute;
                left: 50%;
                bottom:4px;
                transform: translateX(-50%);
                border-radius: 100px;
            }
        }
        .container{
            width: 90vw;
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translateX(-50%);
        }
        .back{
            position: fixed;
            left: 0;
            top: 0;
            background: #f7f7f7;
            @include W;
            @include H;
            z-index: -2;
        }
    }
</style>