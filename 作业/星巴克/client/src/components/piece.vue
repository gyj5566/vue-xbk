<template>
    <div class="piece">
        <div v-if="isList">
            <div v-if="data.haveData">
                <h1>申请人信息</h1>
                <p class="detail"><span>{{list_type}}日期<b>*</b></span><span>{{data.startTime.slice(0,10)}}<i class="iconfont icon-chevron-thin-right"></i></span></p>
                <p class="detail"><span>{{list_type}}类型</span><span>{{type}}<i class="iconfont icon-chevron-thin-right"></i></span></p>
                <p class="detail"><span>{{list_type}}起始时间<b>*</b></span><span>{{getTime(data.startTime)}}<i class="iconfont icon-chevron-thin-right"></i></span></p>
                <p class="detail"><span>{{list_type}}截止时间<b>*</b></span><span>{{data.startTime.slice(0,10)}}  {{getTime(data.endTime)}}<i class="iconfont icon-chevron-thin-right"></i></span></p>
                <p class="detail"><span>{{list_type}}时数</span><span>{{duration}}<i class="iconfont icon-chevron-thin-right"></i></span></p>
                <div class="padd"></div>
            </div>
            <div v-else>
                <h1>申请人信息</h1>
                <p class="detail">
                    <span>{{list_type}}日期<b>*</b></span>
                    <span>
                        <el-date-picker
                            v-model="upNeed.startDate"
                            type="date"
                            value-format="yyyy-MM-dd"
                            size="mini"
                            placeholder="请选择">
                        </el-date-picker>
                    </span>
                </p>
                <p class="detail">
                    <span>{{list_type}}类型</span>
                    <span>{{setingType}}</span>
                </p>
                <p class="detail">
                    <span>{{list_type}}起始时间<b>*</b></span>
                    <span>
                        <el-time-select
                            placeholder="起始时间"
                            v-model="upNeed.startTime"
                            size="mini"
                            :picker-options="{
                                start: '00:00',
                                end: '23:59',
                                step: '00:15',
                            }">
                        </el-time-select>
                    </span>
                </p>
                <p class="detail">
                    <span>{{list_type}}截止时间<b>*</b></span>
                    <span>
                        <el-time-select
                            placeholder="结束时间"
                            v-model="upNeed.endTime"
                            size="mini"
                            :picker-options="{
                                start: '00:00',
                                end: '23:59',
                                step: '00:15',
                                minTime: upNeed.startTime
                            }">
                        </el-time-select>
                    </span>
                </p>
                <p class="detail">
                    <span>{{list_type}}时数</span>
                    <span>{{setingDuration}}</span>
                </p>
                <div class="padd"></div>
            </div>
        </div>
        <div v-else>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data:Object,
        isList:Boolean,
        changeupNeed:Function
    },
    data(){
        return {
            upNeed:{
                startDate:"",
                startTime:"",
                endTime:""
            }
        }
    },
    computed:{
        list_type(){
            return this.data.list_type==="overtime"?"加班":"休假"
        },
        duration(){
            let duration=new Date(this.data.endTime)-new Date(this.data.startTime)
            return duration/(1000*60*60*24).toFixed(2)
        },
        type(){
            let day=new Date(this.data.startTime).getDay()
            return day>5||day===0?`双休日${this.list_type}`:`工作日${this.list_type}`
        },
        setingType(){
            let day=new Date(this.upNeed.startDate).getDay()
            return day>5||day===0?`双休日${this.list_type}`:`工作日${this.list_type}`
        },
        setingDuration(){
            let duration=new Date(this.upNeed.startDate+" "+this.upNeed.endTime)-new Date(this.upNeed.startDate+" "+this.upNeed.startTime)
            return duration/(1000*60*60).toFixed(1)
        },
        obj(){
            return {...this.upNeed}
        }
    },
    methods:{
        getTime(str){
            return str.slice(11,16)
        },
        click(){
            console.log(this.upNeed)
        }
    },
    watch:{
        obj(){
            this.changeupNeed(this.upNeed)
        }
    }
}
</script>
<style scoped lang="scss">
    @import "../../static/css/_minin.scss";
    .piece{
        background: #fff;
        color: #000;
        border-radius: 10px;
        margin-bottom: rem(14px);
        b{
            color: red;
        }
        .padd{
            padding-bottom: rem(25px);
        }
        h1{
            line-height: rem(46px);
            @include setBottomLine;
            padding: 0 rem(20px);
            font-size: 14px;
            span:first-child{
                @include display_flex(flex-start,center);
            }
            span:last-child{
                float: right;
                color: #cacacc;
                i{
                    font-size: 12px;
                }
            }
            &.fujian{
                @include display_flex(space-between,center);
            }
            &.file{
                border: 0;
                position: relative;
                i{
                    color: orange;
                }
                input{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                }
            }
        }
        p{
            padding: 0 rem(20px);
            &.txt{
                height: rem(88px);
                padding-top: rem(10px);
                line-height: rem(25px);
                overflow: hidden;
            }
        }
        .detail{
            line-height: rem(25px);
            margin-top: rem(10px);
            @include display_flex;
            span:first-child{
                flex: 1;
                color: #a5a5a5;
            }
            span:last-child{
                flex: 2;
                @include setBottomLine;
                text-align: right;
                i{
                    font-size: 12px;
                    color: #c4c4c9;
                    margin-left: rem(10px);
                }
            }
        }
        .images{
            height: rem(97px);
            padding: rem(15px);
            @include display_flex;
            div{
                flex: 1;
                height: 100%;
                overflow: hidden;
                position: relative;
                img{
                    width: 100%;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translateX(-50%) translateY(-50%);
                }
            }
        }
        textarea{
            width: 100%;
            height: rem(88px);
            padding: 0 rem(10px);
            line-height: rem(25px);
        }
    }
</style>