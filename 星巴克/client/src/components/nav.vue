<template>
    <nav>
        <div v-for="(item,index) in statusButtons" :class="{active:index===status}" :key="index" @click="()=>{
                if(index!=status){
                    changeStatus(index)
                }
            }">
            <i :class="`iconfont ${item.i}`"></i>
            <p>{{item.title}}</p>
        </div>
    </nav>
</template>
<script>
export default {
    props:{
        status:Number,
        changeStatus:Function
    },
    data(){
        return {
            statusButtons:[
                {
                    i:"icon-05",
                    title:"待处理"
                },{
                    i:"icon-07",
                    title:"已发起"
                },{
                    i:"icon-xuanzhong-01",
                    title:"已处理"
                }
            ],
        }
    }
}
</script>
<style scoped lang="scss">
    @import "../../static/css/_minin.scss";
    nav{
        @include H(rem(90px));
        @include display_flex(space-around,center);
        box-shadow: 1px 5px 10px #ccc;
        div{
            height: 100%;
            @include display_flex(center,center);
            flex-direction: column;
            color: #dddddd;
            &.active{
                color: #0d6042;
            }
        }
    }
</style>