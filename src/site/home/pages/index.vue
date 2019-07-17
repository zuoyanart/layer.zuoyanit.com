<template>
  <div class="router-main">
    <div class="banner">
      <div class="banner-c">
        <div class="swiper-container" id="homeswiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide socket">
              <h3>
                <span>让Websocket更简单</span>
                <br>
                <br>
                <span style="padding-left:20px;">全面支持web，小程序，安卓和IOS</span>
                <br>
                <br>
                <p>
                  <el-button @click="jumpReg" style="margin-left:50px;">免费试用</el-button>
                </p>
              </h3>
              <img src="https://s3.cn-north-1.amazonaws.com.cn/sso-media/baas/ad-img/banner-1.png">
            </div>
            <div class="swiper-slide socket">
              <h3>
                <span>让定时任务更便捷</span>
                <br>
                <br>
                <span style="padding-left:20px;font-size:22px;">灵活配置，失败提醒，从此告别996</span>
              </h3>
              <img src="https://s3.cn-north-1.amazonaws.com.cn/sso-media/baas/ad-img/banner-1.png">
            </div>
          </div>
          <div class="swiper-pagination" id="homeswiperpag"></div>
        </div>
      </div>
    </div>
    <!-- service -->
    <div class="service">
      <div class="service-c">
        <div class="part-title">
          <h5 style="color:#333;">程序开发快人一步</h5>
          <p>涵盖程序开发的多个角落，帮助开发者快速形成应用，降低研发维护成本</p>
        </div>
        <div class="service-item">
          <div class="items">
            <i class="el-icon-wallet"></i>
            <p>支付场景</p>
          </div>
          <div class="items">
            <i class="el-icon-message"></i>
            <p>短信消息</p>
          </div>
          <div class="items">
            <i class="el-icon-set-up"></i>
            <p>定时任务</p>
          </div>
          <div class="items">
            <i class="el-icon-phone-outline"></i>
            <p>实时通信</p>
          </div>
        </div>
      </div>
    </div>
    <div class="servicedes socketdes">
      <div class="servicedes-c">
        <div class="part-title">
          <h5 style="color:#333;">WebSocket</h5>
          <p>更简单的方式将消息从服务器端推送至客户端</p>
          <p>更简单的方式将消息从各种客户端推送至客户端</p>
        </div>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-card class="box-card">
              <div class="socketc">
                <i class="deasy deasyliulanqi" style="color:#67C23A;"></i>
                <div class="socketc1">
                  <h2>跨平台</h2>
                  <p>浏览器，小程序，安卓，IOS都有成熟可靠的SDK</p>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="socketc">
                <i class="deasy deasycode" style="color:#409EFF;"></i>
                <div class="socketc1">
                  <h2>任何开发语言</h2>
                  <p>PHP,NODE,C#,JAVA,swift,C++，后端API兼容所有语言调用</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="30" style="margin-top:20px;">
          <el-col :span="12">
            <el-card class="box-card">
              <div class="socketc">
                <i class="deasy deasyshishi" style="color:#E6A23C;"></i>
                <div class="socketc1">
                  <h2>实时高效</h2>
                  <p>每秒百万级消息实时送达</p>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="socketc">
                <i class="deasy deasyjiandan" style="color:#F56C6C;"></i>
                <div class="socketc1">
                  <h2>简单易用</h2>
                  <p>SDK调用快速链接</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="servicedes taskdes">
      <div class="servicedes-c">
        <div class="part-title">
          <h5 style="color:#333;">计划任务</h5>
          <p>轻松的维护定时计划</p>
        </div>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-card class="box-card">
              <div class="socketc">
                <i class="deasy deasywending" style="color:#67C23A;"></i>
                <div class="socketc1">
                  <h2>稳定可靠</h2>
                  <p>独立子任务，毫秒级延迟</p>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="socketc">
                <i class="deasy deasytongzhi" style="color:#409EFF;"></i>
                <div class="socketc1">
                  <h2>超时通知</h2>
                  <p>任务超时，实时短信通知，自由设定通知间隔</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="30" style="margin-top:20px;">
          <el-col :span="12">
            <el-card class="box-card">
              <div class="socketc">
                <i class="deasy deasyshezhi" style="color:#E6A23C;"></i>
                <div class="socketc1">
                  <h2>自由管理</h2>
                  <p>随时启动停止，可视化指定Cron规则</p>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="socketc">
                <i class="deasy deasyfenzu" style="color:#F56C6C;"></i>
                <div class="socketc1">
                  <h2>任务分组</h2>
                  <p>方便聚拢归类任务</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- case -->
    <!-- <div class="case">
      <div class="case-c">
        <div class="part-title">
          <h5>案例作品</h5>
          <p>用技术与专注，将作品通过艺术和技术的结合，打造精品案例。</p>
        </div>
        <el-button style="margin-top:20px;">更多案例</el-button>
      </div>
    </div>-->
    <!-- news -->
    <!-- <div class="news">
      <div class="news-c">
        <div class="part-title">
          <h5 style="color:#333;">新闻中心</h5>
          <p>记录团队成长点滴以及对技术、理念的探索，同时我们乐于分享！</p>
        </div>
        <div class="news-item">
          <div class="item">
            <div class="head">
              <img src="../assets/img/site/index-list1.jpg">
              <p>公司新闻</p>
            </div>
            <content-list :nodeid="27"></content-list>
          </div>
          <div class="item">
            <div class="head">
              <img src="../assets/img/site/index-list2.jpg">
              <p>行业动态</p>
            </div>
            <content-list :nodeid="28"></content-list>
          </div>
          <div class="item">
            <div class="head">
              <img src="../assets/img/site/index-list3.jpg">
              <p>技术学堂</p>
            </div>
            <content-list :nodeid="29"></content-list>
          </div>
        </div>
      </div>
    </div>-->
    <!-- custom -->
    <!-- <div class="custom">
      <div class="part-title">
        <h5 style="color:#333;">知名客户</h5>
        <p>虽然不都是500强，但我可以给您讲我们与任何一个伙伴的故事</p>
      </div>
      <ul>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
        <li>
          <img src="../assets/img/site/1-1p4101400570-l.png" alt>
        </li>
      </ul>
    </div>-->
    <!-- custom -->
    <!-- 联系 -->
    <div class="contact">
      <div class="contact-c">
        <div>
          即刻加入，享受极速开发乐趣
          <el-button style="margin-left:100px;" @click="jumpReg">立刻体验</el-button>
        </div>
      </div>
    </div>
    <!-- 联系 -->
  </div>
