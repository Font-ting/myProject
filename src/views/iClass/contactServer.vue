<template>
  <div id="contact-server">
    <HeadTop head-title="联系客服" go-back="true"></HeadTop>
    <div class="server-content">
      <p class="server">联系客服微信</p>
      <img src="../../assets/iClass/loginSlice/erWeiMa.png" alt="">
    </div>
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head";
export default {
  name:"contactServer",
  data (){
    return{
      phone:null,
    }
  },
  components: {
    HeadTop
  },
  methods:{
  }
}
</script>

<style scoped lang="scss">
#contact-server{
  width:375px;
  height:800px;
  background-color: #fff;
  .server-content{
    width:305px;
    margin-top:107px;
    margin-left:34px;
    margin-right:34px;
    .server{
      width:345px;
      height:40px;
      font-size:23px;
      font-family:PingFang SC;
      color:rgba(57,57,57,1);
      line-height:40px;
      margin-bottom:40px;
      margin-left:90px;
      img{
        width:101px;
        height:180px;
      }
    }

  }
}
</style>