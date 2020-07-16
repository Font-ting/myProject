<template>
  <div class="official-document-detail">
    <HeadTop head-title="任务详情" go-back="true" ></HeadTop>
    <div class="title">
      产品 / 脑图
    </div>
    <div class="content">
      <div class="period">第一期</div>
      <div class="product-list">电影列表模块</div>
      <div class="text">
        第一期脑图文档第一期脑图文档
        第一期脑图文档第一期脑图文档
        第一期脑图文档第一期脑图文档
        第一期脑图文档第一期脑图文档
        第一期脑图文档第一期脑图文档
        第一期脑图文档第一期脑图文档
        第一期脑图文档
      </div>
      <a class="a-top" href="#"><img src="../../assets/iClass/practiceSlice/iclassPracticeslices/link.png" alt="">http：nreuoferueruouor</a>
      <a class="a-bottom" href="#"><img src="../../assets/iClass/practiceSlice/iclassPracticeslices/link.png" alt="">http：nreuoferueruouorcweferfe</a>
    </div>
    <div class="dead-line">
      <div class="time">截止时间 下周一 （12-3 9：00）</div>
      <div class="notice">微信提醒</div>
      <div class="switch">
         <van-switch active-color="#FF9400" inactive-color="#BFBFBF"  v-model="checked" size="15px" />
      </div>
      <div class="upload" v-if="isShow">
        <van-uploader>
          <img src="../../assets/iClass/practiceSlice/iclassPracticeslices/uploadfile.png" alt="">
          <div class="file" icon="plus" type="primary">上传文件</div>
          <div class="text">多个文件请压缩成单个文件上传</div>
        </van-uploader>
      </div>
      <div class="upload" v-else>
        <van-uploader :after-read="afterRead" v-model="fileList" max-count="2">
          <img src="../../assets/iClass/practiceSlice/iclassPracticeslices/uploaded.png" alt="">
          <div class="file" icon="plus" type="primary">已上传</div>
        </van-uploader>
      </div>
      <textarea class="homework" placeholder="作业补充说明（可空）"></textarea>
      <button class="submit">提交</button>
      <div class="homework-detail">
        <div class="submited">作业已提交</div>
        <div class="resubmit">重新提交</div>
        <img src="../../assets/iClass/practiceSlice/iclassPracticeslices/homework.png" alt="">
        <div class="homeworktitle"> 作业122222222222222222222</div>
        <div class="time">提交时间 2010-12-03 10：00：00</div>
        <div class="text">第一期的脑图文档第一期的脑图问单反第一期的脑图文档第一期的脑图问单反第一期的脑图文档第一期的脑图问单反第一期的脑图文档第一期的脑图问单反第一期的脑图文档第一期的脑图问单反vv</div>
      </div>
      <div class="teacher-advice">
        <div class="submited">导师意见</div>
        <div class="time">2010-12-03 10：00：00</div>
        <div class="content"></div>
        <div class="text">第一期的脑图文档第一期的脑图问单反第一期的脑图文档第一期的脑图问单反第一期的脑图文档第一期的脑图问单反第一期的脑图文档第一期的脑图问单反第一期的脑图文档第一期的脑图问单反vv</div>
      </div>
      <div class="footer">暂时不支持回复讨论，有问题在群里联系</div>
    </div>
  </div>

</template>

<script>
import HeadTop from "@/components/header/Head"
export default {
  name:"weekTaskDetail",
  data(){
    return{
        checked: true,
        isShow:true,
    }
  },
  methods:{
  },
  components:{
    HeadTop,
  },

}
</script>

