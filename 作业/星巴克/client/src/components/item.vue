<template>
    <router-link :to="{name:'detail',params:{applicationNumber:item.applicationNumber,list_type:item.list_type}}">
        <div>
            <p>
                <span>{{item.applicationNumber}}</span>
            </p>
            <div>
                <p>
                    <span>申请人</span>
                    {{item.nickname}}
                </p>
                <p>
                    <span>加班类型</span>
                    {{type}}
                </p>
                <p>
                    <span>加班日期</span>
                    {{new Date(item.startTime).toLocaleDateString().replace(/\//g,"-")}}
                </p>
                <p>
                    <span>加班时数</span>
                    {{duration}}
                </p>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    props:{
        item:Object
    },
    computed:{
        duration(){
            let duration=new Date(this.item.endTime)-new Date(this.item.startTime)
            return duration/(1000*60*60*24).toFixed(2)
        },
        type(){
            let list_type=this.item.list_type==="overtime"?"加班":"休假"
            let day=new Date(this.item.startTime).getDay()
            return day>5||day===0?`双休日${list_type}`:`工作日${list_type}`
        }
    }
}
</script>
<style scoped lang="scss">
    @import "../../static/css/_minin.scss";
    a{
        display: block;
        margin-bottom: rem(15px);
        color: #333;
    }
    a>div{
        @include H(rem(120px));
        background: #fff;
        padding: 0 rem(10px);
        >p{
            @include H(rem(40px));
            @include display_flex(space-between,center);
        }
        >div{
            @include display_flex;
            flex-wrap: wrap;
            line-height: rem(30px);
            p{
                width: 50%;
                span{
                    display: inline-block;
                    width: rem(70px);
                }
            }
        }
    }
</style>