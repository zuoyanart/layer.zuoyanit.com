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
  return import('./pages/list-server.vue');
};
const content = () => {
  return import('./pages/content.vue');
};

const notFound = () => {
  return import('./pages/404.vue');
};

// 独页
const reg = () => {
  return import('./pages/reg.vue');
};

const login = () => {
  return import('./pages/login.vue');
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
    path: '/reg',
    component: reg
  }, {
    path: '/login',
    component: login
  }, {
    path: 'usercenter',
    component: usercenter,
    children: [{
      path: '',
      component: usercenter_index
    }]
  }, {
    path: '*',
    component: notFound
  }]
}];

module.exports = routes;