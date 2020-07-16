<template>
  <div class="whole-page">
    <HeadTop head-title="评论" go-back="true" ></HeadTop>
    <div class="tui-sort">
      <div class="content">
        <div class="left">
          <p>推评分</p>
          <div class="sort">{{score}}</div>
          <star-review v-model="score"></star-review> 
        </div>
        <div class="right">
          <div class="douban-sort">豆瓣分 {{score}}</div>
          <div class="percent-sort">
            <ul>
              <li class="five-sort">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <span class="sort-strip" :style="garySort"></span>
                <span class="sort-orange-five" :style="garySortFive"></span>
                <span class="percent">{{percentFiveStar}}</span>
              </li>

              <li class="four-sort">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <span class="sort-strip" :style="garySort"></span>
                <span class="sort-orange-four" :style="garySortFour"></span>
                <span class="percent">{{percentFourStar}}</span>
              </li>

              <li class="three-sort">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <span class="sort-strip" :style="garySort"></span>
                <span class="sort-orange-three" :style="garySortThree"></span>
                <span class="percent">{{percentThreeStar}}</span>
              </li>

              <li class="two-sort">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <span class="sort-strip" :style="garySort"></span>
                <span class="sort-orange-two" :style="garySortTwo"></span>
                <span class="percent">{{percentTwoStar}}</span>
              </li>

              <li class="one-sort">
                <img src="../../assets/movie/comment/graystar.png" alt="">
                <span class="sort-strip" :style="garySort"></span>
                <span class="sort-orange-one" :style="garySortOne"></span>
                <span class="percent">{{percentFiveStar}}</span>
              </li>
            </ul>
          </div>
          <div class="people-sort">{{totalTimes}}人评分</div>
        </div>
      </div>
    </div>
    <div class="movie-comment">
      <div class="title">影评</div>
      <p>(1469)</p>
      <div class="hot-new">
        <span class="hot">热门</span>
        <span>最新</span>
      </div>
      <div class="choice">精选</div>
      <movie-review :childhotReviewDoMovie="hotReviewDoMovie" v-show="isShow"></movie-review>
      <movie-review-normal :childReviewDoMovie="ReviewDoMovie" v-show="isShow2"></movie-review-normal>
      <div class="more" @click="handelMoreMovieComment" v-show="isShow3">查看更多热门影评</div>
      <div class="comments" @click="handelComment">
        <div class="comments-blue">
           <img src="../../assets/movie/comment/pencil.png" alt="">
        </div>
      </div>
      <div class="write-comment" v-if="isShow1">
        <div class="write-sort">
          <span class="da-sort">打分</span>
          <star-review v-model="score" class="star"></star-review> 
          <span class="sort">8.0分</span>
        </div>
        <textarea class="write" minlength="5"></textarea>
        <div class="publish">
          <span>发表</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import HeadTop from '@/components/header/Head'
