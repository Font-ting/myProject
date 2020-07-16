import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Index from '../views/Index.vue'
import login from '../views/login/login'
import bindMobile from '../views/login/bindMobile'
import yuePublish from '../views/yue/publish/publish'

//新引入的活动详情页面组件
import detail from '../views/yue/publish/detail'

//新引入的活动地址页面组件
import activityAddress from '../views/yue/publish/activityAddress'

//新引入的活动时间页面组件
import activityTime from '../views/yue/publish/activityTime'
//新引入的其它 页面组件
import other from '../views/yue/publish/other'

//新引入的活动人数页面组件
import activityPeople from '../views/yue/publish/activityPeople'

// 推电影的页面
import movieList from '../views/movie/List'

// 推电影的页面
import movieDetail from '../views/movie/MovieDetail'

// 评论的页面
import Comment from '../views/movie/Comment'

// 评价的页面
import MovieEvaluate from '../views/movie/MovieEvaluate'

//iClass项目
import iClassLogin from '../views/iClass/iClassLogin'
import bindPhone from '../views/iClass/bindPhone'
import changePhone from '../views/iClass/changePhone'
import contactServer from '../views/iClass/contactServer'
import iClassHome from '../views/iClass/iClassHome'
import onlinePractice from '../views/iClass/onlinePractice'
import officialDocumentDetail from '../views/iClass/officialDocumentDetail'
import weekTaskDetail from '../views/iClass/weekTaskDetail'
import pastTasks from '../views/iClass/pastTasks'

//路由模块
Vue.use(VueRouter)

import { Popup } from 'vant'
Vue.use(Popup)

import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);

import { List } from 'vant';
Vue.use(List);

import { ActionSheet } from 'vant';
Vue.use(ActionSheet);


import { Uploader } from 'vant';
Vue.use(Uploader);


import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

import { RadioGroup, Radio } from 'vant';
Vue.use(Radio);
Vue.use(RadioGroup);

// 自动获取地址
import { AddressEdit } from 'vant';
Vue.use(AddressEdit);

import { Area } from 'vant';
Vue.use(Area);
// 时间组件
import { DatetimePicker } from 'vant';
Vue.use(DatetimePicker);

// loading页面
import { Loading } from 'vant';
Vue.use(Loading);


// //ShareSheet 分享面板
// import { ShareSheet } from 'vant';
// Vue.use(ShareSheet);

const routes = [
  {
    //顶层路由，对应index.html
    path: '/', 
    component: App, 
    //二级路由。对应App.vue
     children:[ 
      //特殊路由放前面
      {
        path: '', 
        redirect: '/index'
      },
      {
        path: '/index', 
        component: Index,
        meta: { title:"在线实习" } 
      },
      {
        path: '/u/login',
        component: login, 
        meta: { title:"登录" } 
      },
      {
        path: '/u/bindMobile',
        component: bindMobile,
        meta: { title:"绑定手机" } 
      },
      {
        path: '/yue/publish',
        component: yuePublish,
        meta: { title:"发布活动" },
      },
      {
        path:"/yue/publish/detail",
        component:detail,
        meta:{title:"活动详情"}
      },
      {
        path:"/yue/publish/address",
        component:activityAddress,
        meta:{title:"活动地址"}
      },
      {
        path:"/yue/publish/time",
        component:activityTime,
        meta:{title:"活动时间"}
      },
      {
        path:"/yue/publish/join",
        component:activityPeople,
        meta:{title:"活动人数"}
      },
      {
      path:"/yue/publish/other",
      component:other,
      meta:{title:"活动人数"}
      },
      {
        path:"/movie/list",
        component:movieList,
        meta:{title:"电影列表"}
      },
      {
        path:"/movie/list/detail",
        component:movieDetail,
        meta:{title:"电影列表"}
      },
      {
        path:"/movie/list/detail/comment",
        component:Comment,
        meta:{title:"评论"}
      },
      {
        path:"/movie/list/detail/evaluate",
        component:MovieEvaluate,
        meta:{title:"评论"}
      },
      {
        path:"/iClass/iClassLogin",
        component:iClassLogin,
        meta:{title:""}
      },
      {
        path:"/iClass/iClassLogin/bindPhone",
        component:bindPhone,
        meta:{title:"完善信息"}
      },
      {
        path:"/iClass/iClassLogin/bindPhone/changePhone",
        component:changePhone,
        meta:{title:"换绑手机"}
      },
      {
        path:"/iClass/iClassLogin/bindPhone/changePhone/contactServer",
        component:contactServer,
        meta:{title:"联系客服"}
      },
      {
        path:"/iClass/home",
        component:iClassHome,
        meta:{title:""}
      },
      {
        path:"/iClass/practice",
        component:onlinePractice,
        meta:{title:"在线实习"}
      },
      {
        path:"/iClass/document",
        component:officialDocumentDetail,
        meta:{title:"官方文档"}
      },
      {
        path:"/iClass/taskdetail",
        component:weekTaskDetail,
        meta:{title:"任务详情"}
      },
      {
        path:"/iClass/past",
        component:pastTasks,
        meta:{title:"往期任务"}
      },
    ]
  }
]

//创建路由实例

const router = new VueRouter({
  // model history代表路由不再显示hash
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:"进行重新命名"
  
})
export default router
