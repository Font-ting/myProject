<template>
<div class="page">
  <div class="whole-page">
      <ul>
        <!-- click事件不能绑定在li事件上，因为这个元素可能不存在，所以这个事件就不起效果 -->
        <div @click="handelLike">
        <li v-if="isShow" class="one" >
           <img src="../../assets/movie/slices/like.png" alt="">
           <span class="text">喜欢</span>
        </li>
         <li v-else class="one">
           <img src="../../assets/movie/slices/likeafter.png" alt="">
           <span class="text">喜欢</span>
        </li>
        </div>
        <span class="like-number">{{like}}</span>
        <li class="two">
           <img src="../../assets/movie/slices/comment.png" alt="">
           <router-link class="text" to="/movie/list/detail/comment">评论</router-link>
        </li>
        <li class="three">
           <img src="../../assets/movie/slices/share.png" alt="">
           <span class="text">分享</span>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {
  name:"evaluate-share",
  created (){
    //喜欢部分♥变色处理
    if(this.collected == true){
      this.isShow = false;
    }
  },
  props:{
      collected:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      isShow:true,
      like:100
    }
  },
  methods:{
    handelLike (){
      this.isShow = !this.isShow;
      //如果点击喜欢，数字加1
      if(this.isShow == false){
        this.like++;

      //如果不喜欢，数字减1
      }else if(this.isShow == true){
        this.like--;
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.page{
  background:rgba(255,255,255,1);
  width:375px;
  height:55px;
  margin:-4px 0px 0px 0px;
}
  .whole-page{
    width:367px;
    height:44px;
    background:rgba(255,255,255,1);
    box-shadow:1px 8px 18px 4px rgba(113,115,115,0.15);
    border-radius:15px;
    margin:-116px 22px 4px 4px;
    ul{
      width:367px;
      height:20px;
      display: inline-block;
      position:relative;
    }
    li{
      float:left;
      margin:5px 48px -4px 20px;
    }
    li img{
      width:16px;
      height:12px;
    }
    li .text{
      width:15px;
      height:14px;
      font-size:14px;
      font-family:PingFang SC;
      line-height:12px;
      margin:0px 5px;
    }
    .like-number{
      position: absolute;;
      left:70px;
      top:-5px;
      margin:10px 10px;
    }
    
  }
  
</style>