import MovieReview from '@/components/commentpage/MovieReview'
import MovieReviewNormal from '@/components/commentpage/MovieReviewNormal'
import StarReview from "@/components/starpage/StarReview.vue"
export default {
  name:"Comment",
  data(){
    return{
      isShow:true,
      isShow1:false,
      isShow2:false,
      isShow3:true,
      score:0,
      totalTimes:0,
      tuiTimesArray:[],
      percentFiveStar:0,
      percentFourStar:0,
      percentThreeStar:0,
      percentTwoStar:0,
      percentOneStar:0,
      hotReviewDoMovie:[],
      ReviewDoMovie:{}
    }
  },
  components:{
    HeadTop,
    MovieReview,
    MovieReviewNormal,
    StarReview
  },
  created(){
     this.getData();
  },
  computed:{
    garySort(){
      return {
        width: 170+"px"
      }
    },
    garySortFive(){
      return {
        width: this.tuiTimesArray[0] / this.totalTimes* 170+ "px"
      }
    },
    garySortFour(){
      return {
        width: this.tuiTimesArray[1] / this.totalTimes*170 + "px"
      }
    },
    garySortThree(){
      return {
        width: this.tuiTimesArray[2] / this.totalTimes*170 + "px"
      }
    },
    garySortTwo(){
      return {
        width: this.tuiTimesArray[3] / this.totalTimes*170 + "px"
      }
    },
    garySortOne(){
      return {
        width: this.tuiTimesArray[4] / this.totalTimes*170 + "px"
      }
    }
  },
  methods:{
    handelComment (){
      this.isShow1 = true;
    },
    handelMoreMovieComment (){
      this.isShow = !this.isShow;
      this.getData();
      this.isShow2 = true;
    },
    getData (){
      var path = 'movie/review/init?movieId=2';
      this.$http.get(path)
        .then(res => {
          // 0. 总数据
          console.log(res);
          // 1.推评分模块数据
          console.log(res.data.data.tuiScore);
          let result = res.data.data.tuiScore;
          this.score = result.tuiScore;
          this.totalTimes = result.totalTimes;
          this.tuiTimesArray = [result.star5,result.star4,result.star3,result.star2,result.star1];
          this.percentFiveStar = parseFloat((this.tuiTimesArray[0] / this.totalTimes * 100).toPrecision(4))+"%";
          this.percentFourStar = parseFloat((this.tuiTimesArray[1] / this.totalTimes * 100).toPrecision(4))+"%";
          this.percentThreeStar = parseFloat((this.tuiTimesArray[2] / this.totalTimes * 100).toPrecision(4))+"%";
          this.percentTwoStar = parseFloat((this.tuiTimesArray[3] / this.totalTimes * 100).toPrecision(4))+"%";
          this.percentOneStar = parseFloat((this.tuiTimesArray[4] / this.totalTimes * 100).toPrecision(4))+"%";

          // 2.精选电影模块数据
          console.log(res.data.data.hotReviewDO);
          let resultHotReviewDO = res.data.data.hotReviewDO;
          this.hotReviewDoMovie = resultHotReviewDO;
          console.log(this.hotReviewDoMovie)

          // // 3.正常电影数据模块
          console.log(res.data.data.reviewDO);
          let resultReviewDo = res.data.data.reviewDO;
          this.ReviewDoMovie = resultReviewDo;

        }).catch(res=> {
            console.log(res);
        });
    },


  }
    
}
</script>
<style lang="scss" scoped>
.whole-page{
    width:375px;
    background-color: #fff;
    .tui-sort{
      width:375px;
      height:160px; 
      border-top:1px solid lightgray;
      .content{
        width:360px;
        height:147px;
        margin:11px 17px 11px 12px;
        .left{
          width:80px;
          height:147px;
          p{
            width:49px;
            height:15px;
            font-size:16px;
            font-family:PingFang SC;
            color:rgba(56,56,56,1);
            line-height:22.5px;
            margin-top:17px;
            margin-bottom:15px;

          }
          .sort{
            width:56px;
            height:28px;
            font-size:37px;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(24,24,24,1);
            line-height:55px;
            margin-bottom:25px;
            margin-left:3px;
          }
          img{
            width:13px;
            height:13px;

          }
        }
        .right{
          width:260px;
          height:147px;
          .douban-sort{
            width:68px;
            height:12px;
            font-size:13px;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(56,56,56,1);
            line-height:22px;
            margin:16px 2px 2px 187px;
          }
          .percent-sort{
            margin:23px 0px 3px -20px;
            width:268px;
            height:70px;
            ul{
              width:268px;
              height:70px;
              position:relative;
              .five-sort{
                width:268px;
                height:11px;
                img{
                width:10px;
                height:10px;
                }
                .sort-strip{
                margin-left:3px;
                display: inline-block;
                width:176px;
                height:8px;
                background-color: lightgray;
                }
                .sort-orange-five{
                display: inline-block;
                width:45px;
                height:8px;
                background-color: orange;
                position:absolute;
                left:53px;
                top:6px;
                }
               .percent{
                width:26px;
                height:8px;
                font-size:10px;
                font-family:PingFang SC;
                font-weight:bold;
                color:rgba(196,196,196,1);
                line-height:22px;
                margin-left:8px;
                }
              }
              .four-sort{
                margin-left:10px;
                width:268px;
                height:11px;
                img{
                width:10px;
                height:10px;
                }
                .sort-strip{
                margin-left:3px;
                display: inline-block;
                width:176px;
                height:8px;
                background-color: lightgray;
                }
                .sort-orange-four{
                display: inline-block;
                width:90px;
                height:8px;
                background-color: orange;
                position:absolute;
                left:53px;
                top:17px;
                }
               .percent{
                width:26px;
                height:8px;
                font-size:10px;
                font-family:PingFang SC;
                font-weight:bold;
                color:rgba(196,196,196,1);
                line-height:22px;
                margin-left:8px;
                }
              }
              .three-sort{
                margin-left:20px;
                width:268px;
                height:11px;
                img{
                width:10px;
                height:10px;
                }
                .sort-strip{
                margin-left:3px;
                display: inline-block;
                width:176px;
                height:8px;
                background-color: lightgray;
                }
                .sort-orange-three{
                display: inline-block;
                width:35px;
                height:8px;
                background-color: orange;
                position:absolute;
                left:53px;
                top:28px;
                }
               .percent{
                width:26px;
                height:8px;
                font-size:10px;
                font-family:PingFang SC;
                font-weight:bold;
                color:rgba(196,196,196,1);
                line-height:22px;
                margin-left:8px;
                }
              }
              .two-sort{
                margin-left:30px;
                width:268px;
                height:11px;
                img{
                width:10px;
                height:10px;
                }
                .sort-strip{
                margin-left:3px;
                display: inline-block;
                width:176px;
                height:8px;
                background-color: lightgray;
                }
                .sort-orange-two{
                display: inline-block;
                width:20px;
                height:8px;
                background-color: orange;
                position:absolute;
                left:53px;
                top:40px;
                }
               .percent{
                width:26px;
                height:8px;
                font-size:10px;
                font-family:PingFang SC;
                font-weight:bold;
                color:rgba(196,196,196,1);
                line-height:22px;
                margin-left:8px;
                }
              }
              .one-sort{
                margin-left:40px;
                width:268px;
                height:11px;
                img{
                width:10px;
                height:10px;
                }
                .sort-strip{
                margin-left:3px;
                display: inline-block;
                width:176px;
                height:8px;
                background-color: lightgray;
                }
                .sort-orange-one{
                display: inline-block;
                width:20px;
                height:8px;
                background-color: orange;
                position:absolute;
                left:53px;
                top:50px;
                }
               .percent{
                width:26px;
                height:8px;
                font-size:10px;
                font-family:PingFang SC;
                font-weight:bold;
                color:rgba(196,196,196,1);
                line-height:22px;
                margin-left:8px;
                }
              }

            }

          }
          .people-sort{
            width:55px;
            height:20px;
            font-size:10px;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(196,196,196,1);
            line-height:22px;
            margin-top:-10px;
            margin-left:155px;
          }
        }
      }

    }
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
        margin:2px 303px 0px 15px;
        padding-top:10px;    
      }
      p{
        font-size:21px;
        font-family:PingFang SC;
        color:rgba(102,97,97,0.637);
        margin:-19px 10px 0px 67px;
      }
      .hot-new{
        width:103px;
        height:35px;
        line-height: 35px;
        background-color: rgb(231, 229, 229);
        border-radius: 20px;
        text-align: center;
        margin-top:-26px;
        margin-left:262px;
        box-shadow:2px 2px 8px 5px rgba(68,68,68,0.07);
        .hot{
          margin-right:10px;
          display: inline-block;
          width:50px;
          height:28px;
          line-height: 28px;
          background-color: #fff;
          border-radius: 20px;
          box-shadow:5px 2px 8px 5px rgba(68,68,68,0.07);

        }
      }
      .choice{
        margin-top:10px;
        margin-left:17px;
        margin-bottom:18px;
        width:40px;
        height:24px;
        line-height: 24px;
        text-align:center;
        border:1px solid orange;
        color:white;
        background-color: orange;
      }
      .more{
        width:120px;
        height:40px;
        font-size:13px;
        font-family:PingFang SC;
        color:rgba(126,177,238,1);
        line-height:23px;
        margin-left:125px;
      }
      // 点击评论
      .comments{
        width:48px;
        height:48px;
        margin-left:285px;
        .comments-blue{
          width:48px;
          height:48px; 
          background-color:rgba(126,177,238,1);
          border-radius:50px;
        }
        img{
          width:30px;
          height:30px;
          margin-left:9px;
          margin-top:8px;
        }
      }
      .write-comment{
        width:350px;
        height:399px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 12px 3px rgba(113,114,115,0.17);
        border-radius:5px;
        margin:20px 10px;
        .write-sort{
          width:338px;
          height:45px;
          span{
            width:33px;
            height:15px;
            font-size:16px;
            font-family:PingFang SC;
            color:rgba(56,56,56,1);
            line-height:23px;
            margin-right:10px;
            margin-left:10px;
          }
          .sort{
            margin-left:60px;
          }
          .star{
            width:17px;
            height:17px;
            margin-left:5px;
            margin-top:16px;
          }
        }
        .write{
          width:330px;
          height:215px;
          border:2px solid rgba(218,218,218,1);
          border-radius:5px;
          margin:10px 10px;
          margin-bottom: 20px;
        }
        .publish{
        width:110px;
        height:40px;
        background-color: orange;
        margin:10px 233px;
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