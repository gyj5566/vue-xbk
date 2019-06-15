<template>
    <div class="wrap">
        <Header :title="header_title" :myStyle="{color:'#fff',background:'#006341'}">
            <template v-slot:left>
                <i class="iconfont icon-arrow-left" @click="()=>{$router.go(-1)}"></i>
            </template>
        </Header>
        <div class="main">
            <User :data="user">
                <template v-slot:center>
                    <p><span>申请人姓名</span>{{user.nickname}}</p>
                    <p><span>直接主管</span>高勇钧</p>
                </template>
                <template v-slot:container>
                    <Piece :data="data" :isList="true" :changeupNeed="changeupNeed"/>
                    <Piece :isList="false">
                        <h1>加班事由<b>*</b></h1>
                        <textarea v-model="upNeed.describe"></textarea>
                        <div class="padd"></div>
                    </Piece>
                    <Piece :isList="false">
                        <h1 class="file">
                            <i class="iconfont icon-tianjia"></i>上传附件
                            <input type="file" @change="chooseFile"/>
                        </h1>
                        <div class="images" v-if="upNeed.annex.length">
                            <div>
                                <img v-if="upNeed.annex[0]" :src="`http://localhost:3000${upNeed.annex[0]}`"/>
                            </div>
                            <div>
                                <img v-if="upNeed.annex[1]" :src="`http://localhost:3000${upNeed.annex[1]}`"/>
                            </div>
                            <div>
                                <img v-if="upNeed.annex[2]" :src="`http://localhost:3000${upNeed.annex[2]}`"/>
                            </div>
                        </div>
                    </Piece>
                </template>
            </User>
        </div>
        <Footer>
            <a @click="()=>{$router.go(-1)}">取消</a>
            <button @click="putIn">提交</button>
        </Footer>
    </div>
</template>
<script>
import api from "../api/"
import Upload from "../utils/upload"
export default {
    data(){
        return {
            header_title:"",
            user:{},
            data:{
                annex:[],
                startTime:"",
                endTime:"",
                list_type:""
            },
            upNeed:{
                annex:[],
                describe:"",
                endTime:"",
                startTime:"",
                type:0
            }
        }
    },
    methods:{
        changeupNeed(obj){
            this.upNeed=Object.assign({},this.upNeed,{
                startTime:obj.startDate+" "+obj.startTime,
                endTime:obj.startDate+" "+obj.endTime
            })
        },
        chooseFile(e){
            new Upload({
                fileBtn:e.target,
                annex:this.upNeed.annex
            })
        },
        putIn(){
            let {type}=this.$route.params
            console.log(this.upNeed)
            api.getDetail(type,this.upNeed).then(res=>{
                console.log(res)
            })
        }
    },
    created(){
        let {type}=this.$route.params
        this.data.list_type=type
        this.header_title=type==="overtime"?"办公室加班申请表":"办公室休假申请表"
        api.info().then(res=>{
            this.user=res.data
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