</template>
<script>
import swiperBigImg from "../components/swiper-bigimg/swiper.vue";
import contentList from "../components/base-content-list/index";
export default {
  data() {
    return {
      form: {
        duty: ""
      },
      swiperOption: {
        nodeid: 3
      },
      hangye: [],
      qa: []
    };
  },
  methods: {
    async getArticles(nodeid = 1, cp = 1, mp = 10) {
      const doc = await this.$tools.httpAgent("/api/article/page", "post", {
        nodeid,
        cp,
        mp
      });
      if (doc.code === 200) {
        return doc.data.data;
      }
      return [];
    },
    jumpReg() {
      this.$router.push('/reg');
    }
  },
  components: {
    "swiper-bigimg": swiperBigImg,
    "content-list": contentList
  },
  async mounted() {
    // const req = [this.getArticles(19, 1, 20), this.getArticles(21, 1, 20)];
    // const result = await Promise.all(req);
    // this.hangye = result[0];
    // this.qa = result[1];
    window["mySwiperhomeswiper"] = new Swiper("#homeswiper", {
      direction: "horizontal",
      autoplay: false, // ms
      autoplayDisableOnInteraction: false,
      loop: true,
      speed: 500,
      pagination: ".swiper-pagination",
      grabCursor: true
    });
  }
};
</script>
<style lang="less" scoped>
@import "../assets/less/index.less";
</style>
<style>
.el-carousel__button {
  background-color: red !important;
}
</style>
