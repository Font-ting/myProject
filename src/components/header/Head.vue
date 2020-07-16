<template>
    <header>
        <div class="nav-left" v-if="goBack" @click="goBackDo">
            <i class="iconfont icon-left-arrow"></i>
        </div>
        <div class="header-tit ellipsis" s v-if="headTitle">{{headTitle}}</div>
    </header>
</template>

<script>
    export default {
        name: "head-top",
        data(){
            return{

            }
        },
        props:['headTitle', 'goBack'],
        methods: {
            goBackDo() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../style/mixin";
    header {
        width: 375px;
        position: relative;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background: #ffffff;
        // margin:0px 0px px 0px;
        // border-bottom:2px solid gray;
        .nav-left{
            position: absolute;
            bottom: 0;
            font-size: 17px;
            cursor: pointer;
            left:21px;
        }
        .header-tit{
            width:68px;
            margin:0 auto;
            color: #323233;
            font-weight: 400;
            font-size: 17px;
        }
    }
</style>