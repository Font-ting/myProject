<template>
    <div class="whole-page" id="sd">
        <HeadTop head-title="电影列表" go-back="true" ></HeadTop>
        <div id="wrapper">
          <!-- 筛选部分 -->
            <div class="movie-select-section" >
                <div class="row2">
                    <ul>
                       <li v-for="item in sortTypeList" :key="item.id" :class="[sortTypeActive===item.id?'active4':'active3']" @click="handelsortType(item.id)">{{item.name}}</li>
                    </ul>
                </div>

                <div class="row2">
                    <ul>
                      <li v-for="item in regionIdList" :key="item.id" :class="[regionIdActive===item.id?'active4':'active3']" @click="handelregionId(item.id)">{{item.name}}</li>
                    </ul>
                </div>

                <div class="row2">
                    <ul>
                      <li v-for="item in typeList" :key="item.id" :class="[typeActive===item.id?'active4':'active3']"  @click="handeltype(item.id)">{{item.name}}</li>
                    </ul>
                </div>

                <div class="row2">
                    <ul>
                     <li v-for="item in movieDateList" :key="item.id" :class="[movieDateActive===item.id?'active4':'active3']"  @click="handelmovieDate(item.id)">{{item.name}}</li>
                    </ul>
                </div>

                <div class="row2">
                    <ul>
                     <li v-for="item in watchTypeList" :key="item.id" :class="[watchTypeActive===item.id?'active4':'active3']"  @click="handelwatchType(item.id)">{{item.name}}</li>
                    </ul>
                </div>

            </div>
          </div>
            <!-- 空白页面 -->
            <div v-if="isShow" class="non-content">
              <img src="../../assets/movie/list/nonContent.png" alt="" >
              <div class="non-content-word">还没有内容哟~</div>
            </div>
            <!-- 回到顶部的锚点 -->
            <div class="maodian">
              <a href="#sd">
                <img class="returnTop" src="../../assets/movie/list/returnTop.png" alt="">
              </a>
            </div>
            <!--加载中的页面  -->
            <div class="load">
               <van-list class="vant-list"
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
              :immediate-check="false"
               >
              <div class="movies">
              <div v-for="(value,index) in newMovieList" v-bind:key="(value,index)" class="movie-list-section">
              <!-- 左边的图片 -->
              <router-link class="left" to='/movie/list/detail'>
                <img class="left-img" :src="value.cover" alt="">
              </router-link>
              <!-- 右边的简介 -->
              <div class="right">
                <div class="title">{{value.name}}
                  <span class="year">({{value.showDate.slice(0,4)}})</span> 
                </div>
                <div class="center">
                    <div class="picture">
                      <img src="../../assets/movie/list/comment.png" alt="">
                      <span>{{value.tuiScore}}</span>
                       <img src="../../assets/movie/list/like.png" alt="">
                      <span>{{value.collectTimes}}</span>
                    </div>
                </div>
                <div class="movie-people">
                    <div class="people">导演:  {{value.directorName}} </div>
                    <div class="people">主演:  {{value.actorNames.split(",").join(" / ")}} </div>
                    <div class="people">类型:  {{movietype(value.type)}} / {{value.regions}}</div>
                </div>
              </div>
              </div>
              </div>
            </van-list>
            </div>
        </div>
</template>
<script>
    import HeadTop from '@/components/header/Head'
    import { Toast } from 'vant'
    export default {
        name: "movieList",
        async created(){
          if(this.isShow==false){
            var path = '/movie/list/ajax/load?'+"sortType=" +this.sortType + "&regionId="+this.regionId + "&type=" + this.type + "&movieDate=" + this.movieDate + "&page="+this.page + "&watchType=" + this.watchType;
            await this.$http.get(path)
                .then(res => {
                  if(res.data.data!=null){
                      console.log(res)
                      console.log(res.data.data)
                      console.log(this.isShow)
                      this.newMovieList = res.data.data;
                      }
                      else if(res.data.data==null){
                        this.newMovieList.splice(0,this.newMovieList.length)
                        this.isShow = true;
                      }
                }).catch(res=> {
                  //catch获取数据失败的时候调用
                  console.log(res);
                });
          }
           
        },
        data(){
            return{
              sortTypeActive:1,
              regionIdActive:0,
              typeActive:0,
              movieDateActive:1,
              watchTypeActive:0,
              isShow:false,
              isShow1:true,
              passwordClass: "icon-input-show",
              sortTypeList:[{"id":1,"name":"推时间"},{"id":2,"name":"推评分"},{"id":3,"name":"喜欢数"},{"id":4,"name":"新上线"}],
              regionIdList:[{"id":0,"name":"全部地区"},{"id":1,"name":"华语"},{"id":91,"name":"港台"},{"id":92,"name":"日韩"},{"id":93,"name":"东南亚"},{"id":8,"name":"美国"},{"id":9,"name":"其它"}],
              typeList:[{"id":0,"name":"全部类型"},{"id":11,"name":"喜剧"},{"id":21,"name":"爱情"},{"id":31,"name":"动作"},{"id":41,"name":"恐怖"},{"id":51,"name":"动画"},{"id":6,"name":"其它"}],
              movieDateList:[{"id":1,"name":"2020-2010"},{"id":2,"name":"2009-2000"},{"id":3,"name":"1999-1990"},{"id":4,"name":"新上线"}],
              watchTypeList:[{"id":0,"name":"全部方式"},{"id":1,"name":"可跳转"},{"id":2,"name":"下载链接"},{"id":3,"name":"仅推荐"}],
              sortType:1,
              regionId:0,
              type:0,
              movieDate:1,
              watchType:0,
              page:1,
              movieList:[],
              newMovieList:[],
              loading: false,
              finished: false,
            }
        },
        components:{
            HeadTop
        },
        methods:{
          // 第一行选项
           handelsortType(id){
            this.sortTypeActive = id;
            this.sortType = id;
            this.getData();

          },
           handelregionId(id){
              this.regionIdActive = id;
              this.regionId = id;
              this.getData();
    
          },
          handeltype(id){
              this.typeActive = id;
              this.type = id;
              this.getData();

          },
          handelmovieDate(id){
              this.movieDateActive = id;
              this.movieDate= id;
              this.getData();

          },
         handelwatchType(id){
              this.watchTypeActive = id;
              this.watchType= id;
              this.getData();

          },
          onLoad (){ 
              this.page++;      
              var path = '/movie/list/ajax/load?'+"sortType=" + this.sortType + "&regionId="+this.regionId + "&type=" + this.type + "&movieDate=" + this.movieDate + "&page="+this.page + "&watchType=" + this.watchType;
              this.$http.get(path)
                  .then(res => {
                      if(res.data.data!=null){
                        this.loading = false;
                        this.newMovieList = this.newMovieList.concat(res.data.data);
                      }
                      else if(res.data.data==null){
                        this.finished = true;
                        this.loading = false;
                      } 
                  }).catch(res=> {
                       console.log(res);
                  });
                  console.log("onLoad事件触发了");
                  console.log(this.page);
          },
          getData (){
              var path = '/movie/list/ajax/load?'+"sortType=" +this.sortType + "&regionId="+this.regionId + "&type=" + this.type + "&movieDate=" + this.movieDate + "&page=1&watchType="+ this.watchType;
              this.$http.get(path)
                .then(res => {
                    if(res.data.data!=null){
                        this.isShow = false;
                        console.log(res.data.data)
                        this.newMovieList = res.data.data;
                      }
                      else if(res.data.data==null){
                        this.isShow = true;
                        this.newMovieList.splice(0,this.newMovieList.length);
                      }
                }).catch(res=> {
                    console.log(res);
                    Toast(res.msg);

                });
          },
          movietype(type){
               for(var i=0;i<this.typeList.length;i++){
                 if(this.typeList[i].id==type){
                   return this.typeList[i].name;
                 }
               }

             }

        }

    }
