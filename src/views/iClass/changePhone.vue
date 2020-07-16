<template>
  <div id="change-phone">
    <HeadTop head-title="换绑手机" go-back="true"></HeadTop>
    <div class="bind-phone-content">
      <p class="phone">输入原注册手机号码</p>
      <div class="phone-infor">
       <input class="input-phone" type="text" value="+86" v-model="phone" placeholder="请输入手机号" @blur="handelChangePhone">
      </div>
      <div class="click-submit">
        <div href="javascript:void(0)" class="next">下一步</div>
      </div>
       <router-link to="/iClass/iClassLogin/bindPhone/changePhone/contactServer" class="forget-phone">忘记原手机号</router-link>
    </div>
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head";
import { Toast } from 'vant';
export default {
  name:"changePhone",
  data (){
    return{
      phone:null,
    }
  },
  components: {
    HeadTop
  },
  methods:{
    handelChangePhone(event){
      var mobliePhone = /[1][3,4,5,7,8][0-9]{9}/;
      if(!mobliePhone.test(event.target.value)){
        Toast("请输入正确的手机号码")
      }
    }, 
  }
}
</script>

<style scoped lang="scss">
#change-phone{
  width:375px;
  height:800px;
  background-color: #fff;
  .bind-phone-content{
    width:305px;
    margin-top:107px;
    margin-left:34px;
    margin-right:34px;
    .phone{
      width:345px;
      height:40px;
      font-size:23px;
      font-family:PingFang SC;
      color:rgba(57,57,57,1);
      line-height:40px;
      margin-bottom:40px;
    }
    .phone-infor{
       width:305px;
       height:200px;
       .input-phone{
         width:290px;
         height:40px;
         margin-bottom:20px;
         border: 1px solid lightgray;
         padding-left:10px;
       } 
 
    }

  }
    .click-submit{
      width:333px;
      height:40px;
      background:rgba(250,194,81,1);
      border-radius:10px;
      // margin:-104px 0px 0px -11px;
      margin-top:-94px;
      margin-left:-11px;
      margin-bottom:20px;

    .next{
        width:56px;
        height:21px;
        font-size:15px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:38px;
        margin:9.5px 149px;
        }
    }
    .forget-phone{
      display: inline-block;
      font-size:13px;
      color:orange;
      padding-top:15px;
      margin-left:226px;
    }

}

</style>