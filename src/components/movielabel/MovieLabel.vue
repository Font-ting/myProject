<template>
<div class="label">
  <div class="movie-label" id="label">
    <div class="movie-label-item">
      <div class="label-item"
      v-for="(item,index) in label"
      :key="index"
      @click="handelMovieItem(index)"
      :class="{'active':indexList.indexOf(index)>-1}"
      >
        <span>{{item.labelName}}</span>
        <span>{{item.number}}</span>

      </div>
      <div style="clear:both"></div>
    </div>
    <div class="publish-label">
      <input v-model="inputValue" type="text" placeholder="添加自己的标签，5个字内" >
      <button class="publish" @click="handelAddMovieLabel" >发布</button>
    </div>
  </div>
  <span @click="unFoldLabel" class="fold">{{isShowFoldLabel?"收起":"更多"}}</span>
</div>

</template>

<script>
export default {
  name:"Movie-Label",
  created(){
    
  },
  components:{
  },
  data(){
    return{
      label:
      [
        {"labelName":"无尿点","number":999},
        {"labelName":"结局太惊喜","number":110},
        {"labelName":"赞王宝强","number":112},
        {"labelName":"搞笑","number":33},
        {"labelName":"过瘾","number":12},
        {"labelName":"结局太惊喜","number":110},
        {"labelName":"过瘾","number":12},
        {"labelName":"结局太惊喜","number":110},
        {"labelName":"过瘾","number":12},
      ],
      isShow:false,
      isShowFoldLabel:false,
      indexList: [],
      inputValue:null,
    }
  },
  methods:{
    handelMovieItem (index){
      let arrIndex = this.indexList.indexOf(index);
        console.log("数组索引", arrIndex);
        if (arrIndex > -1) {
            this.indexList.splice(arrIndex, 1);
            this.label[index].number--
        } else {
            this.indexList.push(index);
            this.label[index].number++;
        }
          console.log("输出数组", this.indexList); 
    },
    unFoldLabel (){
    if(this.isShowFoldLabel==false){
        document.getElementById("label").style.height="auto";
        this.isShowFoldLabel=!this.isShowFoldLabel;
    }else{
        document.getElementById("label").style.height="50px";
        this.isShowFoldLabel=!this.isShowFoldLabel;
      }
    },
    handelAddMovieLabel(){
      this.label.push({"labelName":this.inputValue,"number":1});
    }
  }

}
</script>

<style scoped lang="scss">
.label{
  width:375px;
  background-color: #fff;
  position:relative;
  margin-top: 3px;
  padding-top: 20px;
  padding-bottom:10px;
 .movie-label{
   width:342px;
   height:50px;
   margin:0px 10px;
   overflow: hidden;
   .movie-label-item{
     background-color: #fff;
      .label-item{
      border:1px solid lightgray;
      text-align:center;
      padding:6px 10px;
      border-radius:20px;
      float:left;
      margin:10px 5px;
      font-size:13px;
    }
   }
    .active{
      background-color:orange;
      color:#fff;
      span{
        color:#fff;
      }
    }
   .publish-label{
     margin-top:20px;
      width:342px;
      height:51px;
      background-color: lightgray;
      input{
        width:257px;
        height:26px;
        background-color: #fff;
        margin:10px;
        text-align:center;
      }
      .publish{
        width:50px;
        height:26px;
        color:orange;
        background-color: #fff;
      }
    }
  }
    .fold{
    display: inline-block;
    width:375px;
    position: absolute;
    bottom: -22px;
    right: -1px;
    font-size: 15px;
    background: #fff;
    text-align:center;
    padding-bottom:9px;
    border-bottom:1px solid lightgray;
  }

}
 
</style>