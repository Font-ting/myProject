<template>
    <div id="whole-page">
        <HeadTop head-title="发布活动" go-back="true" ></HeadTop>
        <div id="wrapper">
            <div class="activity-section">
                <div class="title1">
                    活动信息
                </div>
                <div class="main1">
                    <div class="row">
                        <van-cell class="name" is-link @click="showPopup">
                            活动分类
                            <div id="pleasechoose" class="choose" v-bind:class="[isActive1?                      
                            'active1':'active2']">{{message}}</div>
                        </van-cell> 
                        
                        <van-action-sheet style="color:red" :id="selectionid" v-model="show" ref="mybox" :actions="actions" cancel-text="取消
                        " @cancel="onCancel" @select="onSelect"/>
                    </div>

                    <div class="row">
                        <van-cell class="name">活动标题
                            <!-- 活动标题5-20字 -->
                        <input class="choose" v-bind:class="[isActive8?'active1':'active2']" type="text" placeholder="请输入活动标题"  style="width:100px" @keyup="confirmActivityTitle" v-model="activitytitle">
                        </van-cell>
                     </div>
                    <div class="row">
                        <van-cell class="name" is-link>活动详情
                        <router-link class="choose" v-bind:class="[isActive2?'active1':'active2']"  to='/yue/publish/detail'>{{activitydetail}}</router-link>
                        </van-cell>
                    </div>
                    <div class="row">
                        <van-cell class="name" is-link @click="handleUploadImage">活动照片(可选)
                            <div class="choose" v-bind:class="[isActive3?'active1':'active2']">{{uploaded}}</div>
                            <!-- 图片上传采用vant-uploader -->
                            <div class="picture" v-if="isShow">
                                <van-uploader v-model="fileList" multiple :max-count="3" preview-size="40px" :preview-image="true"/>
                            </div> 
                        </van-cell>
                    </div>

                </div>
            </div>
            <div class="activity-section">
                <div class="title2">
                    活动设置
                </div>
                <div class="main2">
                    <div class="row">
                        <van-cell class="name" is-link>活动地址
                        <!-- 活动地址的路由跳转 -->
                        <router-link  class="choose" v-bind:class="[isActive4?'active1':'active2']" to='/yue/publish/address'>{{activityaddress}}</router-link>
                        </van-cell>
                    </div>
                    <div class="row">
                        <van-cell class="name" is-link>活动时间
                         <router-link  class="choose" v-bind:class="[isActive5?'active1':'active2']" to='/yue/publish/time'>{{activitytime}}</router-link>
                        </van-cell>
                    </div>
                    <div class="row">
                        <van-cell class="name" is-link>活动人数
                        <router-link  class="choose" v-bind:class="[isActive6?'active1':'active2']" to='/yue/publish/join'>{{activitypeople}}</router-link>
                        </van-cell>
                    </div>
                    <div class="row">
                        <van-cell class="name">其它说明（选填）
                        <router-link  class="choose" v-bind:class="[isActive7?'active1':'active2']" to='/yue/publish/other'>{{otherexplanation}}</router-link>
                        </van-cell>
                    </div>
                </div>
            </div>
            <div class="click-publish">
                    <div href="javascript:void(0)" class="account-form-btn js-btn-publish" @click="submit">发布</div>
            </div>
        </div>
    </div>
