<template>
    <div id="whole-page">
        <HeadTop head-title="活动地址" go-back="true" ></HeadTop>
        <div id="wrapper">
            <div class="activity-section">
              <div class="main1">
                    <div class="row">
                        <van-cell class="name">
                            形式
                        <div class="choose">
                            <van-radio-group v-model="radio" direction="horizontal" class="check-radio">
                              <van-radio name="2" icon-size="14px" checked-color="rgba(250,194,81,1)" @click="showAddress">线下活动</van-radio>
                              <van-radio name="1" icon-size="14px" checked-color="rgba(250,194,81,1)" @click="displayAddress">线上活动</van-radio>
                            </van-radio-group>
                        </div>
                        </van-cell> 
                    </div>
                    <!-- 地址栏的代码，利用vant里面的Area省市区选择业务组件其中confirm点击选择后的触发的函数 -->
                    <div v-if="isShowAddress" class="row">
                        <van-cell is-link class="name" @click="showPopup">地址
                             <div id="pleasechoose" class="choose" v-bind:class="[isActive?                      
                            'active1':'active2']">{{message}}</div>
                        </van-cell>
                        <van-action-sheet :id="addressid" v-model="show" :actions="actions" cancel-text="取消
                        " @cancel="onCancel" @select="onSelect"/>
                    </div>
                    <div class="row">
                        <van-cell class="name" is-link>详细地址或说明                      
                        </van-cell>
                        <textarea v-model="activityAddressCount" style ="resize: none"  class="activity-address" name="" id="" cols="30" rows="10" placeholder="线下请标明详情地点，线上请说明具体地址分布">
                        </textarea>
                    </div>
                </div>
            </div>
            <div class="click-publish">
                 <!-- <router-link  href="javascript:void(0)" class="account-form-btn js-btn-publish" @click="save" to='/yue/publish'>保存</router-link> -->
                 <div href="javascript:void(0)" class="account-form-btn js-btn-publish" @click="save">保存</div>
            </div>
        </div>
    </div>
</template>
<script>
    import HeadTop from '@/components/header/Head'
    import { Toast } from 'vant'
    // import router from './router'
    export default {
        name: "activityAddress",
        created (){
                if(this.radio==1 && window.sessionStorage.getItem("addressMode")!=null){
                    this.isShowAddress = false;
                    this.radio = window.sessionStorage.getItem("addressMode");//活动模式
                    this.activityAddressCount= window.sessionStorage.getItem("address");//活动地址详情
                }
                else if(this.radio==2 && window.sessionStorage.getItem("addressMode")!=null && window.sessionStorage.getItem("address")!=null){
                    this.radio = window.sessionStorage.getItem("addressMode");//活动模式
                    this.activityAddressCount = window.sessionStorage.getItem("address");//活动地址详情
                    this.message = window.sessionStorage.getItem("addressCity");//地址城市
                    this.addressid = window.sessionStorage.getItem("cityId");//地址城市id
                }
        },
        data(){
            return{
                passwordClass: "icon-input-show",
                val:"",
                maxLength:300,
                radio:"2",
                show:false,
                message:"请选择",
                addressid:"",
                isActive:false,
                isShowAddress:true,
                activityAddressCount:"",
                actions: [],
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
                if(this.activityAddressCount.length==0||this.activityAddressCount.length>100){
                    Toast("活动具体详细地址字数为1-100");
                }
                if(this.radio==1){
                     this.isShowAddress = false;
                     window.sessionStorage.setItem("addressMode",this.radio);//活动模式
                     window.sessionStorage.setItem("address",this.activityAddressCount);//活动地址详情
                }
                else if(this.radio==2){
                    window.sessionStorage.setItem("addressMode",this.radio);//活动模式
                    window.sessionStorage.setItem("address",this.activityAddressCount);//活动地址详情
                    window.sessionStorage.setItem("addressCity",this.message);//地址城市
                     window.sessionStorage.setItem("cityId",this.addressid);//活动地址id
                 
                }
                history.back();

            },
            showPopup (){
                this.$http.get("/yue/activity/info/submit/ajax/init").then(result => {
                  var dataMessage = result.data.data.cityList;
                   for(var i=0;i<dataMessage.length;i++){
                        if(this.actions.length<dataMessage.length){
                            this.actions.push(
                            {
                                name:dataMessage[i].name,
                                id:dataMessage[i].id,
                                color:"orange",
                            }
                        );
                                
                    }

                }
                  
               })
                this.show = true;
            },
            showAddress (){
                this.isShowAddress = true;
            },
            displayAddress (){
                this.isShowAddress = false;
            },
            onSelect (item){
                // 默认情况下点击选项时不会自动收起
               // 可以通过 close-on-click-action 属性开启自动收起
                this.show = false;
                console.log(item);
                this.message = item.name;
                this.addressid = item.id;
                this.isActive = true;
                console.log(this.isActive);
                // 在页面上显示出信息
                // Toast(item.name);

            },
            onCancel (){
                console.log("点击取消了")
                this.show = false;
                this.message = "请选择";
                this.isActive = false;
                //在页面上显示cancel
                Toast("cancel")
            }
            
        }
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
                    // color: #B2B2B2;
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
            margin:5px 35px;
        } 
</style>