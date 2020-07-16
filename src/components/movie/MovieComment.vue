<template>
<div class="page-comment" id="movie-comment">
  <div class="comment-page" >
    <div class="comment">
      <div class="title">影评</div>
      <p>(1234条评论)</p>
      <router-link class="jiantou-picture" to="/movie/list/detail/evaluate">
        <img src="../../assets/movie/slices/youjiantou.png" alt="">
      </router-link>
    </div>
  </div>

  <div class="comment-people">
    <div class="top">
      <div class="left">
        <img src="../../assets/movie/slices/ren.png" alt="">
      </div>
      <div class="right">
          <div class="name">水**手</div>
          <div class="sort">
            <star-review v-model="score"></star-review> 
          </div>
          <div class="ninth">9.0</div>
      </div>
    </div>
    <p class="center">
      推理的魅力从不在于推理本身,而是借推理撕开现代社会的层层包裹,窥见人性的千姿百态。
      《唐人街探案》中没有单纯意义上的好人坏人,每个人都有自己阴暗和自私的一面,无人能独善其身,
      想想小女孩最后诡异的笑,人性的两面永远让人细思极恐。
    </p>
    <div class="bottom">
      <div class="left">
        01-10 08:23
      </div>
      <ul class="right">
        <li>
          <img src="../../assets/movie/slices/dianzan.png" alt="">
          <span>531</span>
        </li>
        <li>
          <img src="../../assets/movie/slices/comment2.png" alt="">
          <span>9</span>
        </li>
      </ul>
    </div>
  </div>
    <div class="comment-people">
    <div class="top">
      <div class="left">
        <img src="../../assets/movie/slices/ren.png" alt="">
      </div>
      <div class="right">
          <div class="name">水**手</div>
          <div class="sort">
            <star-review v-model="score"></star-review> 
          </div>
          <div class="ninth">9.0</div>
      </div>
    </div>
    <p class="center">
      推理的魅力从不在于推理本身,而是借推理撕开现代社会的层层包裹,窥见人性的千姿百态。
      《唐人街探案》中没有单纯意义上的好人坏人,每个人都有自己阴暗和自私的一面,无人能独善其身,
      想想小女孩最后诡异的笑,人性的两面永远让人细思极恐。
    </p>
    <div class="bottom">
      <div class="left">
        01-10 08:23
      </div>
      <ul class="right">
        <li>
          <img src="../../assets/movie/slices/dianzan.png" alt="">
          <span>531</span>
        </li>
        <li>
          <img src="../../assets/movie/slices/comment2.png" alt="">
          <span>9</span>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import StarReview from "../starpage/StarReview.vue"
export default {
  name:"Movie-Comment",
  data() {
    return {
      score:3.5,
     
    }
  },
  methods:{
    
  },
  components:{
    StarReview,
  }
}
</script>

<style lang="scss" scoped>
  .page-comment{
    width:375px;
    background-color: #ffffff;
    .comment{
      width:375px;
      height:50px;
      .title{
        width:57px;
        height:18px;
        font-size:19px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(5,5,5,1);
        line-height:25px;
        margin:2px 303px 0px 15px;
        padding-top:10px;    
      }
      p{
        margin:-14px 10px 0px 60px;
      }
       img{
        float:right;
        width:10px;
        height:18px;
        margin: -21px 18px;
      }
    }
    .comment-people{
      width:360px;
      height:220px;
      margin:10px 5px;
      .top{
         width:360px;
         height:50px;
         .left img{
           width:49px;
           height:49px;
           margin: 0px 5px;
         }
         .right{
          width:300px;
          height:47px;
          .name{
          width:60px;
          height:14px;
          font-size:15px;
          font-family:PingFang SC;
          color:rgba(5,5,5,1);
          line-height:22px;
          }
          .ninth{
            width:14px;
            height:10px;
            margin-left:88px;
            margin-top:7px;
            color:orange;
          }
         }
      }
      .center{
          margin:10px 8px 5px 10px;
          width:344px;
          height:120px;
          font-size:15px;
          font-family:PingFang SC;
          color:rgba(0,0,0,1);
          line-height:24px;
         }
      .bottom{
        width:344px;
        height:10px;
        font-size:12px;
        font-family:PingFang SC;
        color:rgba(196,196,196,1);
        line-height:19px; 
        margin:10px 13px;
        .right{
         display:inline-block;
         li{
           float:left;
           padding:0 10px;
           img{
           width:16px;
           height:16px;
           padding:0px 3px;
           }
           span{
            display:inline-block;
            width:20px;
            height:20px;
            font-size:14px;
            font-family:PingFang SC;
            color:rgba(196,196,196,1);
            line-height:19px;
            padding-bottom:1px;
           }
         }
        }
      } 

    }

  }
</style>