const login = () => {
  return import('./pages/login/login.vue');
};
const indexMain = () => {
  return import('./pages/main.vue');
};
const layout = () => {
  return import('./pages/layout.vue');
};
const index = () => {
  return import('./pages/index.vue');
};
const userAdmin = () => {
  return import('./pages/userAdmin/user.vue');
};
const userAdminEdit = () => {
  return import('./pages/userAdmin/edit.vue');
};
const siteConfig = () => {
  return import('./pages/siteConfig/index.vue');
};
const siteConfigEdit = () => {
  return import('./pages/siteConfig/edit.vue');
};
const userMenu = () => {
  return import('./pages/userMenu/menu.vue');
};
const userGroup = () => {
  return import('./pages/userGroup/group.vue');
};
const userGroupEdit = () => {
  return import('./pages/userGroup/edit.vue');
};

const role = () => {
  return import('./pages/role/index.vue');
};
const roleEdit = () => {
  return import('./pages/role/edit.vue');
};
const tree = () => {
  return import('./pages/tree/index.vue');
};
const treeedit = () => {
  return import('./pages/tree/edit.vue');
};
const article = () => {
  return import('./pages/article/index.vue'); // 实现懒加载
};
const articleedit = () => {
  return import('./pages/article/edit.vue');
};
const block = () => {
  return import('./pages/block/block.vue');
};
const blockedit = () => {
  return import('./pages/block/edit.vue');
};
const guestbook = () => {
  return import('./pages/guestbook/guestbook.vue');
};
//====================================
const error404 = () => {
  return import('./pages/error/404.vue');
};
const error500 = () => {
  return import('./pages/error/500.vue');
};

const routes = [{
  path: '/',
  component: indexMain,
  children: [{
    path: '',
    component: index,
    meta: {
      main: true,
      title: '首页'
    }
  }, {
    path: 'article',
    component: layout,
    meta: {
      title: '文章管理'
    },
    children: [{
      path: '',
      component: article
    }, {
      path: 'edit',
      component: articleedit,
      meta: {
        title: '文章编辑'
      }
    }]
  }, {
    path: 'tree',
    component: layout,
    meta: {
      title: '节点管理'
    },
    children: [{
      path: '',
      component: tree
    }, {
      path: 'add',
      component: treeedit,
      meta: {
        title: '添加节点'
      }
    }, {
      path: 'edit',
      component: treeedit,
      meta: {
        title: '编辑节点'
      }
    }]
  }, {
    path: 'block',
    component: layout,
    meta: {
      title: '模块管理'
    },
    children: [{
      path: '',
      component: block
    }, {
      path: 'block/edit',
      component: blockedit,
      meta: {
        title: '编辑管理'
      },
    }]
  }, {
    path: 'guestbook',
    component: guestbook
  }, {
    path: 'userAdmin',
    component: layout,
    meta: {
      title: '用户管理'
    },
    children: [{
      path: '',
      component: userAdmin
    }, {
      path: 'edit/:id',
      component: userAdminEdit,
      meta: {
        title: '添加用户'
      },
    }, {
      path: 'edit',
      component: userAdminEdit,
      meta: {
        title: '编辑用户'
      },
    }]
  }, {
    path: 'siteconfig',
    component: layout,
    meta: {
      title: '网站配置'
    },
    children: [{
      path: '',
      component: siteConfig
    }, {
      path: ':id',
      component: siteConfigEdit,
      meta: {
        title: '编辑配置'
      },
    }]
  }, {
    path: "usermenu",
    component: userMenu,
    meta: {
      title: '用户菜单'
    }
  }, {
    path: "userAdminGroup",
    component: layout,
    meta: {
      title: '用户组'
    },
    children: [{
      path: '',
      component: userGroup
    }, {
      path: "edit",
      component: userGroupEdit,
      meta: {
        title: '编辑用户组'
      }
    }, {
      path: 'adminRole/:id(\\d+)',
      component: role,
      meta: {
        title: '查看角色'
      }
    }, {
      path: 'adminRole/edit',
      component: roleEdit,
      meta: {
        title: '编辑角色'
      },
    }]
  }]
}, {
  path: '/login',
  component: login,
  meta: {
    auth: false
  }
}, {
  path: '/error/500',
  component: error500,
  meta: {
    auth: false
  }
}, {
  path: '*',
  component: error404,
  mate: {
    auth: false
  }
}];

module.exports = routes;