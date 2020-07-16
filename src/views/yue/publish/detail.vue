<template>
    <div id="whole-page">
        <HeadTop head-title="活动详情" go-back="true" ></HeadTop>
        <div id="wrapper">

            <div class="activity-section">
                <div class="title1">
                  活动亮点
                </div>
                <span class="word-counter">{{value1.length}}/{{this.maxLength}}</span>
                <div class="main1">
                  <textarea style = "resize: none" class="activity-advantage" v-model="value1" maxlength="300" name="" id="" cols="30" rows="10" placeholder="请填写几句活动亮点，用于分享和推荐活动，限300字。">
                  </textarea>
                </div>
            </div>
             <div class="activity-section">
                <div class="title2">
                  活动内容
                </div>
                <div class="main2">
                  <textarea v-model="messageTextarea" style ="resize: none"  class="activity-content" name="" id="" cols="50" rows="10" placeholder="内容填写请合理回车排版，另外不得输入手机号，网站等额外联系方式。">
                  </textarea>
                </div>
            </div>
             <div class="click-publish">
                <div href="javascript:void(0)" class="account-form-btn js-btn-publish" @click="save">保存</div>
            </div>
        </div>
    </div>
</template>
<script>
    import HeadTop from '@/components/header/Head'
    import { Toast } from 'vant'
    export default {
        name: "detail",
        created(){
            if(window.sessionStorage.getItem("activityContent")!=null){
                this.messageTextarea= window.sessionStorage.getItem("activityContent");
            }
           
            if(window.sessionStorage.getItem("activityAdvantage")!=null){
                this.value1 = window.sessionStorage.getItem("activityAdvantage");
            }
        },
        data(){
            return{
                passwordClass: "icon-input-show",
                value1:"",
                maxLength:300,
                messageTextarea:"",
            }
        },
        computed:{
          remainCounter(){
            return this.maxLength-this.value1.length;
          }
        },
        components:{
            HeadTop
        },
        methods:{
        //提交登录的function
            save (){
                    //1.页面信息的验证，如内容不能为空。输入的信息不能为手机号码和网址
                    var phone = /[1][3,4,5,7,8][0-9]{9}/;
                    if(this.messageTextarea.length ==0||phone.test(this.messageTextarea) == true||this.messageTextarea.includes("http://")){
                        Toast("活动内容不能为空,并且不能输入手机号码和网址");
                    }
                    //保存活动亮点和活动内容
                    window.sessionStorage.setItem("activityAdvantage",this.value1);
                    window.sessionStorage.setItem("activityContent",this.messageTextarea);
                    //提交完数据之后再回退一个
                    history.back();

            },
        }
    }
</script>
<style lang="scss" scoped>
    #while-page{
        padding:0;
        margin:0;
        width:375px;
        height:800px;
    }
    #wrapper{
        width:375px;
        height: 756px;
    }
    .activity-section{
        width:375px;
        height: 320px;
        .title1{
            width:68px;
            height:24px;
            font-size:17px;
            font-weight:600;
            line-height:24px;
            margin: 0px 286px -8px 21px;
        }
        .word-counter{
            width:35px;
            height:19px;
            font-size:13px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(0,0,0,1);
            line-height:19px;
            margin: 0px 318px 10px 318px;

        }
        .main1{
            width:333px;
            height:228.5px;
            margin: 0px 21px 0px 21px;
            background-color:white;
            border-radius: 5px;
            padding-top: 1px;
            .activity-advantage{
                width:333px;
                height:228.5px;
            }
        }
        .title2{
            width:68px;
            height:24px;
            font-size:17px;
            font-weight:600;
            line-height:24px;
            margin: -20px 286px 10px 21px;
        }
        .main2{
            width:333px;
            height:228.5px;
            margin: 10px 21px 10px 21px;
            background-color:white;
            border-radius: 5px;
            padding-top: 1px;
        }
    }
    //这里的样式不属于.activity-section里面，必须要放在外面
        .click-publish{
            width:100px;
            height:33px;
            background:rgba(250,194,81,1);
            box-shadow:0px 5px 11px 0px rgba(75,75,75,0.2);
            border-radius:40px;
            margin:0px 21px 28px 254px;
        }
        .js-btn-publish{
            height:20px;
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:32px;
            text-align: center;
            margin:5px 35px;
        }
</style>