/**
 * @Author: 左盐 <zuoyan>
 * @Date:   2017-10-03 21:49:53
 * @Email:  huabinglan@163.com
 * @Project: xxxx
 * @Last modified by:   左盐
 * @Last modified time: 2017-17-03 09:40:59
 */

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import YDUI from 'vue-ydui';
import '../../assets/css/reset.css';
import 'vue-ydui/dist/ydui.rem.css';
import routes from './router.js';
import tools from 'pizzatools';
import siteConfig from './config.js';

import {
  Confirm,
  Alert,
  Toast,
  Notify,
  Loading
} from 'vue-ydui/dist/lib.rem/dialog';

Vue.use(VueRouter);
Vue.use(YDUI);
Vue.prototype.$siteConfig = siteConfig;
Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading
};
Vue.prototype.$tools = tools(Vue.prototype.$dialog, siteConfig);

const router = new VueRouter({
  mode: 'history',
  routes
});

// 路由器钩子
router.beforeEach((to, from, next) => {
  const title = to.meta.title;
  document.title = title || 'deasy';
  next();
});

router.afterEach(function (to) { // 添加访问统计代码的执行,详见百度统计api
  if (_hmt) {
    const currentUrl = document.location.href;
    _hmt.push(['_trackPageview', currentUrl]);
  }
});

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router // 使用路由器
});