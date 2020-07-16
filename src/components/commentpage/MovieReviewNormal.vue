<template>
  <div class="page-comment" id="movie-comment">
    <div class="review" v-for="(item,index) in childReviewDoMovie.movieReviewDOList" :key="index" >
      <div class="user-message">
        <img class="user-picture" :src="item.user.photoAddress" alt="">
        <div class="name">{{item.user.userName}}</div>
        <div class="star-picture">
          <star-review v-model="item.review.score" class="star"></star-review> 
        </div>
        <div class="time">{{item.review.updateTime.slice(0,10)}}</div>
      </div>
      <div class="movie-review">{{item.review.simpleAnswer}}</div>
      <div class="review-message">
        <ul>
          <li class="zan">赞 <span>{{item.review.upTimes}}</span> </li>
          <li>|</li>
          <li class="reply">回复 <span>{{item.review.commentTimes}}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import StarReview from "@/components/starpage/StarReview.vue"
export default {
  name:"MovieReviewNormal",
  data() {
    return {
     score:3.2,
    }
  },
  created(){
    
  },
  props:{
  childReviewDoMovie:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    name(){
      return function(item){
        return item.user.userName
      }
    }
  },
  methods:{
    
  },
  components:{
    StarReview
  }
}
</script>

<style lang="scss" scoped>
  .page-comment{
    width:375px;
    background-color: #ffffff;
    .review{
      width:328px;
      height:150px;
      margin-left:10px;
      .user-message{
        height:40px;
        padding-top:15px;
        .user-picture{
          width:40px;
          height:40px;
        }
        .name{
          width:121px;
          font-size:15px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(56,56,56,1);
          line-height:22px;
          margin:-43px 26px -16px 47px;
        }
        .star-picture{
          margin-left:46px;
          .star{
            margin-top:1px;
          }
        }
        .time{
          margin-top:3px;
          margin-left:130px;
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