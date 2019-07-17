<template>
  <yd-layout>
    <!-- 轮播 -->
    <yd-slider autoplay="300000" class="slider">
      <yd-slider-item>
        <img src="../assets/img/slider-1.jpg">
        <div class="sliderit">
          <p>程序开发快人一步</p>
          <p style="color:#00dfb9;">先入为主，抢占先机</p>
        </div>
      </yd-slider-item>
      <!-- <yd-slider-item>
        <img src="../assets/img/site/1-1P4101Z3290-L.jpg">
      </yd-slider-item>
      <yd-slider-item>
        <img src="../assets/img/site/1-1P4101Z3420-L.jpg">
      </yd-slider-item>-->
    </yd-slider>
    <!-- 轮播 -->
    <div class="part">
      <div class="part-title">
        <h2>程序开发快人一步</h2>
        <p>涵盖程序开发的多个角落，帮助开发者快速形成应用</p>
        <p>降低研发维护成本</p>
      </div>
      <div class="part-content">
        <yd-grids-group :rows="2">
          <yd-grids-item>
            <i slot="icon" class="deasy deasyqianbao"></i>
            <span slot="text">支付场景</span>
          </yd-grids-item>
          <yd-grids-item>
            <i slot="icon" class="deasy deasyduanxin"></i>
            <span slot="text">短信消息</span>
          </yd-grids-item>
          <yd-grids-item>
            <i slot="icon" class="deasy deasytask"></i>
            <span slot="text">定时任务</span>
          </yd-grids-item>
          <yd-grids-item>
            <i slot="icon" class="deasy deasytongxin"></i>
            <span slot="text">实时通信</span>
          </yd-grids-item>
        </yd-grids-group>
      </div>
    </div>
    <div class="part websocketdes">
      <div class="part-title">
        <h2>WebSocket</h2>
        <p>更简单的方式将消息从服务器端推送至客户端</p>
        <p>更简单的方式将消息从各种客户端推送至客户端</p>
      </div>
      <div class="part-content">
        <div class="item">
          <i class="deasy deasyliulanqi" style="color:#67C23A;"></i>
          <div>
            <h3>跨平台</h3>
            <div>浏览器，小程序，安卓，IOS都有成熟可靠的SDK</div>
          </div>
        </div>
        <div class="item">
          <i class="deasy deasycode" style="color:#409EFF;"></i>
          <div>
            <h3>任何开发语言</h3>
            <div>PHP,NODE,C#,JAVA,swift,C++，后端API兼容所有语言调用</div>
          </div>
        </div>
        <div class="item">
          <i class="deasy deasyshishi" style="color:#E6A23C;"></i>
          <div>
            <h3>实时高效</h3>
            <div>每秒百万级消息实时送达</div>
          </div>
        </div>
        <div class="item">
          <i class="deasy deasyjiandan" style="color:#F56C6C;"></i>
          <div>
            <h3>简单易用</h3>
            <div>SDK调用快速链接</div>
          </div>
        </div>
      </div>
    </div>
    <div class="part taskdes">
      <div class="part-title">
        <h2>计划任务</h2>
        <p>轻松的维护定时计划</p>
      </div>
      <div class="part-content">
        <div class="item">
          <i class="deasy deasywending" style="color:#67C23A;"></i>
          <div>
            <h3>稳定可靠</h3>
            <div>独立子任务，毫秒级延迟</div>
          </div>
        </div>
        <div class="item">
          <i class="deasy deasytongzhi" style="color:#409EFF;"></i>
          <div>
            <h3>超时通知</h3>
            <div>任务超时，实时短信通知，自由设定通知间隔</div>
          </div>
        </div>
        <div class="item">
          <i class="deasy deasyshezhi" style="color:#E6A23C;"></i>
          <div>
            <h3>自由管理</h3>
            <div>随时启动停止，可视化指定Cron规则</div>
          </div>
        </div>
        <div class="item">
          <i class="deasy deasyfenzu" style="color:#F56C6C;"></i>
          <div>
            <h3>任务分组</h3>
            <div>方便聚拢归类任务</div>
          </div>
        </div>
      </div>
    </div>
  </yd-layout>
</template>

<script>

export default {
  data() {
    return {
      swiperList: [],
    };
  },
  components: {
  },
  methods: {
  },
  mounted() {

  }
};
</script>
<style lang="less" scoped>
@import "../assets/less/index.less";
</style>
