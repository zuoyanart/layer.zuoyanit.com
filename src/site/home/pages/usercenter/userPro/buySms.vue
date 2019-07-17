<template>
  <el-form style="margin:10px;width:100%;">
    <el-form-item label="购买数量" prop="buytime">
      <el-input-number v-model="form.record" :precision="0" :step="1" :max="10000"></el-input-number>
      <span style="color:#909399;">每条0.05元钱</span>
    </el-form-item>
    <el-form-item label="花费金额">{{getMoney}}</el-form-item>
    <el-form-item style="margin-top:50px;">
      <el-button @click="buy" type="success" style="width:90%;">确认购买</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import BigNumber from 'bignumber.js';
export default {
  data() {
    return {
      form: {
        record: 1000
      }
    };
  },
  props: {
    layerid: ''
  },
  computed: {
    getMoney() {
      return new BigNumber(this.form.record).multipliedBy(new BigNumber(this.$siteConfig.price.sms)).toFixed(2);
    }
  },
  methods: {
    async buy() {
      const doc = await this.$tools.httpAgent('/buy/sms', 'post', {
        record: this.form.record
      });
      if (doc.code === 200) {
        this.$parent.$emit('updataUserProfile', {
          key: 'sms',
          value: this.form.record
        });
        this.$parent.$emit('updataUserProfile', {
          key: 'money',
          value: new BigNumber(this.form.record).multipliedBy(new BigNumber(this.$siteConfig.price.sms)).toFixed(2)
        });
        this.$layer.close(this.layerid);
      }
    }
  }
}
</script>

<style>
</style>
