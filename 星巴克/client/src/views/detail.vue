<template>
    <div class="wrap">
        <Header :title="header_title" :myStyle="{color:'#fff',background:'#006341'}">
            <template v-slot:left>
                <i class="iconfont icon-arrow-left" @click="()=>{$router.go(-1)}"></i>
            </template>
        </Header>
        <div class="main">
            <User :data="data">
                <template v-slot:center>
                    <p><span>申请人姓名</span>{{data.nickname}}</p>
                    <p><span>直接主管</span>高勇钧</p>
                </template>
                <template v-slot:container>
                    <Piece :data="{...data,haveData:true}" :isList="true"/>
                    <Piece :isList="false">
                        <h1>加班事由<b>*</b></h1>
                        <p class="txt">{{data.describes}}</p>
                        <div class="padd"></div>
                    </Piece>
                    <Piece :isList="false">
                        <h1 class="fujian">
                            <span>
                                <img src="../../static/images/附件_03.jpg"/>附件
                            </span>
                            <span>
                                <i>共{{data.annex.length}}个</i>
                                <i class="iconfont icon-chevron-thin-right"></i>
                            </span>
                        </h1>
                        <div class="images">
                            <div>
                                <img v-if="data.annex[0]" :src="`http://localhost:3000${data.annex[0]}`"/>
                            </div>
                            <div>
                                <img v-if="data.annex[1]" :src="`http://localhost:3000${data.annex[1]}`"/>
                            </div>
                            <div>
                                <img v-if="data.annex[2]" :src="`http://localhost:3000${data.annex[2]}`"/>
                            </div>
                        </div>
                    </Piece>
                </template>
            </User>
        </div>
        <Footer>
            <router-link :to="{name:'history'}">
                <i class="iconfont icon-faxiandingdan"></i>
                <p>审批历史</p>
            </router-link>
            <button :style="{background:'#404a53'}">退回</button>
            <button>同意</button>
        </Footer>
    </div>
</template>
<script>
import api from "../api/"
export default {
    data(){
        return {
            header_title:"",
            data:{
                annex:[],
                startTime:"",
                endTime:""
            }
        }
    },
    created(){
        let {list_type,applicationNumber}=this.$route.params
        this.header_title=list_type==="overtime"?"办公室加班申请表":"办公室休假申请表"
        api.getDetail(list_type,{applicationNumber}).then(res=>{
            this.data=res.data
        })
    }
}
</script>
<style scoped lang="scss">
    @import "../../static/css/_minin.scss";
    .wrap{
        @include H;
        @include display_flex;
        flex-direction: column;
        .main{
            @include W;
            flex: 1;
            overflow: auto;
            @include display_flex;
            flex-direction: column;
        }
    }
</style>