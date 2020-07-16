<template>
  <div class="whole-page">
    <HeadTop head-title="电影列表" go-back="true" ></HeadTop>
    <detail  :detailList = "detailList" :detail = "detail"></detail>
    <evaluate-share  :collected = "collected" ></evaluate-share>
    <movie-recommend  :castMemberList = "castMemberList" :director= "director" :detail= "detail" ></movie-recommend>
  </div>
</template>

<script>
import HeadTop from '@/components/header/Head'
import Detail from "@/components/movie/Detail"
import EvaluateShare from "@/components/movie/EvaluateShare"
import MovieRecommend from "@/components/movie/MovieRecommend"
export default {
  name:"movieDetail",
  data(){
    return{
      detailList:[],
      castMemberList:[],
      detail:{},
      director:{},
      collected:null,
    
    }
  },
  created (){
    this.getMoreData()
  },
  components:{
    HeadTop,
    Detail,
    EvaluateShare,
    MovieRecommend,
  },
  methods:{
    //获取后台数据
    getMoreData (){
      this.$http.get("/movie/2")
      .then(res => {
        console.log(res.data.data);

        let data = res.data.data;

        this.detailList = [data.timeInMinite,data.typeName];
        this.castMemberList = [data.actorList,data.tuiVideos,data.tuiImages];

        this.detail = data.detail;
        this.director = data.director;

        this.collected = data.collected;


        console.log(this.detailList);
        console.log(this.detailList[0]);

        console.log(this.detailList[0].cover);
        console.log(this.collected);
        console.log(this.castMemberList);

      }).catch(err => {
        console.log(err)
      })       
    }
  }
    
}
</script>
<style scoped>
.whole-page{
    z-index:10;
    padding:0;
    margin:0;
    width:375px;
    /* height:1000px; */
    background-color: #ffffff;
    }
</style>