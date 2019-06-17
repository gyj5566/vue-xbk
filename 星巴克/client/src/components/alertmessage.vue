<template>
    <p class="alert" v-show="text!=''">{{text}}</p>
</template>
<script>
export default {
    data(){
        return {
            time:null,
            text:""
        }
    },
    methods:{
        show(text){
            this.text=text
        },
        close(){
            this.text=""
            clearTimeout(this.time)
            this.time=null
        }
    },
    watch:{
        text(val, oldVal){
            if(val!=""){
                this.time=setTimeout(()=>{
                    this.text=""
                }, 2000);
            }
        }
    },
    beforeDestroy(){
        clearTimeout(this.time)
        this.time=null
    },
}
</script>
<style scoped lang="">
    .alert{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        background: rgba(0,0,0,.8);
        color: #fff;
        line-height: 30px;
        padding: 0 10px;
    }
</style>