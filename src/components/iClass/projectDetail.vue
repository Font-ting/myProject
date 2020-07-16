<template>
  <div class="project-detail">
    <div class="detail">
      <img src="../../assets/iClass/practiceSlice/tuitui.png" alt="">
      <p class="title">[ 推电影 ]小说一更新就知道 6月</p>
      <div class="cycle">1/8期</div>
      <div class="product">产品</div>
      <div class="change-project">切换项目</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"projectDetail",
  components:{

  }

}
</script>

<style scoped lang="scss">
.project-detail{
  width:375px;
  height:100px;
  background-color: #fff;
  border-top:1px solid lightgray;
  .detail{
    margin-left:14px;
    margin-right:34px;
    margin-top:19px;
    img{
      width:85px;
      height:60px;
    }
    .title{
      width:203px;
      height:14px;
      font-size:14px;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(63,63,63,1);
      line-height:14px;
      margin-left:103px;
      margin-top:-60px;
    }
    .cycle{
      width:53px;
      height:22px;
      line-height:22px; 
      background-color: #E1EFB7;
      margin-left:103px;
      margin-top:19px;
      border-radius:5px;
      text-align:center;
    }
    .product{
      width:53px;
      height:22px;
      line-height:22px;
      background-color: #FFE8AC;
      margin-left:180px;
      margin-top:-23px;
      border-radius:5px;
      text-align:center;
    }
    .change-project{
      width:49px;
      height:12px;
      font-size:12px;
      font-family:PingFang SC;
      color:rgba(255,189,46,1);
      line-height:12px;
      margin-left:273px;
      margin-top:-18px;

    }
  }


}

</style>