<template>
    <div id="whole-page">
        <HeadTop head-title="活动时间" go-back="true" ></HeadTop>
        <div id="wrapper">
            <div class="activity-section">
              <div class="main1">
                    <div class="row">
                        <van-cell is-link class="name" @click="showPopup1">
                            开始时间
                            <div id="pleasechoose" class="choose" v-bind:class="[isActive1?                      
                            'active1':'active2']">{{message1}}</div>
                        </van-cell> 
                        <van-popup v-model="show1" position="bottom" :style="{ height: '50%' }" >
                              <van-datetime-picker
                              @confirm="confirmPicker1"
                              @cancel = "cancelPicker1"
                              v-model="currentDate"
                              type="datetime"
                              title="年月日"
                              :min-date="minDate"
                              :max-date="maxDate"
                            />
                        </van-popup>
                    </div>
                    <div class="row">
                        <van-cell is-link class="name" @click="showPopup2">
                            结束时间
                            <div id="pleasechoose" class="choose" v-bind:class="[isActive2?                      
                            'active1':'active2']">{{message2}}</div>
                        </van-cell> 
                        <van-popup v-model="show2" position="bottom" :style="{ height: '50%' }">
                              <van-datetime-picker
                              v-model="currentDate"
                              @confirm="confirmPicker2"
                              @cancel = "cancelPicker2"
                              type="datetime"
                              title="具体时间"
                              :min-date="minDate"
                              :max-date="maxDate"
                            />
                        </van-popup>
                        <textarea style ="resize: none"  class="activity-address" name="" id="" cols="30" rows="10" :placeholder="information">
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
        
        name: "activityTime",
        created(){
                if(window.sessionStorage.getItem("beginTime")!=null){
                    this.message1 = window.sessionStorage.getItem("beginTime");//开始时间
                }
                if(window.sessionStorage.getItem("endTime")!=null){
                    this.message2 = window.sessionStorage.getItem("endTime");//结束时间
                }              
        },
        data(){
            return{
                information:"说明:\n 1. 开始时间需要大于发布时间两天",
                passwordClass: "icon-input-show",
                val:"",
                show1:false,
                show2:false,
                message1:"请选择",
                message2:"请选择",
                isActive1:false,
                isActive2:false,
                isShowAddress:true,
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
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
                window.sessionStorage.setItem("beginTime",this.message1);//开始时间
                window.sessionStorage.setItem("endTime",this.message2);//结束时间
                history.back();
            },
            showPopup1 (){
                 this.show1= true;
            },
            showPopup2 (){
                 this.show2= true;
            },           
            confirmPicker1 (value){
                if(value.getDate()-new Date().getDate()<2){
                    Toast("开始时间必须大于发布时间2天，请重新选择开始时间")
                }else{
                    this.message1 = this.timeFormat(value);
                    this.show1 = false;
                    this.isActive1 = true;
                }
            },
            cancelPicker1(){
                this.show1 = false;
            },
            confirmPicker2 (value){
                this.message2 = this.timeFormat(value);
                this.show2 = false;
                this.isActive2 = true;
            },
            cancelPicker2(){
                this.show2 = false;
            },            
            timeFormat (time){ 
                var year = time.getFullYear();
                var month = time.getMonth() + 1;
                var day = time.getDate();
                var hours = time.getHours();
                var minutes = time.getMinutes();
                return year + "-" + month + "-" + day + " " + hours+":"+ minutes;
            }            
        },
    }
</script>
<style lang="scss" scoped>
    .active1{
        color:rgba(250,194,81,1);
    }
    .active2{
        color: rgb(148, 143, 143);
    }
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