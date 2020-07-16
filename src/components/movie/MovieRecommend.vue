<template>
<div class="page-recommend">
  <div class="whole-page">


    <!-- 导航滑动置顶组件：StickySlot -->
      <sticky-slot class="stickyTop">
        <ul>
        <li @click="introductionTab"><a href="#movie-introduction">简介</a><img v-if="isShowIntroduction" src="../../assets/movie/slices/sq.png" alt=""></li>
        <li><a @click="recommendTab" href="#movie-recommend">推荐</a><img v-if="isShowRecommend" src="../../assets/movie/slices/sq.png" alt=""></li>
        <li><a @click="commentTab" href="#movie-comment">影评</a><img v-if="isShowComment" src="../../assets/movie/slices/sq.png" alt=""></li>
        </ul>
      </sticky-slot>


      <!-- 简介 -->
      <div v-if="isShowIntroduction" class="Introduction">
        <div class="Introduction1" id="movie-introduction">
          <p id="p" @click="unFoldIntro" >
            {{detail.desc}}
            <span class="fold">{{isShowFoldIntro?"收起":"展开"}}</span>
          </p>
        </div>
      </div>
      <movie-label></movie-label>
      <div class="actor">
        <div class="title">演职员</div>
        <div class="actor-picture">
            <div class="actor-item">
              <img :src="director.avatar" alt="">
              <div>{{director.name}}</div>
              <p>{{director.desc}}</p>
            </div>
            <div v-for="(item,index) in castMemberList[0] " :key="index" class="actor-item">
              <img :src="item.avatar" alt="">
              <div>{{item.name}}</div>
              <p>{{item.desc}}</p>
            </div>
        </div>  
      </div>

      <div id="movie-recommend" class="recommend-movie">
        <div class="title">推电影</div>
         <div class="Introduction">
          <p id="recomMovie"  @click="unFoldRecoMovie">
            {{detail.tuiDesc}}
            <span class="fold">{{isShowFoldRecoMovie?"收起":"展开"}}</span>
          </p>
        </div>
      </div>
      
      <div class="recommend-clip">
        <div class="title">
          推剪辑
        </div>
        <span><img src="../../assets/movie/slices/youjiantou.png" alt=""></span>
        <div class="picture">
          <div  v-for="(item,index) in castMemberList[1]"  :key="index" class="picture-item">
            <img :src="item.cover" alt="">
            <div class="text">24分钟版本唐探3的一切，看这个就够了！24分钟版本唐探3的一切，看这个就够了！</div>
          </div>
        </div>
        <div class="more" @click="HandelClickMore">更多</div>
      </div>
      <div class="recommend-picture">
        <div class="title">
          推图集
        </div>
        <span><img src="../../assets/movie/slices/youjiantou.png" alt=""></span>
        <div class="picture">
          <div class="picture-one">
            <div v-for="(item,index) in castMemberList[2]"  :key="index"  class="one">
              <img :src="item.cover" alt="">
              <div class="text">24分钟版本唐探3的一切，看这个就够了！</div>
            </div>
            </div>
        </div>
      </div>
      <MovieComment></MovieComment>
  </div>
</div>
</template>
<script>
import MovieComment from "@/components/movie/MovieComment"
import StickySlot from "@/components/nav/StickySlot"
import MovieLabel from "@/components/movielabel/MovieLabel"

