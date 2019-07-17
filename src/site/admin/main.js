/**
 * @Author: 左盐
 * @Date:   2017-16-03 20:54:48
 * @Email:  huabinglan@163.com
 * @Project: xxxx
 * @Last modified by:   左盐
 * @Last modified time: 2017-16-03 21:09:20
 */

import Vue from 'vue';
import App from './App.vue';
import layer from 'vue-layer';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import BaseMulMenu from './components/mulmenu/menu.vue';
import routes from './router.js';
import store from './store/index.js';
import tools from 'pizzatools';
import siteConfig from './config.js';
import BigNumber from 'bignumber.js';

import '../../assets/css/reset.css';
import './assets/base.less';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI, {
  size: 'small'
});

Vue.prototype.$layer = layer(Vue);
Vue.prototype.$tools = tools(Vue.prototype.$layer, siteConfig);
Vue.prototype.$siteConfig = siteConfig;

Vue.filter('formatTime', (value) => {
  if (!value) return '';
  return Vue.prototype.$tools.formatTime(value);
});

Vue.filter('formatNumber', (value) => {
  return new BigNumber(value).toFixed();
});

Vue.component('base-mulmenu', BaseMulMenu);
const router = new VueRouter({
  routes,
  mode: 'history'
});
// 权限判断指令
Vue.directive('has', {
  inserted: function (el, binding) {
    console.log('binging', binding);
    const menu = JSON.parse(localStorage.getItem('userMenu'));
    let menuIndex = localStorage.getItem('menuIndex') || '0';
    let meta = [];
    if (menuIndex.indexOf('-') === -1) {
      menuIndex = parseInt(menuIndex);
      meta = menu[menuIndex].meta || [];
    } else {
      menuIndex = menuIndex.split('-');
      meta = menu[menuIndex[0]].children[menuIndex[1]].meta || [];
    }
    if (meta.indexOf(binding.arg) === -1) {
      el.parentNode.removeChild(el);
    }
  }
});

router.beforeEach((to, from, next) => {
  // 不是错误页面，则判断权限
  if (to.meta.auth !== false) {
    if (Vue.prototype.$tools.isEmpty(localStorage.getItem('jwt'))) {
      next({
        path: '/login'
      });
      return;
    }
    if (to.meta) {
      const menu = localStorage.getItem('userMenu');
      if (menu.indexOf(to.path) === -1 && false) {
        next({
          path: '/error/500'
        });
        return;
      }
    }
  }

  const title = to.meta.title;
  document.title = title || '后台管理';
  next();
});

const app = new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router // 使用路由器
});
