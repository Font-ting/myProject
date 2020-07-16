import Vue from 'vue'
import './plugins/axios'

import App from './App.vue'
import router from './router'

//导入vuex的store对象
import store from './store'

//网络请求
import axios from 'axios'
import qs from 'qs';

//将网络请求axios放到Vue.prototype.$http里面
Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

Vue.prototype.$qs = qs;
//通过$store拿到vuex的store
Vue.prototype.$store = store;

//引入iconfont
import "./style/iconfont.scss"
import "lib-flexible/flexible"

import { Toast } from 'vant'
Vue.use(Toast)

import { Switch } from 'vant'
Vue.use(Switch);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// to:router即将进入的路由对象
// from:当前导航即将离开的路由
// next:Function,进行管道中的一个钩子，如果执行完了，则导航的状态就是 confirmed （确认的）；否则为false，终止导航。
router.beforeEach((to,from,next) => {
  if (to.meta.title) {
    //to就是我们
    document.title = to.meta.title;
  }
  next();
});
