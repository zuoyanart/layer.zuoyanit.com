<style lang="less">
@import "../assets/less/main.less";
</style>

<template>
  <div>
    <div class="header-menu">
      <div class="header-menu-c">
        <h1>vue-layer</h1>
        <h2>精简，灵活的web pc弹窗组件</h2>
        <a href="https://github.com/zuoyanart/vue-layer" target="_blank">View on GitHub</a>
        <a href="https://www.zuoyanit.com" target="_blank">开发者基础服务平台</a>
        <div class="shields">
          <a href="https://www.npmjs.com/package/vue-layer" rel="nofollow" target="_blank">
            <img
              src="https://camo.githubusercontent.com/5529516c2cfe21df593ddb78ddf1393dc09c1336/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64772f7675652d6c617965722e7376673f7374796c653d666c61742d737175617265"
              alt="npm"
              data-canonical-src="https://img.shields.io/npm/dw/vue-layer.svg?style=flat-square"
              style="max-width:100%;"
            />
          </a>
          <a href="https://www.npmjs.com/package/vue-layer" rel="nofollow" target="_blank">
            <img
              src="https://camo.githubusercontent.com/eedae8dc255e8b48c3316b253fbaac02f3fe5774/68747470733a2f2f696d672e736869656c64732e696f2f62756e646c6570686f6269612f6d696e7a69702f7675652d6c617965722e737667"
              alt="npm"
              data-canonical-src="https://img.shields.io/bundlephobia/minzip/vue-layer.svg"
              style="max-width:100%;"
            />
          </a>
          <a href="https://www.npmjs.com/package/vue-layer" rel="nofollow" target="_blank">
            <img
              src="https://camo.githubusercontent.com/a9a733c1224746790cd0fb04fa8f370d3fcfd3e1/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f7061636b6167652d6a736f6e2f762f7a756f79616e6172742f7675652d6c617965722e737667"
              alt="npm"
              data-canonical-src="https://img.shields.io/github/package-json/v/zuoyanart/vue-layer.svg"
              style="max-width:100%;"
            />
          </a>
          <a href="https://www.npmjs.com/package/vue-layer" rel="nofollow" target="_blank">
            <img
              src="https://camo.githubusercontent.com/dd773d72f412784f5926fe3050065e6fc8ad72ef/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7675652d6c617965722e737667"
              alt="npm"
              data-canonical-src="https://img.shields.io/npm/l/vue-layer.svg"
              style="max-width:100%;"
            />
          </a>
        </div>
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
                <a href="https://github.com/zuoyanart" target="_blank">GitHub</a>
              </li>
            </ul>
          </div>
          <div class="part">
            <h3>服务支持</h3>
            <ul>
              <li>
                <a href="https://github.com/zuoyanart/vue-layer/issues" target="_blank">问题咨询</a>
              </li>
            </ul>
          </div>
          <div class="part">
            <h3>联系左盐</h3>
            <ul>
              <li>邮箱：huabinglan@163.com</li>
            </ul>
          </div>
          <img src="../assets/img/wx.jpg" alt style="width:150px;height:150px;" />
        </div>
      </div>
    </div>
    <!-- <base-waiter></base-waiter> -->
  </div>
</template>

<script>
import asd from '../components/base-waiter/index';
import mainMenu from '../components/base-mainmenu/index';

export default {
  data () {
    return {
      menuList: [],
      newsNode: [],
      anliNode: []
    };
  },
  methods: {
    async getMenu () {
      const doc = await this.$tools.httpAgent(
        '/api/tree/main',
        'post',
        'pid=1'
      );
      this.menuList = doc.data;
    },
    getNodeList: async function (nodeid) {
      const sister = await this.$tools.httpAgent('/api/tree/page', 'post', {
        pid: nodeid
      });
      return sister.data;
    }
  },
  components: {
    'base-waiter': asd,
    'base-mainmenu': mainMenu
  },
  async mounted () {
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
