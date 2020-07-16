<template>
  <div class="online-practice">
    <HeadTop head-title="在线实习" go-back="true"></HeadTop>
    <project-detail></project-detail>
    <div class="tab-control">
      <div class="tab-control-item" v-for="(item,index) in navTitle" :key="index" @click="handelTabControl(index)" :class="{active: currentIndex === index}">
        <span>{{item}}</span>
      </div>
    </div>

    <div v-show="isShow1">
      <div class="notice">
        <p>小拿提醒</p>
        <img src="../../assets/iClass/practiceSlice/backTop.png" alt="">
        <div>周五有大拿老师的直播哟</div>
      </div>
      <week-task :taskInfor="protoTypePicture"></week-task>
      <week-task :taskInfor="brainPicture"></week-task>
      <week-task :taskInfor="prd"></week-task>
      <router-link class="past-projects" to="/iClass/past">查看往期项目</router-link>
    </div>

    <div v-show="isShow2">
      <div class="period">
        <van-cell  is-link @click="show=true" style="text-align:center">
             {{message}}
        </van-cell> 
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      </div>
      <official-document :taskInfor="officialprotoTypePicture"></official-document>
      <official-document :taskInfor="officialbrainPicture"></official-document>
      <official-document :taskInfor="officialprd"></official-document>
    </div>
    
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head"
import projectDetail from "@/components/iClass/projectDetail"
import weekTask from "@/components/iClass/weekTask"
import officialDocument from "@/components/iClass/officialDocument"
export default {
  name:"onlinePractice",
  data(){
    return{
      currentIndex:0,
      navTitle:["本周任务","官方文档","统计"],
      isShow1:true,
      isShow2:false,
      show: false,
      message:"第一期 活动列表模块",
      //模拟接口数据
      actions: [{ name: '第一期 活动列表模块' }, { name: '第二期 活动详情模块' },{ name: '第三期 评论列表模块' },{ name: '第四期 活动列表模块' },{ name: '第五期 活动列表模块' },{ name: '第六期 活动列表模块' },{ name: '第七期 活动列表模块' },{ name: '第八期 活动列表模块' }],
      protoTypePicture:{name:"原型图",period:"第一期",respond:1,state:"进行中",time:"周三  (12-3  9:00)",submitState:"交作业"},
      brainPicture:{name:"脑图",period:"第二期",respond:5,state:"未开始",time:"周三  (12-3  9:00)",submitState:"已交"},
      prd:{name:"prd",period:"第三期",respond:5,state:"进行中 ",time:"周三  (12-3  9:00)",submitState:"已交"},
      officialprotoTypePicture:{name:"原型图",period:"第一期",respond:1,state:"进行中",time:"2010/12/03  10: 00 : 00",submitState:"交作业"},
      officialbrainPicture:{name:"脑图",period:"第二期",respond:5,state:"未开始",time:"2010/12/03  10: 00 : 00",submitState:"已交"},
      officialprd:{name:"prd",period:"第三期",respond:5,state:"进行中 ",time:"2010/12/03  10: 00 : 00",submitState:"已交"},
    }
  },
  components:{
    HeadTop,
    projectDetail,
    weekTask,
    officialDocument

  },
  methods:{
    handelTabControl(index){
      this.currentIndex = index;
      //子组件向父组件传值，通过事件传值
      this.$emit("tabClick",index);
      if(index==0){
        this.isShow2 = false;
        this.isShow1 = true
      }
      else if(index==1){
        this.isShow1 = false;
        this.isShow2 = true
      }
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      this.message = item.name;
    },
  }

}
</script>

<style>
   /* 为了更改vant里面的内部样式 */
  .van-cell__value--alone{
    font-size:15px;
    text-align:center;
  }
</style>

<style scoped lang="scss">
.online-practice{
  width:375px;
  background-color: #F7F7F7;
  .tab-control{
    display:flex;
    text-align: center;
    background-color: #fff;
    margin:8px 5px;
    border-radius:5px;
    height:40px;
    line-height:40px;
    font-size:15px;
    z-index:9;
  }
  .tab-control-item{
    flex:1;
  }
   .tab-control-item span{
    padding-bottom:5px;
   }
   .active span{
    border-bottom:3px solid gray;
   }
   .notice{
    background-color: #fff;
    height:100px;
    border-radius:5px;
    margin:15px 5px;
    position:relative;
      p{
        font-size:14px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(63,63,63,1);
        position:absolute;
        left:10px;
        top:15px;
      }
      img{
        width:18px;
        height:18px;
        position:absolute;
        left:320px;
        top:15px;
      }
      div{
        font-size:13px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(139,139,139,1);
        line-height:40px;
        position:absolute;
        left:10px;
        top:40px;
      }
    }
    .row{
      .period{
        text-align:center;
      }
    }
   .past-projects{
     display: inline-block;
     margin-left:110px;
     width:143px;
     height:45px;
     line-height: 45px;
     font-size:13px;
     text-align:center;
     background-color:#fff;
     border-radius: 5px;
     border:1px solid #F7F7F7;
     box-shadow:0px 0px 8px 1px rgba(113,114,115,0.15);
     margin-bottom:20px;
   }

}

</style>