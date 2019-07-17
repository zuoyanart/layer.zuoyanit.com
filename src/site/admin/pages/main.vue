<style lang="less" scoped>
.el-menu-vertical-demo {
  &:not(.el-menu--collapse) {
    width: 220px;
  }
  & /deep/ .el-menu--inline .el-menu-item {
    background-color: #1f2d3d !important;
    height: 44px !important;
    line-height: 44px !important;
    &:hover {
      background-color: #001528 !important;
    }
    &.is-active {
      color: #fff !important;
      background-color: #1890ff !important;
    }
  }
  & /deep/ .is-active {
    color: #fff !important;
    background-color: #1890ff !important;
  }
}
.collspseicon {
  vertical-align: middle;
  margin-left: -10px;
  font-size: 22px;
  cursor: pointer;
}
</style>

<template>
  <div id="app" style="height:100%;">
    <div id="main-parent">
      <div id="sidebar">
        <el-menu
          :router="true"
          :default-active="activeDef"
          class="el-menu-vertical-demo"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
          @select="select"
          :unique-opened="true"
          :collapse="isCollapse"
        >
          <template v-for="(item,index) in userMenu">
            <el-menu-item
              :route="item.href"
              :index="index.toString()"
              v-if="item.children.length === 0"
              :a="index"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">{{item.label}}</span>
            </el-menu-item>
            <el-submenu :index="index.toString()" v-else>
              <template slot="title">
                <i v-if="item.icon != ''" :class="item.icon"></i>
                <i v-else class="el-icon-goods"></i>
                <span>{{item.label}}</span>
              </template>
              <el-menu-item
                :route="c.href"
                :index="index +'-'+i.toString()"
                v-for="(c,i) in item.children"
              >{{c.label}}</el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </div>
      <div id="main-right">
        <div id="user-nav">
          <div class="menusrc" style="padding:5px 20px;">
            <i
              class="collspseicon el-icon-s-unfold"
              v-if="isCollapse"
              @click="changeCollapse"
              title="展开"
            ></i>
            <i class="collspseicon el-icon-s-fold" v-else @click="changeCollapse" title="收起"></i>
            <!-- <el-button type="text" @click="goBack">返回</el-button> -->
            <!-- 面包屑 -->
            <!-- <base-breadcrumb></base-breadcrumb> -->
          </div>
          <div class="userdn">
            <el-dropdown @command="userEvent">
              <span class="el-dropdown-link">
                <i class="pzicon-accountfilling"></i>
                {{username}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="editPassword">修改密码</el-dropdown-item>
                <el-dropdown-item command="loginout" divided>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <transition name="fade-transform">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <div class="row-fluid"></div>
  </div>
</template>

<script>
import editPassword from './userPro/editPassword';
import breadCrumb from '../components/breadCrumb/index';
export default {
  data() {
    return {
      username: '',
      userMenu: [],
      activeDef: '0',
      isCollapse: false
    };
  },
  methods: {
    userEvent(cmd) { // 用户菜单事件
      if (cmd === 'loginout') {
        localStorage.removeItem('jwt');
        document.location.href = '/login';
      } else if (cmd === 'editPassword') {
        this.$layer.iframe({
          content: {
            content: editPassword,
            parent: this,
            data: {

            }
          },
          area: ['500px', '400px'],
          title: "修改密码"
        })
      }
    },
    async init() {
      this.userMenu = JSON.parse(localStorage.getItem('userMenu'));

    },
    select(index, indexpath) {
      localStorage.setItem('menuIndex', index);
    },
    goBack() {
      this.$router.go(-1);
    },
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  },
  mounted() {
    const menuIndex = localStorage.getItem('menuIndex');
    if (menuIndex) {
      this.activeDef = menuIndex;
    }

    this.init();
    this.username = JSON.parse(localStorage.getItem('jwt')).username;
  },
  components: {
    'base-breadcrumb': breadCrumb
  }
};
</script>
