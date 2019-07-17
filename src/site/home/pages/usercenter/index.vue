<style lang="less">
@import "../../assets/less/usercenter.less";
</style>

<template>
  <div id="main">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>应用密钥</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="editSecret">刷新密钥</el-button>
          </div>
          <div style="height:100px;">
            <div>
              APPKEY：
              <el-tag>{{userInfo.appkey}}</el-tag>
            </div>
            <div style="margin:10px 0;">
              APPSECRET：
              <el-tag type="success">{{userInfo.appsecret}}</el-tag>
            </div>
            <p style="color:#909399;">(此密钥不适用于实时推送)</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>资源余额</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="recharge">充值</el-button>
          </div>
          <div style="height:100px;">
            钱包余额：￥{{userProInfo.money}}
            <el-divider></el-divider>
            短信包：{{userProInfo.sms}}条
            <el-button type="danger" size="mini" @click="buySms" style="margin-left:20px;">购买短信</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <h2 style="margin-top:30px;font-size:16px;">联系我们</h2>
    <img
      src="../../assets/img/wx.jpg"
      style="width:200px;margin-top:20px;border:1px solid #909399;"
    />
  </div>
</template>

<script>
import buySms from './userPro/buySms';
import recharge from './userPro/recharge.vue';

export default {
  data() {
    return {
      userInfo: {},
      userProInfo: {}
    };
  },
  methods: {
    async getUserInfo() {
      const doc = await this.$tools.httpAgent('/user', 'get');
      if (doc.code == 200) {
        this.userInfo = doc.data;
      }
    },
    async getUserProInfo() {
      const doc = await this.$tools.httpAgent('/userPro', 'get');
      if (doc.code === 200) {
        this.userProInfo = doc.data;
      }
    },
    async editSecret() {
      this.$layer.alert('确定要重置密钥吗？此操作会影响到api鉴权', async () => {
        const doc = await this.$tools.httpAgent('/user/secret', 'put');
        this.$layer.closeAll();
        if (doc.code == 200) {
          this.userInfo.appsecret = doc.data.appsecret;
          this.userInfo.appkey = doc.data.appkey;
        }
      });
    },
    buySms() {//购买短信
      this.$layer.iframe({
        title: '购买短信包',
        content: {
          content: buySms,
          parent: this,
          data: {

          }
        },
        area: ['500px', '250px']
      });
    },
    recharge() {//充值
      this.$layer.iframe({
        title: '充值',
        content: {
          content: recharge,
          parent: this,
          data: {

          }
        },
        area: ['500px', '500px']
      });
    }
  },
  mounted() {
    this.getUserInfo();
    this.getUserProInfo();
    this.$on('updataUserProfile', (data) => {
      if (data.key === 'sms') {
        this.$set(this.userProInfo, data.key, parseInt(this.userProInfo.sms) + parseInt(data.value));
      } else if (data.key == 'money') {
        this.$set(this.userProInfo, data.key, parseInt(this.userProInfo.money) - parseInt(data.value));
      }
    });
  }
};
</script>
