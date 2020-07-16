<template>
  <div id="home-login">
    <HeadTop head-title go-back="true"></HeadTop>
    <div class="center">
     <img class="xiaoNa" src="../../assets/iClass/loginSlice/xiaoNa.png" alt="">
     <img class="iClass" src="../../assets/iClass/loginSlice/iClass.png" alt="">
     <img class="NaOffer" src="../../assets/iClass/loginSlice/NaOffer.png" alt="">
    </div>
    <div class="login">
      <router-link class="wechat-login" to="/iClass/iClassLogin/bindPhone">微信授权登录</router-link>
      <div class="user-guide">用户手册</div>
    </div>
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head";
export default {
  name: "iClassHome",
  components: {
    HeadTop
  }
};
</script>

<style scoped lang="scss">
  #home-login{
    width:375px;
    height:800px;
    background-color: #fff;
  }
  .center{
   
    position:relative;
    .xiaoNa{
      width:54px;
      height:38px;
      position:absolute;
      top:140px;
      left:82px;
    }
    .iClass{
      width:91px;
      height:22px;
      position:absolute;
      top:150px;
      left:135px;
    }
    .NaOffer{
      width:140px;
      height:12px;
      position:absolute;
      top:198px;
      left:86px;
    }
  }
  .login{
    width:375px;
    height:160px;
    margin-top:325px;
    margin-left:40px;
    .wechat-login{
      display: inline-block;
      width:280px;
      height:50px;
      background-color: rgb(6, 161, 6);
      border: 1px dashed blcak;
      color:white;
      font-size:18px;
      text-align:center;
      line-height: 50px;
      margin-bottom:20px;
    }
    .user-guide{
      font-size:16px;
      color:gray;
      margin-left:104px;
    }
  }
</style>