<style scoped lang="scss">
  .official-document-detail{
    width:375px;
    background-color: #F7F7F7;
  }
  .title{
    width:70px;
    height:13px;
    font-size:13px;
    font-family:PingFang SC;
    color:rgba(31,130,255,1);
    line-height:13px;
    margin-top:20px;
    margin-left:12px;
    margin-bottom:20px;
  }
  .content{
    width:351px;
    height:190px;
    background-color: #fff;
    box-shadow:0px 0px 8px 1px rgba(113,114,115,0.15);
    border-radius:10px;
    margin-left:12px;
    margin-right:10px;
    position:relative;
    .period{
        width:53px;
        height:22px;
        line-height:22px;
        font-family:PingFang SC;
        background-color: #FFE8AC;
        border-radius:5px;
        text-align:center;
        position:absolute;
        top:15px;
        left:15px;
    }
    .product-list{
      width:90px;
      height:12.5px;
      font-size:13px;
      font-family:PingFang SC;
      font-weight:500;
      // 调整字间距
      letter-spacing:2px;
      color:rgba(78,78,78,1);
      line-height:12.5px;
      position:absolute;
      top:20px;
      left:80px;
    }
    .text{
      width:322px;
      height:56px;
      font-size:12px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(78,78,78,1);
      position:absolute;
      top:55px;
      left:16px;
    }
    .a-top{
      position:absolute;
      top:140px;
      left:15px;
      color:#FF9700;
      img{
        width:12px;
        height:12px;
        margin-right:5px;
      }

    }
    .a-bottom{
      position:absolute;
      top:160px;
      left:15px;
      color:#FF9700;
      img{
        width:12px;
        height:12px;
        margin-right:5px;
      }

    }

  }
  .dead-line{
    width:351px;
    height:60px;
    background-color: #fff;
    box-shadow:0px 0px 8px 1px rgba(113,114,115,0.15);
    border-radius:10px;
    margin-top:20px;
    margin-left:12px;
    margin-right:10px;
    position:relative;
    .time{
      font-size:13px;
      position:absolute;
      left:10px;
      top:25px;
    }
    .notice{
      font-size:13px;
      position:absolute;
      left:234px;
      top:25px;
    }
    .switch{
      position:absolute;
      left:300px;
      top:25px;
    }
    .upload{
      width:351px;
      height:251px;
      background-color: #fff;
      box-shadow:0px 0px 8px 1px rgba(113,114,115,0.15);
      border-radius:10px;
      position:absolute;
      top:79px;
      left:1px;
      .file{
        margin-left:10px;
        width:100px;
        height:40px;
        background-color: #FF9700;
        border-radius:5px;
        line-height: 40px;
        text-align:center;
        padding-left:5px;
        font-size:11px;
        color:#FFFFFF;
      }
      img{
        padding-left:5px;
        width:17px;
        height:15px;
        position: relative;
        top:31px;
        left:11px;
      }
      .text{
        width:160px;
        height:17px;
        font-size:11px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(90,90,90,1);
        line-height:22.5px;
        position:relative;
        top:-31px;
        left:128px;
      }
    }
    .homework{
      width:321px;
      height:110px;
      border:1px solid rgba(191,191,191,1);
      border-radius:5px;
      position:relative;
      top:156px;
      left:13px;
      text-align: center;
      line-height:50px;
    }
    .submit{
      width:74px;
      height:21px;
      background-color: #FF9700;
      border-radius:10px;
      position:relative;
      top:178px;
      left:258px;
      color:#fff;
    }
    .homework-detail{
      width:351px;
      height:214px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 4px 1px rgba(113,114,115,0.15);
      border-radius:10px;
      position:relative;
      top:215px;
      left:2px;
      .submited{
        width:68px;
        height:13px;
        font-size:13px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(90,90,90,1);
        line-height:13px;
        position:relative;
        top:17px;
        left:19px;
      }
      .resubmit{
        position:relative;
        top:2px;
        left:270px;
        color:#1F82FF;
      }
      img{
        width:66px;
        height:66px;
        position:relative;
        top:5px;
        left:19px;
      }
      .homeworktitle{
        width:170px;
        height:12px;
        font-size:13px;
        font-family:PingFang SC;
        color:rgba(90,90,90,1);
        line-height:12px;
        position:relative;
        top:-48px;
        left:101px;
      }
      .time{
        position:relative;
        top:-38px;
        left:101px;
      }
      .text{
        width:308px;
        height:57px;
        font-size:12px;
        font-family:PingFang SC;
        color:rgba(78,78,78,1);
        line-height:22px;
        margin-left:25px;
        margin-top:-15px;
      }
    }
    .teacher-advice{
      width:351px;
      height:250px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 4px 1px rgba(113,114,115,0.15);
      border-radius:10px;
      position:relative;
      top:227px;
      left:2px;
      .submited{
        width:68px;
        height:13px;
        font-size:13px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(90,90,90,1);
        line-height:13px;
        position:relative;
        top:10px;
        left:19px;
      }
      .time{
        position:relative;
        top:-6px;
        left:101px;
      }
      .content{
        width:324px;
        height:108px;
        background:rgba(238,238,238,1);
        border-radius:5px;
      }
      .text{
        width:308px;
        height:57px;
        font-size:12px;
        font-family:PingFang SC;
        color:rgba(78,78,78,1);
        line-height:22px;
        margin-left:23px;
        margin-top:7px;
      }
    }
    .footer{
        position:relative;
        top:243px;
        left:55px;
        padding-bottom:30px;
        font-size:13px;
        font-family:PingFang SC;
        color:rgba(90,90,90,1);
        line-height:60px;

    }

  }
  

</style>