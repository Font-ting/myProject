<template>
  <div class="page-comment" id="movie-comment">
    <div class="review">
      <div class="user-message">
        <img class="user-picture" src="../../assets/movie/comment/xiaoren.png" alt="">
        <div class="name">糯米</div>
        <div class="louzhu">
          @楼主或其他人
        </div>
        <div class="time">2020-06-01</div>
      </div>
      <div class="movie-review">
        当看到成人世界里的围捕厮杀、残酷狠烈后，他们不仅能模仿得像模像样，
        更能利用成人的势力为己所用。他们的底气就是，哪怕最后被发现，也不怕警察、
        不会入狱，何况最终的布局者朱朝阳拥有着极高的智力水平。
      </div>
      <div class="review-message">
        <ul>
          <li class="zan">赞 <span>1234</span> </li>
          <li>|</li>
          <li class="reply">回复 <span>99</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Movie-Review-Louzhu",
  data() {
    return {
     
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
  .page-comment{
    width:375px;
    background-color: #ffffff;
    .review{
      width:328px;
      height:200px;
      margin-left:10px;
      .user-message{
        margin-top:10px;
        height:40px;
        padding-top:15px;
        .user-picture{
          width:40px;
          height:40px;
        }
        .name{
          width:30px;
          height:20px;
          font-size:15px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(56,56,56,1);
          line-height:22px;
          margin:-40px 26px 0px 47px;
        }
        .louzhu{
          width:140px;
          height:15px;
          font-size:15px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(56,56,56,1);
          line-height:23px;
          margin-left: 109px;
          margin-top:-21px;
        }
        .time{
          margin-top:-12px;
          margin-left:273px;
          font-size:12px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(196,196,196,1);
        }


      }
      .movie-review{
        margin-top:10px;
        margin-left:10px;
        margin-bottom:20px;
      }
      .review-message{
        margin-top:10px;
        margin-left:60px;
        ul{
          li{
            margin-right:57px;
            float:left;
          }
        }
      }
      
    }

  }
</style>