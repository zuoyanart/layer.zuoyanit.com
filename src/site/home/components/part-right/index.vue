<template>
  <div class="part-right">
    <div class="part itschool">
      <div class="h2title">{{nodename}}</div>
      <div class="content">
        <template v-if="recoArticle.title">
          <router-link :to="recoArticle.link">{{recoArticle.title}}</router-link>
          <p>{{recoArticle.brief}}</p>
        </template>
      </div>
    </div>
    <div class="part service">
      <div class="h2title">服务项目</div>
      <div class="content">
        <div class="item">
          <h2>网站建设</h2>
          <p>企业网站、购物商城、行业门户、社区论坛、政府/事业单位等网站定制开发！</p>
          <el-button>查看详情</el-button>
        </div>
        <div class="item">
          <h2>移动端/APP</h2>
          <p>手机网站、原生APP、API开发、H5单页等移动终端产品定制开发！</p>
          <el-button>查看详情</el-button>
        </div>
        <div class="item">
          <h2>微信/小程序</h2>
          <p>基于微信/小程序模板消息、微信支付等开放组件及接口开发各类微信场景应用！</p>
          <el-button>查看详情</el-button>
        </div>
        <div class="item">
          <h2>技术支持</h2>
          <p>技术支援、安全防护、模板定制、插件定制、技术方案等技术支持服务</p>
          <el-button>查看详情</el-button>
        </div>
      </div>
    </div>
    <div class="part lianxi">
      <div class="h2title"><span style="background-color:#0595c7;display:inline-block;min-width:50px;height:100%;color:#fff;padding:0 15px;">联系吧</span></div>
      <div class="content">
        <h3>电话：18530851009</h3>
        <el-button size="mini" icon="el-icon-service">业务咨询</el-button>
        <el-button size="mini" icon="el-icon-service">技术咨询</el-button>
        <el-button size="mini" icon="el-icon-service">售后服务</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recoArticle: {}
    };
  },
  props: {
    topnode: {
      type: Number,
      default: 22
    },
    nodename: {
      type: String,
      default: ""
    }
  },
  methods: {
    async getArticles(nodeid) {
      const article = await this.$tools.httpAgent("/api/article/page", "post", {
        cp: 1,
        mp: 1,
        nodeid
      });
      if (article.data.data.length > 0) {
        this.recoArticle = article.data.data[0];
      } else {
        this.recoArticle = {};
      }
    }
  },
  mounted() {},
  watch: {
    topnode() {
      this.getArticles(this.topnode);
    }
  }
};
</script>

<style lang="less" scoped>
.part-right {
  width: 100%;
  min-height: 100px;
  .part {
    border: 1px solid #ccc;
    margin-top: 30px;
    background-color: #fff;
    .h2title {
      height: 40px;
      border-bottom: 1px solid #ccc;
      color: #666;
      background-color: #fbfbfb;
      font-size: 16px;
      font-weight: normal;
      padding: 8px 15px;
    }
    .content {
      padding: 20px;
    }
  }
  .itschool {
    a {
      font-size: 20px;
      color: #ff5e52;
    }
    p {
      font-size: 14px;
      color: #999;
    }
  }
  .service {
    .content {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      .item {
        width: 50%;
        height: 150px;
        text-align: center;
        &:nth-child(2) {
          border-left: 1px dashed #ccc;
        }
        &:nth-child(3) {
          border-top: 1px dashed #ccc;
        }
        &:last-child {
          border-left: 1px dashed #ccc;
          border-top: 1px dashed #ccc;
        }
        h2 {
          font-size: 16px;
          font-weight: normal;
          line-height: 1.2em;
          margin: 10px 0;
        }
        p {
          width: 100%;
          height: 36px;
          overflow: hidden;
          color: #bbb;
          margin-bottom: 10px;
          font-size: 12px;
          padding: 0 10px;
        }
      }
    }
  }
  .lianxi {
    h3 {
      padding-top: 5px;
      padding-bottom: 5px;
      font-size: 18px;
      color: #0595c7;
      line-height: 36px;
    }
  }
}
</style>