</template>
<script>
    import HeadTop from '@/components/header/Head'
    import { Toast } from 'vant'
    export default {
        name: "publish",
        created (){
            // 1.活动分类
            var selection = window.sessionStorage.getItem("catagoryName");

            // 1.活动分类的id
            var selectionid = window.sessionStorage.getItem("catagoryId");
            if(selection!=null&&selectionid!=null){
                //选中之后变成黄色
                this.isActive1 = true;
                this.message = selection;
            }

            // 2.活动标题
            var title =  window.sessionStorage.getItem("title");
            if(title!=null){
                this.isActive8 = true;
                this.activitytitle = title;
            }
            else{
                this.isActive8 = false;
            }

            // 3.活动详情
            var advantage = window.sessionStorage.getItem("activityAdvantage");
            var content = window.sessionStorage.getItem("activityContent");
            if(advantage!=null&&content!=null){
               this.isActive2 = true;
               this.activitydetail = "已完善";  
            }

            // 4.活动地址
            if(window.sessionStorage.getItem("addressMode")==2&&window.sessionStorage.getItem("addressCity")!=null&&window.sessionStorage.getItem("address")!=null){
                this.isActive4 = true;
                this.activityaddress = "已完善"
            }
            else if(window.sessionStorage.getItem("addressMode")==1&&window.sessionStorage.getItem("address")!=null){
                this.isActive4 = true;
                this.activityaddress = "已完善"
            }

            // 4.活动时间
            if(window.sessionStorage.getItem("beginTime")!=null&&window.sessionStorage.getItem("endTime")!=null){
                this.isActive5 = true;
                this.activitytime = "已完善"
            }
            // 5.活动人数
            if(window.sessionStorage.getItem("leastJoinNum")!=null&&window.sessionStorage.getItem("mostJoinNum")!=null){
                this.isActive6 = true;
                this.activitypeople = "已完善"
            }else if(window.sessionStorage.getItem("leastJoinNum")==null||window.sessionStorage.getItem("mostJoinNum")==null){
                this.isActive6 = false;
            }

            // 6.其它活动说明
            if(window.sessionStorage.getItem("activityDescription")!=null){
                this.isActive7 = true;
                this.otherexplanation= "已经完善您的其它说明"
            }
            else{
                this.isActive7 = false;
            }
        },
        mounted (){
            this.init();
        },
        data(){
            return{
                name:'',
                password: '',
                message:"请选择",
                selectionid:"",
                activitydetail:"请输入",
                inputType : "password",
                passwordClass: "icon-input-show",
                uploaded:"请上传",
                activitytitle:"",
                activityaddress:"请输入",
                activitytime:"请输入",
                activitypeople:"请输入",
                show:false,
                isActive1:false,
                isActive2:false,
                isActive3:false,
                isActive4:false,
                isActive5:false,
                isActive6:false,
                isActive7:false,
                isActive8:false,
                isShow:false,
                otherexplanation:"输入您的其它说明",
                actions:[],
                fileList: [],
                base64List:[]
            }
        },
        components:{
            HeadTop
        },
        methods:{
            showPopup (){
               // get来发送数据请求，将返回的数据接收
                this.$http.get("/yue/activity/info/submit/ajax/init").then(result => {
                    var dataMessage = result.data.data.catagoryList;
                    for(var i=0;i<dataMessage.length;i++){
                        //注意：需要判断actions里面的数据小于接收到的数据，才push，否则点击一次，push一次数据
                        if(this.actions.length<dataMessage.length){
                            this.actions.push(
                            {
                                id:dataMessage[i].id,
                                name:dataMessage[i].name,
                                callback: this.onClick
                            }
                            );
                        }  
                        
                    }
                  
                })
                    this.show = true;
            },
            init(){
                console.log(this.$refs.children);
                // this.$refs.mybox.style.color = ""
            },
            handleSelected (){
                this.show = true;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            },
            handleUploadImage (){
                this.isShow = true;
                window.sessionStorage.setItem("images",this.fileList);
                if(this.fileList.length>0){
                    this.isActive3 = true;
                    this.uploaded = "已完善"

                }
            },
            onSelect (item){
                // 默认情况下点击选项时不会自动收起
               // 可以通过 close-on-click-action 属性开启自动收起
                this.show = false;
                this.message = item.name;
                this.selectionid = item.id;
                this.isActive1 = true;
                window.sessionStorage.setItem("catagoryName",this.message);
                window.sessionStorage.setItem("catagoryId",this.selectionid);

                // 反向取id
                for(var i=0;i<this.actions.length;i++){
                    if(this.selectionid == this.actions[i].__ob__.value.__ob__.value.id){
                        console.log(this.actions[i].__ob__.value.__ob__.value.id);
                        this.actions[i].__ob__.value.__ob__.value.color = "orange";
                    }
                    else{
                        this.actions[i].__ob__.value.__ob__.value.color = "black";
                    }
                }
            },
            onCancel (){
                console.log("点击取消了")
                this.show = false;
                this.message = "请选择";
                this.isActive1 = false;
                //在页面上显示cancel
                Toast("取消后请重新选择")
                for(var i=0;i<this.actions.length;i++){
                    this.actions[i].__ob__.value.__ob__.value.color = "black";
                }
               
            },
            //活动标题不能少于5-20字
            confirmActivityTitle (){
                if(this.activitytitle.length<5 || this.activitytitle.length>20){
                    Toast("活动标题长度为5-20");
                }
                else{
                    window.sessionStorage.setItem("title",this.activitytitle);
                }
            },
             // 本网页最后：提交发布
            async submit (){
                // 对所有数据进行验证
                // 1.活动分类信息不能为空
                if(this.message=="请选择"){
                    Toast("活动分类不能为空，请选择")
                }else{
                // 2.活动标题范围为5-20字
                    this.confirmActivityTitle();
                }

                // 提交图片的base64编码
                console.log(this.fileList);
                for(var i=0;i<this.fileList.length;i++){
                    this.base64List.push(this.fileList[i].content.replace(/^data:image\/\w+;base64,/, ''));
                }
                console.log(this.base64List);

                //获取图片的base64编码
                // console.log(this.fileList[0].content.replace(/^data:image\/\w+;base64,/, ''));

                // 数据的提交
                 await this.$http.get('/yue/activity/info/submit/ajax/submit',
                    this.$qs.stringify({
                        // //测试接口
                        // // catagoryld:_this.name,
                        // catagoryId:1,
                        // title:
                        // '4454555',
                        // publishUserId:1,
                        // content:"gggg",
                        // images:this.base64List,
                        // cityId:0,
                        // addressMode: window.sessionStorage.getItem("addressMode"),
                        // address:window.sessionStorage.getItem("address"),
                        // beginTime:window.sessionStorage.getItem("beginTime"),
                        // endTime:window.sessionStorage.getItem("endTime"),
                        // leastJoinNum:window.sessionStorage.getItem("leastJoinNum"),
                        // mostJoinNum:window.sessionStorage.getItem("mostJoinNum"),
                        // remark:"约起来项目活动申请",

                        catagoryId:this.selectionid,
                        cityId:window.sessionStorage.getItem("cityId"),
                        title:window.sessionStorage.getItem("title"),
                        publishUserId:1,
                        content:window.sessionStorage.getItem("activityContent"),
                        images:this.base64List,
                        addressMode: window.sessionStorage.getItem("addressMode"),
                        address:window.sessionStorage.getItem("address"),
                        beginTime:window.sessionStorage.getItem("beginTime"),
                        endTime:window.sessionStorage.getItem("endTime"),
                        leastJoinNum:window.sessionStorage.getItem("leastJoinNum"),
                        mostJoinNum:window.sessionStorage.getItem("mostJoinNum"),
                        remark:"约起来吧小伙伴",

                    }),
                    )
                    .then(res => {
                        console.log(res);
                    }).catch(res=> {
                        console.log(res);
                    });
                    Toast("发布成功");
                    history.back();

            },
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
        height: 378px;
        .title1{
            width:68px;
            height:24px;
            font-size:17px;
            font-weight:600;
            line-height:24px;
            margin: 0px 286px 10px 21px;
        }
        .main1{
            width:333px;
            height:228.5px;
            margin: 0px 21px 0px 21px;
            background-color:white;
            border-radius: 5px;
            padding-top: 1px;
            .row{
                width:333px;
                height:57px;
                // line-height:57px;
                font-size: 17px;
                border-bottom: solid #F8F8F8 1px;
                van-cell.name{
                    // margin:0px 0px 10px 0px;
                    height:57px;
                    line-height:50px;
                    color:#2B2B2B;
                    float:left;
                    font-weight: bold;
                }
                .choose{
                    font-size: 13px;
                    float:right;
                }
                .picture{
                    margin:5px 2px
                }
                .choose1{
                    color: #B2B2B2;
                    font-size: 13px;
                    float:right;
                }
            }
        }
        .title2{
            width:68px;
            height:24px;
            font-size:17px;
            font-weight:600;
            line-height:24px;
            margin: -60px 286px 10px 21px;
        }
        .main2{
            width:333px;
            height:228.5px;
            margin: 10px 21px 10px 21px;
            background-color:white;
            border-radius: 5px;
            padding-top: 1px;
        .row{
            width:333px;
            height: 57px;
            font-size: 17px;
            border-bottom: solid #F8F8F8 1px;
            van-cell.name{
                color:#2B2B2B;
                float:left;
                font-weight: bold;
            }
            .choose{
                font-size: 13px;
                // color: #B2B2B2;
                float:right;
            }
            .choose1{
                    color: #B2B2B2;
                    font-size: 13px;
                    float:right;
                }
        }
    }
    }
    .click-publish{
        width:333px;
        height:40px;
        background:rgba(250,194,81,1);
        border-radius:10px;
        margin:-7px 21px 0px 21px;
    .js-btn-publish{
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
</style>