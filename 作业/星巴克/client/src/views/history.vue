<template>
    <div class="wrap">
        <Header title="审批历史" :myStyle="{color:'#fff',background:'#006341'}">
            <template v-slot:left>
                <i class="iconfont icon-arrow-left" @click="()=>{$router.go(-1)}"></i>
            </template>
        </Header>
        <div class="main">
            <User>
                <template v-slot:container>
                    <Piece :isList="false">
                        <p>
                            <span>申请人</span>
                        </p>
                        <p>
                            <span>部门</span>
                        </p>
                        <p>
                            <span>员工职务</span>
                        </p>
                        <p>
                            <span>员工编号</span>
                        </p>
                    </Piece>
                </template>
            </User>
            aa
        </div>

    </div>
</template>
<script>
import api from "../api/"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        let {applicationNumber}=this.$route.params
        api.getHistory(applicationNumber).then(res=>{
            console.log(res)
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../../static/css/_minin.scss";

</style>