export default {
  name:"Movie-Recommend",
    props:{
      castMemberList:{
        type:Array,
        default (){
          return []
      }
      },
      director:{
        type:Object,
        default (){
          return {}
      }
    },
      detail:{
        type:Object,
        default (){
          return {}
      }
    }
  },
  data() {
    return {
      isShowIntroduction:false,
      isShowRecommend:false,
      isShowComment:false,
      isShowFoldIntro:false,
      isShowFoldRecoMovie:false,
    }
  },
   components:{
    MovieComment,
    StickySlot,
    MovieLabel
  },
  methods:{
    introductionTab (){
      this.isShowIntroduction = !this.isShowIntroduction;
      this.isShowRecommend = false;
      this.isShowComment= false;
    },
    recommendTab (){
      this.isShowIntroduction = false;
      this.isShowRecommend = !this.isShowRecommend;
      this.isShowComment = false;
    },
    commentTab (){
      this.isShowIntroduction = false;
      this.isShowRecommend = false;
      this.isShowComment = !this.isShowComment;
    },
    unFoldIntro (){
      if(this.isShowFoldIntro == false){
        document.getElementById("p").style.height = "auto"
        this.isShowFoldIntro =! this.isShowFoldIntro
      }else{
        document.getElementById("p").style.height = "100px"
        this.isShowFoldIntro =! this.isShowFoldIntro
        }
    },
    unFoldRecoMovie (){
    if(this.isShowFoldRecoMovie == false){
      document.getElementById("recomMovie").style.height = "auto"
      this.isShowFoldRecoMovie=!this.isShowFoldRecoMovie;
    }else{
      document.getElementById("recomMovie").style.height = "100px"
      this.isShowFoldRecoMovie =! this.isShowFoldRecoMovie;
      }
    },
    //点击更多页面
    HandelClickMore (){

    }
  }
}
</script>
<style lang="scss" scoped>
  .page-recommend{
    width:375px;
    height:35px;
    background-color: #fff;
    .stickyTop {
    top: 0;
    z-index: 10;
   ul{
      width:375px;
      height:60px;
      display: inline-block;
      border-bottom:1px solid lightgray;
      margin-bottom:-5px;
      background-color: #fff;
    }
    li{
      float:left;
      width:30px;
      height:15px;
      font-size:15px;
      font-family:PingFang SC;
      color:rgba(76,76,76,1);
      line-height:12px;
      margin:27px 47px;
      img{
        width:18px;
        margin:17px 13px 20px 4px;
      }
    }
   
    }
    .Introduction{
      width:375px;
      // height:250px;
      background-color: #ffffff;
      margin-top:1px 0px;
      border-bottom:1px solid lightgray;
      p{
        width:342px;
        height:100px;
        font-size:15px;
        font-family:PingFang SC;
        color:rgba(0,0,0,1);
        line-height:30px;
        margin:1px 15px 24px 15px;
        padding:10px 0px 0px 0px;
        overflow: hidden;
        position:relative;
        .fold{
          color:rgb(8, 177, 233);
          position: absolute;
          bottom: 2px;
          right: 12px;
          font-size: 15px;
          background: #fff;
          padding-left: 15px;
        }
      }
    }
    .actor{
      margin-top:20px;
      width:375px;
      height:300px;
      background-color: #ffffff;
      border-bottom:1px solid lightgray;
      .title{
        width:57px;
        height:18px;
        font-size:19px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(5,5,5,1);
        line-height:25px;
        margin:2px 303px 20px 15px;
        padding-top:10px
      }
      .actor-picture{
        width:350px;
        height:200px;
        margin:15px 10px;
        white-space: nowrap;//不换行
        overflow: hidden;
        overflow-x: scroll;
        overflow-y: hidden;
        .actor-item{
          display:inline-block;
          width:82px;
          height:150px;
          margin:0px 3px;
          img{
            width:82px;
            height:120px;
          }
          div{
            width:57px;
            height:14px;
            font-size:14px;
            font-family:PingFang SC;
            color:rgba(0,0,0,1);
            margin:0px 17px;
          }
          p{
            width:22px;
            height:11px;
            font-size:11px;
            font-family:PingFang SC;
            color:rgba(108,108,108,1);
            margin:7px 23px;
          }

        }
      }
    }
    .recommend-movie{
      width:375px;
      background-color: #ffffff;
      border-bottom:1px solid lightgray;
      .title{
        width:57px;
        height:18px;
        font-size:19px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(5,5,5,1);
        line-height:25px;
        margin:2px 303px 7px 15px;
        padding-top:10px
      }
      .Introduction{
      width:375px;
      background-color: #ffffff;
      margin-top:1px 0px;
      border-bottom:1px solid lightgray;
       p{
        width:342px;
        height:100px;
        font-size:15px;
        font-family:PingFang SC;
        color:rgba(0,0,0,1);
        line-height:30px;
        margin:1px 15px 24px 15px;
        padding:10px 0px 0px 0px;
        overflow: hidden;
        position:relative;
        .fold{
          color:rgb(8, 177, 233);
          position: absolute;
          bottom: 2px;
          right: 12px;
          font-size: 15px;
          background: #fff;
          padding-left: 15px;
        }
      }
      }
    }
    .recommend-clip{
      width:375px;
      background-color: #ffffff;
      border-top:1px solid lightgray;
      border-bottom:1px solid lightgray;
      margin:-3px 0px 0px 0px;
      .title{
        width:57px;
        height:18px;
        font-size:19px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(5,5,5,1);
        line-height:25px;
        margin:2px 303px 7px 15px;
        padding-top:10px;
      }
      span img{
        float:right;
        width:10px;
        height:18px;
        margin: -21px 18px;
      }
      .picture{
        width:360px;
        // white-space: nowrap;
        // overflow: hidden;
        // overflow-x: scroll;
        // overflow-y: hidden;
        .picture-item{
        // display:inline-block;
        img{
        width:343px;
        height:194px;
        margin:20px 15px;
        }
       .text{
        width:319px;
        height:32px;
        font-size:14px;
        white-space: pre-wrap;
        font-family:PingFang SC;
        color:rgba(0,0,0,1);
        line-height:18px;
        margin:-16px 25px 24px 19px;;
        }
      } 
        
      }
      .more{
        width:30px;
        height:15px;
        font-size:15px;
        font-family:PingFang SC;
        color:rgba(255,151,0,1);
        line-height:9px;
        margin:25px 165px;
      }
    }
    .recommend-picture{
      width:375px;
      height:250px;
      background-color: #ffffff;
      border-bottom:1px solid lightgray;
      margin:-19px 0px 0px 0px;
      .title{
        float:left;
        width:57px;
        height:18px;
        font-size:19px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(5,5,5,1);
        line-height:25px;
        margin:2px 303px 7px 15px;
        padding-top:10px;
      }
      span img{
        float:right;
        width:10px;
        height:18px;
        margin: -21px 18px;
      }
      // 下面的图片
      .picture{
        width:375px;
        height:200px;
        margin:19px 15px;
        .picture-one{
        width:350px;
        height:200px;
        white-space: nowrap;
        overflow: hidden;
        overflow-x: scroll;
        overflow-y: hidden;
        .one{
          //当想在一行显示多个时，并且超过固定的宽度时，必须加这个属性
          display:inline-block;
          width:220px;
          height:120px;
          padding:0px 3px;
          img{
          width:220px;
          height:120px;
          margin:8px 10px 8px 5px;
          }
          .text{
          white-space: pre-wrap;
          width:220px;
          height:32px;
          font-size:14px;
          font-family:PingFang SC;
          color:rgba(0,0,0,1);
          line-height:18px;
          margin:0px 4px;
          }
        }
       
  
      
      }
      }
     
    }
  }
</style>