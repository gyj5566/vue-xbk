<template>
    <div class="dialogBox" @click="showDialog">
        <div class="dialog" @click.stop="()=>{}">
            <span></span>
            <router-link :to="{name:'application',params:{type:'overtime'}}">
                <img src="../../static/images/overtime.jpg"/>
                <p>加班</p>
            </router-link>
            <span></span>
            <router-link :to="{name:'application',params:{type:'vacation'}}">
                <img src="../../static/images/vacation.jpg"/>
                <p>休假</p>
            </router-link>
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        showDialog:Function
    }
}
</script>
<style scoped lang="scss">
    @import "../../static/css/_minin.scss";
    .dialogBox{
        @include W;
        @include H;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0,0,0,.5);
        .dialog{
            @include W;
            position: absolute;
            left: 0;
            bottom: 0;
            background: #fff;
            @include display_flex(flex-start,center);
            height: 20vh;
            text-align: center;
            span{
                flex: 1;
            }
            img{
                width: rem(30px);
            }
        }
    }
</style>