</script>
<style>
.van-list__finished-text{
  text-align:left;
  margin-left:50px;
}
</style>
<style lang="scss" >
    .while-page{
        padding:0;
        margin:0;
        width:375px;
        background: #ffffff;
    }
    #wrapper{
        width:375px;
        background: #ffffff;
        position:relative;
    }
    .movie-select-section{
        width:375px;
        height: 200px;
        background-color: #fff;
        position:relative;
        .row2{
            width:375px;
            height:30px;
            font-size:11px;
            font-weight:300;
            margin:0px 0px 8px 0px;   
            ul{
              white-space: nowrap;
              overflow: hidden;
              overflow-x: auto;
              // overflow-y: hidden;
              width:375px;
              height:30px;
              li{
                display: inline-block;
                width:60px;
                height:25px;
                margin:0px 15px 2px 5px;
                line-height: 25px;
                text-align: center;
              }
              .active3{
                background-color:#fff;
              }
              .active4{
                border:1px solid rgba(246,246,246,1);
                background-color: rgba(246,246,246,1);
                border-radius:20px;
                color:rgb(226, 159, 25);
              }
            }
        }
    }
    .non-content{
      width:375px;
      height: 1000px;
      color:gray;
      background-color: #fff;
      font-size:12px;
      img{
        width:60px;
        height:60px;
        margin:63px 20px 50px 150px;
      }
      .non-content-word{
        margin:-44px 0px 50px 144px;
      }
    }
    .movies{
      width:375px;
      height:500px;
      margin-top:5px;
    }
    .movie-list-section{
      width:375px;
      height:125px;
      margin-bottom:0px;
      background-color: #fff;
        .left{
          width:125px;
          height:125px;
            .left-img{
            width:90px;
            height:110px;
            margin-left:15px;
            margin-top:5px;
            margin-bottom:5px;
          }
        }
        .right{
          width:250px;
          height:120px;
          .title{
            width:200px;
            font-size: 12px;
            font-weight:600px;
            margin-top:4px;
            overflow:hidden;
            text-overflow:ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient:vertical;
            .year{
              color:gray;
            }
          }
          .center{
          width:200px;
          margin-top:10px;
            .picture{  
              margin-right:30px;
              margin-top:12px;
              height:20px;
              img{
                width:13px;
                height:13px;
                margin-right:4px;
                margin-bottom:-2px;
              }
              span{
                display:inline-block;
                height:13px;
                color:gray;
                margin-right:20px;
                margin-bottom:18px;
                font-size:10px;
                line-height:13px;
              }
            }
          }
          .movie-people{
            width:220px;
            color:gray;
            margin-top:16px;
            .people{
            word-break:keep-all;/* 不换行 */
            white-space:nowrap;/* 不换行 */
            overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
            text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
            }
          }
        }
    }
    .maodian{
      width:30px;
      height:30px;
      // 锚点不起作用，对于定位的盒子，可以利用z-index提高层级
      z-index: 10;
      border:1px solid lightgray;
      background-color: lightgray;
      border-radius:100%;
      position:fixed;
      bottom:10px;
      // right:10px;
      margin:0px 3px 40px 324px;
      img{
        width:20px;
        height:20px;
        margin: 0px 3px -13px 5px; 
      }
      // .load{
      //   // height:1800px;
      //   width:375px;
      // }
      >>>.vant-list{
        width:375px;
        height:50px;
        margin-left:20px !important;

      }
    } 
</style>