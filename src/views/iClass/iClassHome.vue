<template>
  <div class="home">
    <div class="zai-xian-shi-xi">
      <div class="top">
        <img src="../../assets/iClass/homeSlice/NaOffer.png" alt="">
      </div>
      <div class="online-work">
        <img class="picture-back" src="../../assets/iClass/homeSlice/picture-back.png" alt="">
        <img class="picture-before" src="../../assets/iClass/homeSlice/picture-before.png" alt="">
        <img class="zaixian" src="../../assets/iClass/homeSlice/zaixianshixi.png" alt="">
        <p class="text" @click="handeOnlineWork">在线实习</p>
        <img class="tuoyuan-one" src="../../assets/iClass/homeSlice/tuoyuan.png" alt="">
        <img class="tuoyuan-two" src="../../assets/iClass/homeSlice/tuoyuan.png" alt="">
        <p class="apply">已参加</p>
      </div>
    </div>
    <div class="zu-tuan-xue">
      <div class="online-work">
        <img class="picture-back" src="../../assets/iClass/homeSlice/picture-back-2.png" alt="">
        <img class="picture-before" src="../../assets/iClass/homeSlice/picture-before.png" alt="">
        <img class="zutuanxue" src="../../assets/iClass/homeSlice/zutuanxue.png" alt="">
        <p class="text">组团学</p>
        <img class="tuoyuan-one" src="../../assets/iClass/homeSlice/tuoyuan.png" alt="">
        <img class="tuoyuan-two" src="../../assets/iClass/homeSlice/tuoyuan.png" alt="">
        <p class="apply">未参加</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name:"iClassHome",
  methods:{
    handeOnlineWork (){
      this.$router.push("/iClass/practice")
    }
  }
}
</script>

<style scoped lang="scss">
  .home{
    width:375px;
    background-color: #fff;
    height:800px;
    .zai-xian-shi-xi{
      margin-bottom:20px;
      .top{
      img{
        width:130px;
        height:35px;
        margin-left:132px;
        margin-top:26px;
      }
    }
    .online-work{
      margin-top:20px;
      position:relative;
      margin-left:-5px;
      img{
      width:340px;
      height:130px;
      }
      .picture-back{
        position: absolute;
        top:10px;
        left:20px;
        }
      .picture-before{
        position: absolute;
        top:10px;
        left:20px;
      }
      .zaixian{
        width:75px;
        height:8px;
        position:absolute;
        left:148px;
        top:84px;
      }
      .text{
        width:77px;
        height:20px;
        font-size:19px;
        font-family:PingFang SC;
        color:rgba(255,255,255,1);
        line-height:20px;
        position:absolute;
        left:146px;
        top:61px;
      }
      .tuoyuan-one{
        width:50px;
        height:40px;
        position: absolute;
        right:19px;
        top:100px;
      }
      .tuoyuan-two{
        width:60px;
        height:45px;
        position: absolute;
        right:15px;
        top:95px;
      }
      .apply{
        width:70px;
        height:20px;
        font-size:13px;
        font-family:PingFang SC;
        color:rgba(255,255,255,1);
        line-height:20px;
        position:absolute;
        right:1px;
        top:102px;
        transform:rotateZ(-45deg);
      }
    }

    }
    .zu-tuan-xue{
      margin-top:187px;
    .online-work{
      margin-top:20px;
      position:relative;
      margin-left:-5px;
      img{
      width:340px;
      height:130px;
      }
      .picture-back{
        position: absolute;
        top:10px;
        left:20px;
        }
      .picture-before{
        position: absolute;
        top:10px;
        left:20px;
      }
      .zutuanxue{
        width:46px;
        height:5px;
        position:absolute;
        left:159px;
        top:84px;
      }
      .text{
        width:77px;
        height:20px;
        font-size:19px;
        font-family:PingFang SC;
        color:rgba(255,255,255,1);
        line-height:20px;
        position:absolute;
        left:156px;
        top:61px;
      }
      .tuoyuan-one{
        width:50px;
        height:40px;
        position: absolute;
        right:19px;
        top:100px;
      }
      .tuoyuan-two{
        width:60px;
        height:45px;
        position: absolute;
        right:15px;
        top:95px;
      }
      .apply{
        width:70px;
        height:20px;
        font-size:13px;
        font-family:PingFang SC;
        color:rgba(255,255,255,1);
        line-height:20px;
        position:absolute;
        right:1px;
        top:102px;
        transform:rotateZ(-45deg);
      }
    }

    }
    }


</style>