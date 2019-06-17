<template>
    <header :style="myStyle">
        <div class="left">
            <slot name='left'/>
        </div>
        <span>{{title}}</span>
        <div class="right">
            <slot name='right'/>
        </div>
    </header>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:"加班/休假"
        },
        myStyle:Object
    }
}
</script>
<style scoped lang="scss">
    @import "../../static/css/_minin.scss";
    header{
        @include W;
        @include H(rem(44px));
        @include display_flex(space-between,center);
        padding: 0 rem(10px);
    }
</style>