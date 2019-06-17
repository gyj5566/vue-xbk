<template>
    <div class="wrap">
        <Header>
            <template v-slot:left>
                <i class="iconfont icon-arrow-left" @click="goBack"></i>
            </template>
            <template v-slot:right>
                <i class="iconfont icon-tian"></i>
                <router-link :to="{name:'search'}"><i class="iconfont icon-fangdajing"></i></router-link>
            </template>
        </Header>
        <div class="main">
            <Nav :status="status" :changeStatus="changeStatus"/>
            <type-box :type="type" :changeType="changeType"/>
            <div class="content">
                <item v-for="(item,index) in list.list" :key="index" :item="item"/>
            </div>
        </div>
        <button @click="showDialog">
            <i class="iconfont icon-jia"></i>
            发起任务
        </button>
        <Dialog v-show="ifShowDialog" :showDialog="showDialog"/>
    </div>
</template>
<script>
import api from "../api/"
import Nav from "@/components/nav.vue"
import TypeBox from "@/components/typeBox.vue"
import Dialog from "@/components/dialog.vue"
import {mapActions,mapState} from "vuex"
export default {
    name:"Index",
    components:{
        Nav,
        TypeBox,
        Dialog
    },
    data(){
        return {
            status:0,
            type:"overtime",
            ifShowDialog:false
        }
    },
    computed:{
        ...mapState(['list']),
        listData(){
            let {status,type}=this
            return {
                type,
                status
            }
        }
    },
    methods:{
        ...mapActions(["getData"]),
        goBack(){
            this.$router.go(-1)
        },
        changeStatus(status){
            this.status=status
            this.type="overtime"
        },
        changeType(type){
            this.type=type
        },
        showDialog(){
            this.ifShowDialog=!this.ifShowDialog
        }
    },
    created(){
        let { status, type } = this
        api.info().then(res=>{
            // console.log(res)
        })
        this.getData({status,type})
    },
    watch:{
        listData(){
            let { status, type } = this
            this.getData({status,type})
        }
    }
}
</script>
<style scoped lang="scss">
    @import "../../static/css/_minin.scss";
    .wrap{
        @include H;
        @include display_flex;
        flex-direction: column;    
        position: relative;
        .main{
            @include W;
            flex: 1;
            overflow: auto;
            .content{
                background: #f7f7f7;
            }
        }
        >button{
            position: absolute;
            right: rem(23px);
            bottom: rem(25px);
            width: rem(140px);
            height: rem(50px);
            background: #006442;
            color: #fff;
            font-size: 16px;
            border: 0;
            border-radius: rem(25px);
            outline: none;
        }
    }
</style>