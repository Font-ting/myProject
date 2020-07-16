<template>
  <div id="bind-phone">
    <HeadTop head-title="完善信息" go-back="true"></HeadTop>
    <div class="bind-phone-content">
      <p class="phone">绑定手机号</p>
      <div class="phone-infor">
        <input class="input-phone" type="text" value="+86" v-model="phone" placeholder="请输入手机号" @blur="handelPhone"> 

        <input class="input-verify-code" type="text" placeholder="请输入图中验证码">
        <div class="picture-verify-code">{{codeImg}}</div>

        <input class="input-phone-verify-code" type="text" placeholder="请输入手机验证码">
        <div class="phone-verify-code">
          <span v-show="show" @click="getCode" class="coder">获取验证码</span>
          <span v-show="!show" class="count">{{count}}s后重试</span>
        </div>
        <div class="click-submit">
          <div class="submit" @click="submit">提交</div>
        </div>
        <router-link to="/iClass/iClassLogin/bindPhone/changePhone" class="chang-phone">手机号变更</router-link>

      </div>
    </div>
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head";
import { Toast } from 'vant';
export default {
  name:"bindPhone",
  data (){
    return{
      phone:null,
      show: true,
      count: '',
      timer: null,
      codeImg:"",
    }
  },
  components: {
    HeadTop
  },
  methods:{
    handelPhone(event){
      var mobliePhone = /[1][3,4,5,7,8][0-9]{9}/;
      if(!mobliePhone.test(event.target.value)){
        Toast("请输入正确的手机号码")
      }
    },
    //手机验证码的获取
    getCode(){
     const TIME_COUNT = 60;
     if (!this.timer) {
       this.count = TIME_COUNT;
       this.show = false;
       this.timer = setInterval(() => {
       if (this.count > 0 && this.count <= TIME_COUNT) {
         this.count--;
        } else {
         this.show = true;
         clearInterval(this.timer);
         this.timer = null;
        }
       }, 1000)
      }
    },
    submit (){
      this.$router.push("/iClass/home")
    }  
  }
}
</script>

<style scoped lang="scss">
#bind-phone{
  width:375px;
  height:800px;
  background-color: #fff;
  .bind-phone-content{
    width:305px;
    margin-top:50px;
    margin-left:34px;
    margin-right:34px;
    .phone{
      width:115px;
      height:40px;
      font-size:23px;
      font-family:PingFang SC;
      color:rgba(57,57,57,1);
      line-height:40px;
      margin-left:92px;
      margin-bottom:80px;
    }
    .phone-infor{
       width:305px;
       height:200px;
       .input-phone{
         width:305px;
         height:40px;
         border: 1px solid lightgray;
         margin-bottom:20px;
         padding-left:10px;
       }
       .input-verify-code{
         width:181px;
         height:40px;
         border: 1px solid lightgray;
         margin-bottom:20px;
         padding-left:10px;
       }
       .picture-verify-code{
         width:105px;
         height:40px;
         border: 1px solid lightgray;
         margin-left:200px;
         margin-top:-61px;
         line-height:40px;
         text-align:center;
       }
       .input-phone-verify-code{
         width:181px;
         height:40px;
         border: 1px solid lightgray;
         margin-top:20px;
         padding-left:10px;
       }
       .phone-verify-code{
         width:105px;
         height:40px;
         margin-left:200px;
         margin-top:-41px;
         text-align:center;
         line-height:40px;
         .coder{
          display:inline-block;
          width:105px;
          height:40px;
          font-size:15px;
          border-radius:20px;
          color:orange;
          border:1px solid orange;
         }

       }
       
    }

  }
    .click-submit{
      width:333px;
      height:40px;
      background:rgba(250,194,81,1);
      border-radius:10px;
      margin:60px 0px 0px -11px;
    .submit{
        width:35px;
        height:21px;
        font-size:15px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:38px;
        margin:9.5px 149px;
        }
    }
    .chang-phone{
      display:inline-block;
      width:375px;
      font-size:13px;
      color:orange;
      margin-top:15px;
      margin-left:253px;


    }
}

</style>