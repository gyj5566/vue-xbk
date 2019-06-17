<template>
    <footer>
        <slot />
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    @import "../../static/css/_minin.scss";
    footer{
        height: rem(42px);
        @include W;
        background: #026341;
        @include display_flex;
        box-shadow: 2px -2px 2px #ccc;
        a{
            height: 100%;
            width: rem(100px);
            @include display_flex(space-around,center);
            flex-direction: column;
            background: #fff;
        }
        button{
            flex: 1;
            border: 0;
            height: 100%;
            color: #fff;
            background: 0;
        }
    }
</style>