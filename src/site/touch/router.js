/**
 * @Author: 左盐 <zuoyan>
 * @Date:   2017-12-03 19:33:24
 * @Email:  huabinglan@163.com
 * @Project: xxxx
 * @Last modified by:   zuoyan
 * @Last modified time: 2017-12-03 19:39:27
 */

const main = () => {
  return import('./pages/main.vue');
};
const index = () => {
  return import('./pages/index.vue');
};
const node = () => {
  return import('./pages/node.vue');
};
const list = () => {
  return import('./pages/list.vue');
};
const listImg = () => {
  return import('./pages/listImg.vue');
};
const content = () => {
  return import('./pages/content.vue');
};

const service = () => {
  return import('./pages/service.vue');
};

const chart = () => {
  return import('./pages/chart.vue');
}

const rdocr = () => {
  return import('./pages/rdocr.vue');
}

const about = () => {
  return import('./pages/about.vue');
}

const notFound = () => {
  return import('./pages/404.vue');
};

const routes = [{
  path: '/',
  component: main,
  meta: {
    title: 'asdasd'
  },
  children: [{ // 空路由，什么都没匹配到的时候执行
    path: '',
    component: index
  }, {
    path: ':path-:nodeid(\\d+)-:mp(\\d+)list', // 普通列表页
    component: list
  }, {
    path: '/:path-:nodeid(\\d+)-:mp(\\d+)list/:cp(\\d+)', // 普通列表页
    component: list
  }, {
    path: ':path-:nodeid(\\d+)node', // 节点型列表页
    component: node
  }, {
    path: '/:path-:nodeid(\\d+)-:mp(\\d+)img', // 图片列表页
    component: listImg
  }, {
    path: '/:path-:nodeid(\\d+)-:mp(\\d+)img/:cp(\\d+)', // 图片列表页
    component: listImg
  }, {
    path: '/content/:id(\\d+)', // 正文页
    component: content
  }, {
    path: '/content_photo/:id(\\d+)', // 正文页
    component: content
  }, {
    path: '/service',
    component: service
  }, {
    path: '/chart',
    component: chart
  }, {
    path: '/rdocr',
    component: rdocr
  }, {
    path: '/about',
    component: about
  }, {
    path: '*',
    component: notFound
  }]
}];

module.exports = routes;