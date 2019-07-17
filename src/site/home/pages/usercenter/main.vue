<style lang="less" scoped>
@import "../../assets/less/usercenter.less";
</style>

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
          <el-menu-item route="/usercenter" index="/usercenter">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item route="/usercenter/socket" index="/usercenter/socket">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">实时推送</span>
          </el-menu-item>
          <el-menu-item route="/usercenter/taskgroup" index="/usercenter/taskgroup">
            <i class="el-icon-time"></i>
            <span slot="title">任务调度</span>
          </el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">
              <i class="el-icon-phone-outline"></i>短信
            </template>
            <el-menu-item route="/usercenter/sms/signame" index="/usercenter/sms/signame">签名</el-menu-item>
            <!-- <el-menu-item route="/usercenter/sms/tpl" index="/usercenter/sms/tpl">模板</el-menu-item> -->
          </el-submenu>
          <!-- <el-submenu index="2-5">
            <template slot="title">
              <i class="el-icon-bank-card"></i>消费记录
            </template>
            <el-menu-item route="/usercenter/bank/sale" index="/usercenter/bank/sale">充值记录</el-menu-item>
            <el-menu-item route="/usercenter/bank/buy" index="/usercenter/bank/nuy">消费记录</el-menu-item>
          </el-submenu>-->
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
            <el-button type="text" @click="goBack" style="margin-left:30px;">返回</el-button>
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
import breadCrumb from '../../components/breadCrumb/index';
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
        this.$router.push('/');
      } else if (cmd === 'editPassword') {
        this.$layer.iframe({
          content: {
            content: editPassword,
            parent: this,
            data: {

            }
          },
          area: ['600px', '430px'],
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
