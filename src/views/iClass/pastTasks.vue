<template>
  <div class="past-task">
    <HeadTop head-title="往期任务" go-back="true"></HeadTop>
      <div class="period">
        <van-cell  is-link @click="show=true" style="text-align:center">
             {{message}}
        </van-cell> 
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      </div>
      <past-task-detail :taskInfor="officialprotoTypePicture"></past-task-detail>
      <past-task-detail :taskInfor="officialbrainPicture"></past-task-detail>
      <past-task-detail :taskInfor="officialprd"></past-task-detail>
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head"
import pastTaskDetail from "@/components/iClass/pastTaskDetail"
export default {
  name:"pastTasks",
  data(){
    return{
      currentIndex:0,
      navTitle:["本周任务","官方文档","统计"],
      show: false,
      message:"第一期 活动列表模块",
      //模拟接口数据
      actions: [{ name: '第一期 活动列表模块' }, { name: '第二期 活动详情模块' },{ name: '第三期 评论列表模块' },{ name: '第四期 活动列表模块' },{ name: '第五期 活动列表模块' },{ name: '第六期 活动列表模块' },{ name: '第七期 活动列表模块' },{ name: '第八期 活动列表模块' }],
      protoTypePicture:{name:"原型图",period:"第一期",respond:1,state:"进行中",time:"周三  （12-3  9:00）",submitState:"交作业"},
      brainPicture:{name:"脑图",period:"第二期",respond:5,state:"未开始",time:"周三  （12-3  9:00）",submitState:"已交"},
      prd:{name:"prd",period:"第三期",respond:5,state:"进行中 ",time:"周三   （12-3  9:00）",submitState:"已交"},
      officialprotoTypePicture:{name:"原型图",period:"第一期",respond:1,state:"进行中",time:"2010 / 12 / 03  10: 00 : 00",submitState:"交作业"},
      officialbrainPicture:{name:"脑图",period:"第二期",respond:5,state:"未开始",time:"2010 / 12 / 03  10: 00 : 00",submitState:"已交"},
      officialprd:{name:"prd",period:"第三期",respond:5,state:"进行中 ",time:"2010 / 12 / 03  10: 00 : 00",submitState:"已交"},
    }
  },
  components:{
    HeadTop,
    pastTaskDetail,
  },
  methods:{
    handelTabControl(index){
      this.currentIndex = index;
      //子组件向父组件传值，通过事件传值
      this.$emit("tabClick",index);
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
.past-task{
  width:375px;
  background-color: #F7F7F7;
  .period{
    width:360px;
    margin:5px;
    text-align:center;
    border-radius:5px;
  }

}

</style>