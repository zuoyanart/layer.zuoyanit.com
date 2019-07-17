<style lang="less">
@import "../assets/index.less";
</style>

<template>
  <div id="main">
    <!-- <ul class="indexlist" id="indexlist">
        <li class="li1">{{scoreTotal}}</li>
        <li class="li2"><a href="#"><i class="pzicon-chart"></i><span class="tip">5</span>统计图表</a></li>
        <li class="li3"><a href="#"><i class="pzicon-setting"></i>系统设置</a></li>
        <li class="li4"><a href="#"><i class="pzicon-tongzhi"></i><span class="tip">320</span>系统通知</a></li>
    </ul>-->
    <!-- <div id="index-flag">
      <el-row :gutter="20">
        <el-col :md="6" :lg="5" :xl="4">
          <div class="grid-content bg-purple" style="background-color:#E6A23C;">
            <h3>系统总资产</h3>
            <p>{{systemProperty}} GCT</p>
          </div>
        </el-col>
        <el-col :md="6" :lg="5" :xl="4">
          <div class="grid-content bg-purple" style="background-color:#67C23A;">
            <h3>累计返还积分</h3>
            <p>{{scoreTotal}}</p>
          </div>
        </el-col>
      </el-row>
    </div>-->
    <div style="margin:20px;line-height:30px;">
      <h2>关于</h2>当前版本号：1.6.1
      <br>开发者:
      <a href="#">左盐</a>
      <br>E-mail:
      <a href="mailto:huabinglan@163.com">huabinglan@163.com</a>
      <br>github:
      <a href="http://github.com/zuoyanart" target="_blank">http://github.com/zuoyanart</a>
    </div>
  </div>
</template>

<script>
import BigNumber from 'bignumber.js';
export default {
  data () {
    return {

    };
  },
  methods: {

  },
  mounted () {

  }
};
</script>
