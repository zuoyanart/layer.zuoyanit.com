<style lang="less">
@import "../assets/less/main.less";
</style>

<template>
  <div>
    <div class="header-menu">
      <div class="header-menu-c">
        <!-- <img src="../assets/img/site/logo.png" style="margin-right:50px;"> -->
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="transparent"
          text-color="#fff"
          :router="true"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/" :exact="true">首页</el-menu-item>
          <el-menu-item index="/chart">在线聊天</el-menu-item>
          <el-menu-item>
            <a href="/doc" target="_blank">文档</a>
          </el-menu-item>
          <el-menu-item>
            <a href="https://github.com/zydeasy/deasy-qa/issues" target="_blank">问题工单</a>
          </el-menu-item>
        </el-menu>
        <el-menu
          class="el-menu-demo1"
          mode="horizontal"
          background-color="transparent"
          text-color="#fff"
          :router="true"
        >
          <el-menu-item index="/reg">注册</el-menu-item>
          <el-menu-item index="/login">登录</el-menu-item>
        </el-menu>
      </div>
    </div>
    <router-view></router-view>
    <div class="footer">
      <div class="footer-c">
        <div class="top">
          <div class="part">
            <h3>资源</h3>
            <ul>
              <li>
                <a href="/doc" target="_blank">开发文档</a>
              </li>
              <li>
                <a href="http://www.zuoyanit.com/doc/serversdk.html">SDK下载</a>
              </li>
            </ul>
          </div>
          <div class="part">
            <h3>服务支持</h3>
            <ul>
              <li>
                <a href="https://github.com/zydeasy/deasy-qa/issues">问题咨询</a>
              </li>
            </ul>
          </div>
          <div class="part">
            <h3>联系我们</h3>
            <ul>
              <li>电话：15537172119</li>
              <li>邮箱：deasy@zuoyanit.com</li>
              <li>地址：河南省郑州市美盛中心</li>
            </ul>
          </div>
          <img src="../assets/img/wx.jpg" alt style="width:150px;height:150px;">
        </div>
        <div class="bottom">
          <a href="javascript:void(0);">友情链接&nbsp;&nbsp; |</a>
          <a href="http://news.163.com" target="_blank">网易</a>
          <a href="http://www.miitbeian.gov.cn" target="_blank">网易</a>
          <a href="http://www.miitbeian.gov.cn" target="_blank">豫ICP备17021117号-1</a>
        </div>
      </div>
    </div>
    <base-waiter></base-waiter>
  </div>
</template>

<script>
import asd from "../components/base-waiter/index";
import mainMenu from "../components/base-mainmenu/index";

export default {
  data() {
    return {
      menuList: [],
      newsNode: [],
      anliNode: []
    };
  },
  methods: {
    async getMenu() {
      const doc = await this.$tools.httpAgent(
        "/api/tree/main",
        "post",
        "pid=1"
      );
      this.menuList = doc.data;
    },
    getNodeList: async function (nodeid) {
      const sister = await this.$tools.httpAgent("/api/tree/page", "post", {
        pid: nodeid
      });
      return sister.data;
    }
  },
  components: {
    "base-waiter": asd,
    "base-mainmenu": mainMenu
  },
  async mounted() {
    // this.getMenu();
    // this.anliNode = await this.getNodeList(5);
    // this.newsNode = await this.getNodeList(7);
  },
  watch: {
    // $route: function() {
    //   this.setMenu(0);
    // }
  }
};
</script>
<style lang="less" scoped>
.el-menu-demo {
  flex: 1;
}
.el-menu--horizontal {
  border-bottom: 1px solid transparent !important;
  & /deep/ .el-menu-item {
    background-color: transparent !important;
    &:hover {
      color: #409eff !important;
    }
  }
}
</style>

