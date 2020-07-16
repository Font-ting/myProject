<template>
  <div class="official-document-detail">
    <HeadTop head-title="官方文档" go-back="true" ></HeadTop>
    <div class="title">
      产品 / 脑图
    </div>
    <div class="content">
      <div class="period">第一期</div>
      <div class="product-list">产品列表模块</div>
      <img src="../../assets/iClass/practiceSlice/iclassPracticeslices/video.png" alt="">
      <div class="watch">前往观看</div>
      <div class="text">
        第一期脑图文档第一期脑图文档
        第一期脑图文档第一期脑图文档
        第一期脑图文档第一期脑图文档
        第一期脑图文档第一期脑图文档
        第一期脑图文档第一期脑图文档
        第一期脑图文档第一期脑图文档
        第一期脑图文档</div>
    </div>
  </div>

</template>

<script>
import HeadTop from "@/components/header/Head"
export default {
  name:"officialDocumentDetail",
  components:{
    HeadTop,
  },

}
</script>

<style scoped lang="scss">
  .official-document-detail{
    width:375px;
    background-color: #F7F7F7;
  }
  .title{
    width:70px;
    height:13px;
    font-size:13px;
    font-family:PingFang SC;
    color:rgba(31,130,255,1);
    line-height:13px;
    margin-top:20px;
    margin-left:12px;
    margin-bottom:20px;
  }
  .content{
    width:351px;
    height:516px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 8px 1px rgba(113,114,115,0.15);
    border-radius:10px;
    margin-left:12px;
    margin-right:10px;
    position:relative;
    .period{
        width:53px;
        height:22px;
        line-height:22px;
        font-family:PingFang SC;
        background-color: #FFE8AC;
        border-radius:5px;
        text-align:center;
        position:absolute;
        top:15px;
        left:15px;
    }
    .product-list{
      width:90px;
      height:12.5px;
      font-size:13px;
      font-family:PingFang SC;
      font-weight:500;
      // 调整字间距
      letter-spacing:2px;
      color:rgba(78,78,78,1);
      line-height:12.5px;
      position:absolute;
      top:20px;
      left:80px;
    }
    img{
      width:39px;
      height:31px;
      position:absolute;
      top:60px;
      left:21px;
    }
    .watch{
      width:55px;
      height:12px;
      position:absolute;
      top:69px;
      left:80px;
      color:#1F82FF;
    }
    .text{
      width:322px;
      height:56px;
      font-size:12px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(78,78,78,1);
      position:absolute;
      top:114px;
      left:16px;

    }

  }

</style>