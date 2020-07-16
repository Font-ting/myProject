<template>
  <div class="movie-list">
    <div class="movie-detail-list">
      <img :src="detail.cover" alt="">
      <div class="text">
        <div class="title">{{detail.name}}</div>
        <div class="detail">
          <div class="type">{{detailList[0]}} / {{detailList[1]}} / 中国 日本</div>
          <!-- <div class="time" >{{this.detail.showDate.slice(0,10)}} 中国大陆上映</div> -->
          <div class="sort">推评分 {{detail.tuiScore}}分 <span>（{{detail.reviewTimes}}人评分）</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Detail",
  data (){
    return{}
  },
  props:{
    detailList: {
      type:Array,
      default (){
        return []
      }
    },
    detail:{
      type:Object,
      default (){
        return {}
      }
    }
    
  },
  // computed: {
  //   showDate (){
  //     console.log(this.detail.showDate);
  //     return this.detail.showDate;
  //     // console.log(typeof this.detail.showDate.toString());
  //   }
  // }
}
</script>

<style scoped>
.movie-list{
  width:375px;
  height:273px;
  margin-top:30px;
  background-color: #ffffff;
}
.movie-list-detail{
  width:375px;
  height:137px; 
}
img{
  width:98px;
  height:137px;
  float: left;
  margin:4px 10px 0px 30px;
}
.text{
  width:203px;
  height:137px;
  margin:15px;
  float:right;
}
.title{
  width:203px;
  height:54px;
  font-size:23px;
  margin:-15px 20px 0px -10px;
  color:#000000;
}
.detail{
  width:203px;
  height:54px;
  font-size:11px;
  margin:32px 0px 0px -10px;
  color:rgba(153,153,153,1);
}
.type{
  width:147px;
  height:11px;
  margin:0px 0px 10px 0px;
}
.time{
  width:147px;
  height:11px;
  margin:0px 0px 10px 0px;
}
.sort{
  width:147px;
  height:11px;
  margin:0px 0px 10px 0px;
}
span{
  color:orange;
}

</style>