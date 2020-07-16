<template>
    <div id="whole-page">
        <HeadTop head-title="其它" go-back="true" ></HeadTop>
        <div id="wrapper">

            <div class="activity-section">
                <div class="title1">
                  活动说明
                </div>
                <span class="word-counter">{{val.length}}/{{this.maxLength}}</span>
                <div class="main1">
                  <textarea style = "resize: none"  class="activity-advantage" v-model="val" maxlength="300" name="" id="" cols="30" rows="10" placeholder="请填写便于审核的活动解释，限150字。">
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
    export default {
        name: "detail",
        created(){
            if(window.sessionStorage.getItem("activityDescription")!=null){
                this.val = window.sessionStorage.getItem("activityDescription");//活动说明
            }
        },
        data(){
            return{
                passwordClass: "icon-input-show",
                val:"",
                maxLength:150,
            }
        },
        computed:{
          remainCounter(){
            return this.maxLength-this.val.length;
          }
        },
        components:{
            HeadTop
        },
        methods:{
            //提交登录
          async save (){
                 await this.$http.get('/yue/activity/info/submit/ajax/init',
                    this.$qs.stringify({ }),
                    )
                    .then(res => {
                        console.log(res);
                    }).catch(res=> {
                        console.log(res);
                    });
                    window.sessionStorage.setItem("activityDescription",this.val);//开始时间
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
            // border-radius: 20px;
            padding-top: 1px;
            .activity-advantage{
                width:333px;
                height:228.5px;
            }
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
        }
</style>