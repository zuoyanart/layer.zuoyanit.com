/**
 * @Author: 左盐 <zuoyan>
 * @Date:   2017-10-03 21:49:53
 * @Email:  huabinglan@163.com
 * @Project: xxxx
 * @Last modified by:   左盐
 * @Last modified time: 2017-16-03 16:13:20
 */

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import layer from 'vue-layer';
import ElementUI from 'element-ui';
import '../../assets/css/reset.css';
import './assets/less/base.less';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-layer/lib/vue-layer.css';
import routes from './router.js';
import tools from 'pizzatools';
import siteConfig from './config.js';

// self components
import BaseMulMenu from './components/mulmenu/menu.vue';
import baseCrumb from './components/base-crumb/crumb.vue';
import baseBlock from './components/base-block/block.vue';
import baseTitle from './components/base-title/title.vue';
import baseBannerImg from './components/base-bannerImg/index.vue';

Vue.use(VueRouter);
Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
});
Vue.prototype.$layer = layer(Vue);
Vue.prototype.$tools = tools(Vue.prototype.$layer, siteConfig);
Vue.prototype.$siteConfig = siteConfig;

// 全局通用模块
Vue.component(baseCrumb.name, baseCrumb);
Vue.component(baseBlock.name, baseBlock);
Vue.component(baseTitle.name, baseTitle);
Vue.component(baseBannerImg.name, baseBannerImg);
Vue.component('base-mulmenu', BaseMulMenu);
// 全局过滤器
Vue.filter('formatTime', (value, fmt = 'YYYY-MM-DD HH:mm:ss') => {
  if (!value) return '';
  return Vue.prototype.$tools.formatTime(value, fmt);
});
Vue.filter('subStr', (value, len = 50, end = '...') => {
  if (!value) return '';
  return Vue.prototype.$tools.subStr(value, len, end);
});
// 注册路由器
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});
// 路由器钩子
router.beforeEach((to, from, next) => {
  const title = to.meta.title;
  document.title = title || '';
  next();
});

router.afterEach(function () { // 添加访问统计代码的执行,详见百度统计api
  // window.document.title = transition.to.title || 'Default page title';
  window.prerenderReady = false;
  if (_hmt) {
    let currentUrl = document.location.href;
    _hmt.push(['_trackPageview', currentUrl]);
  }
});

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router // 使用路由器
});