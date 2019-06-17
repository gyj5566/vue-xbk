<template>
    <div class="typeBox">
        <p>
            <span v-for="(item,index) in typeButtons" :key="index" :class="{active:item.type===type}" @click="()=>{changeType(item.type)}">
                {{item.title}}
            </span>
        </p>
        <div>
            <router-link :to="{name:'batch'}">
                <i class="iconfont icon-gongzuo"></i>
            </router-link>
            <router-link :to="{name:'sort'}">
                <i class="iconfont icon-zhuanhuan"></i>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        type:String,
        changeType:Function
    },
    data(){
        return {
            typeButtons:[
                {
                    type:"overtime",
                    title:"加班"
                },{
                    type:"vacation",
                    title:"休假"
                }
            ]
        }
    }
}
</script>
<style scoped lang="scss">
    @import "../../static/css/_minin.scss";
    .typeBox{
        margin-top: rem(20px);
        @include H(rem(40px));
        @include display_flex(center,center);
        position: relative;
        p{
            height: rem(30px);
            @include setLine(#0c6142);
            border-radius: rem(30px);
            overflow: hidden;
            span{
                height: 100%;
                display: inline-block;
                padding: 0 rem(30px);
                line-height: rem(30px);
                &.active{
                    background: #0c6142;
                    color:#fff;
                }
            }
        }
        div{
            position: absolute;
            right: rem(30px);
            a{
                margin-left: rem(10px);
            }
        }
    }
</style>