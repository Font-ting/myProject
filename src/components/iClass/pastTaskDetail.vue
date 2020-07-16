<template>
  <div class="official-document">
    <div class="head">
      <div class="name" :class="{nameactiveOne: nameisActiveOne, nameactiveTwo: nameisActiveTwo, nameactiveThree: nameisActiveThree }">{{taskInfor.name}}</div>
      <div class="period" :class="{periodactiveOne: periodisActiveOne, periodactiveTwo: periodisActiveTwo, periodactiveThree: periodisActiveThree }">{{taskInfor.period}}</div>
      <div class="state" :class="{stateactiveOne: stateisActiveOne, stateactiveTwo: stateisActiveTwo}">{{taskInfor.state}}</div> 
    </div>   
    <router-link class="center" to="/iClass/document">
        第一期的脑图文档第一期的脑图文档
        第一期的脑图文档第一期的脑图文档第一期的脑图文档
        第一期的脑图文档第一期的脑图文档
        第一期的脑图文档第一期的脑图文档
    </router-link>
    <div class="footer">
      <div class="time">{{taskInfor.time}}</div>
    </div>
  </div>

</template>

<script>
export default {
  name:"officialDocument",
  data(){
    return{
      nameisActiveOne:false,
      nameisActiveTwo:true,
      nameisActiveThree:false,
      periodisActiveOne:true,
      periodisActiveTwo:false,
      periodisActiveThree:false,
      stateisActiveOne:true,
      stateisActiveTwo:false,
    }
  },
  created(){
    if(this.taskInfor.name=="原型图"){
      this.nameisActiveOne = true;
      this.periodisActiveOne = true;
      this.nameisActiveTwo = false;
      this.periodisActiveTwo = false;
      this.nameisActiveThree = false;
      this.periodisActiveThree = false;
    }
    else if(this.taskInfor.name=="脑图"){
      this.nameisActiveTwo = true;
      this.periodisActiveTwo = true;
      this.nameisActiveOne = false;
      this.periodisActiveOne = false;
      this.nameisActiveThree = false;
      this.periodisActiveThree = false;
    }
    else if(this.taskInfor.name=="prd"){
      this.nameisActiveThree = true;
      this.periodisActiveThree = true;
      this.nameisActiveTwo = false;
      this.periodisActiveTwo = false;
      this.nameisActiveOne = false;
      this.periodisActiveOne = false;

    }
    if(this.taskInfor.state=="进行中"){
      this.stateisActiveOne=true;
      this.stateisActiveTwo=false;
      
    }
    else if(this.taskInfor.state=="未开始"){
      this.stateisActiveTwo=true;
      this.stateisActiveOne=false;
    }
    if(this.taskInfor.submitState=="交作业"){
      this. submitisActiveOne = true;
      this.submitisActiveTwo = false;
    }
    else if(this.taskInfor.submitState=="已交"){
      this. submitisActiveOne = false;
      this.submitisActiveTwo = true;
    }

  },
  props:{
    taskInfor:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
  }
  
}
</script>

<style scoped lang="scss">
  .official-document{
    background-color: #fff;
    height:150px;
    border-radius:5px;
    margin:15px 5px;
    position:relative;
    .head{
      .name{
        width:54px;
        height:22px;
        border-radius:5px;
        line-height:22px;
        text-align:center;
        position:absolute;
        top:15px;
        left:10px;
      }
      .period{
        width:54px;
        height:22px;
        border-radius:5px;
        line-height:22px;
        text-align:center;
        position:absolute;
        top:15px;
        left:80px;
      }
      .product{
        width:53px;
        height:22px;
        line-height:22px;
        background-color: #FFE8AC;
        border-radius:5px;
        text-align:center;
        position:absolute;
        top:15px;
        left:155px;
      }
      img{
        width:17px;
        height:16px;
        position:absolute;
        top:20px;
        left:250px;
      }
      .respond{
        position:absolute;
        top:20px;
        left:270px;
      }
      .state{
        width:54px;
        height:22px;
        border-radius:5px;
        line-height:22px;
        text-align:center;
        position:absolute;
        top:16px;
        left:296px;
      }

    }
    .center{
      display:inline-block;
      margin:5px;
      position:absolute;
      top:48px;
      left:6px;
    }
    .footer{
      img{
        width:16px;
        height:16px;
        margin:5px;
        position:absolute;
        bottom:17px;
        left:6px;
      }
      .time{
        position:absolute;
        bottom:23px;
        left:11px;
      }
      .submit-homework{
        position:absolute;
        bottom:23px;
        left:303px;
        font-size:11px;
      }
    }
    .nameactiveOne{
      background-color: #E1EFB7;
    }
    .nameactiveTwo{
      background-color: #CDE2F5;
    }
    .nameactiveThree{
      background-color: #FFD8DF;
    }
    .periodactiveOne{
      border:1px solid #E1EFB7;
    }
    .periodactiveTwo{
      border:1px solid #CDE2F5;
    }
    .periodactiveThree{
      border:1px solid #FFD8DF;
    }
    .stateactiveOne{
      color:white;
      background-color: #FFBD2E;
      border:1px solid #FFBD2E;
    }
    .stateactiveTwo{
      border:1px solid lightgray;
      color:#8B8B8B;
    }
    .submitactiveOne{
      color:#FFBD2E
    }
    .submitactiveTwo{
      color:#8B8B8B;
    }

  }
</style>