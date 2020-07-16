<template>
    <div>
        <HeadTop head-title="在线实习" go-back="true"></HeadTop>
        <div class="row">
            <router-link to='/'>返回首页</router-link>
        </div>
        <div class="row">
            <router-link to='/u/login'>登录</router-link>
        </div>
        <div class="row">
            <router-link to='/u/bindMobile'>绑定手机</router-link>
        </div>
        <div class="row">
            <router-link to='/yue/publish'>约起来</router-link>
        </div>
        <div class="row">
            <router-link to='/movie/list'>推荐电影</router-link>
        </div>
        <div class="row">
            <router-link to='/iClass/iClassLogin'>iClass</router-link>
        </div>
    </div>
</template>
<script>
    import HeadTop from '@/components/header/Head'

    export default {
        name: "index",
        components: {
            HeadTop
        }
    }
</script>
<style scoped>
 .row{
     margin:50px;
     text-align: center;
 }
</style>