<template>
  <div class="whole-page">
    <HeadTop head-title="评价" go-back="true" ></HeadTop>
    <div class="movie-comment">
      <div class="title">电影名</div>
      <movie-review-date></movie-review-date>
      <div class="title">讨论</div>
      <movie-review-louzhu></movie-review-louzhu>
      <div class="write-comment">
        <div class="louzhu">
          @楼主或其他人
          <div class="word-counter">{{value1.length}}/{{this.maxLength}}</div>
        </div>
        
        <textarea class="write" style = "resize: none" v-model="value1" maxlength="200" name="" id="" cols="30" rows="10" ></textarea>
        <div class="publish">
        <span>发表</span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadTop from '@/components/header/Head'
import MovieReviewLouzhu from '@/components/commentpage/MovieReviewLouzhu'
import MovieReviewDate from '@/components/commentpage/MovieReviewDate'
export default {
  name:"Movie-Evaluate",
  data(){
      return{
          passwordClass: "icon-input-show",
          value1:"",
          maxLength:200,
          messageTextarea:"",
      }
  },
  computed:{
    remainCounter(){
      return this.maxLength-this.value1.length;
    }
  },
  components:{
    HeadTop,
    MovieReviewLouzhu,
    MovieReviewDate,

},
    
}
</script>

<style lang="scss" scoped>
.whole-page{
    width:375px;
    background:rgba(247,247,247,1);
    .movie-comment{
      width:375px;
      .title{
        width:57px;
        height:18px;
        font-size:19px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(5,5,5,1);
        line-height:25px;
        margin:10px 303px 20px 15px;
        padding-top:10px;    
      }
      .write-comment{
        width:350px;
        height:599px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 12px 3px rgba(113,114,115,0.17);
        border-radius:5px;
        margin:20px 10px;
        .louzhu{
          width:120px;
          font-size:15px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(56,56,56,1);
          line-height:23px;
          padding-top:20px;
          margin-left:10px;
          .word-counter{
            width:43px;
            height:13px;
            font-size:13px;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(56,56,56,1);
            line-height:13px;
            margin-left:294px;
            margin-top:-17px;
          }
        }
        .write{
          width:330px;
          height:215px;
          border:2px solid rgba(218,218,218,1);
          border-radius:5px;
          margin:24px 10px;
          margin-bottom: 20px;
        }
        .publish{
        width:110px;
        height:40px;
        background-color: orange;
        margin:10px 227px;
        span{
          width:27px;
          height:12px;
          font-size:13px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:40px;
          margin-left:38px;
        }
      }


      }


    }
  
}
</style>