<template>
    <div id="whole-page">
        <HeadTop head-title="活动人数" go-back="true" ></HeadTop>
        <div id="wrapper">
            <div class="activity-section">
              <div class="main1">
                    <div class="row">
                        <van-cell  class="name">
                            最小报名人数
                            <input type="text" v-model="peopleInputMin"  class="choose" style="width:40px" placeholder="请输入" @input="handelInputMin"><input>
                        </van-cell> 
                    </div>
                    <div class="row">
                        <van-cell  class="name">
                            最大报名人数
                            <input v-model="peopleInputMax" class="choose"  style="width:40px" placeholder="请输入" :disabled="disabled1"><input>
                        </van-cell> 
                        <textarea v-model="explaintion" style ="resize: none"  class="activity-address" name="" id="" cols="30" rows="10" :placeholder="information">
                        </textarea>
                    </div>
                </div>
            </div>
            <div class="click-publish">
                <!-- <router-link href="javascript:void(0)" class="account-form-btn js-btn-publish" @click="save">保存</router-link> -->
                 <div href="javascript:void(0)" class="account-form-btn js-btn-publish" @click="save">保存</div>
            </div>
        </div>
    </div>
</template>
<script>
    import HeadTop from '@/components/header/Head'
    import { Toast } from 'vant'
    export default {
        name: "activityPeople",
        created(){
            if(window.sessionStorage.getItem("leastJoinNum")!=null&&window.sessionStorage.getItem("mostJoinNum")!=null&&window.sessionStorage.getItem("joinExplation")!=null){
                this.peopleInputMin = window.sessionStorage.getItem("leastJoinNum");// 最小参与人数
                this.peopleInputMax = window.sessionStorage.getItem("mostJoinNum");// 最大参与人数
                this.explaintion = window.sessionStorage.getItem("joinExplation");// 最大参与人数
            }
        },
        data(){
            return{
                information:"说明：\n1.活动到期后，如果最小报名人数不为0，且报名人数小于需要人数，活动自动取消。\n2.若最小报名人数为0，则最大报名人数输入无效 \n3.最大报名人数暂时不能超过500人。",
                passwordClass: "icon-input-show",
                disabled1:false,
                peopleInputMin:"",
                peopleInputMax:"",
                explaintion:""


            }       
        },
        components:{
            HeadTop
        },
        methods:{
            //提交登录
          async save (){
                if(this.peopleInputMax>500){
                    Toast("最大报名人数为500,请重新输入");
                }
                window.sessionStorage.setItem("leastJoinNum",this.peopleInputMin);//最小参与人数
                window.sessionStorage.setItem("mostJoinNum",this.peopleInputMax);//最大参与人数
                window.sessionStorage.setItem("joinExplation",this.explaintion);//人数参与解释
                history.back();
          },
            handelInputMin (event){
                    console.log(event.target.value);
                    //总的判断就行了
                    if(parseInt(event.target.value) === 0){
                       console.log(event.target.value);
                       this.disabled1 = true;
                    }
                    else{
                        this.disabled1 = false;
                    }
            },     
        },
    }
</script>
<style lang="scss" scoped>
    #while-page{
        padding:0;
        margin:0;
        width:375px;
        height:800px;
        background:rgba(248,248,248,1);

    }
    #wrapper{
        width:375px;
        height: 756px;
    }
    .activity-section{
        width:375px;
        height: 340px;
        .main1{
            width:333px;
            height:340px;
            border-radius:10px;
            margin: 10px 21px 40px 21px;
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 8px 5px rgba(68,68,68,0.07);
            .row{
                width:333px;
                height:57px;
                // border-radius:10px;
                font-size: 17px;
                border-bottom: solid #F8F8F8 1px;
                van-cell.name{
                    height:57px;
                    line-height:50px;
                    color:rgba(43,43,43,1);
                    float:left;
                    font-weight: 600;
                }
                .activity-address{
                    width:303.5px;
                    height:150px;
                    border:1px solid rgba(248,248,248,1);
                    margin:12px 15px 31px 15px;
                    font-size:14px;
                }
                .choose{
                    font-size: 13px;
                    color: #B2B2B2;
                    float:right;
                }
            }
            
        }
        .activity-advantage{
            width:333px;
            height:228.5px;
        }
    }  
        //这里的样式不属于.activity-section里面，必须要放在外面
        .click-publish{
            width:100px;
            height:33px;
            background:rgba(250,194,81,1);
            box-shadow:0px 5px 11px 0px rgba(75,75,75,0.2);
            border-radius:40px;
            margin:55px 21px 50px 254px;
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