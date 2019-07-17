<style lang="css">
</style>

<template>
  <div id="main">
    <div class="list">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" style="width:1000px">
        <el-form-item label="签名名称" prop="name">
          <el-input v-model.trim="form.name" placeholder="请输入中英文或数字"></el-input>
          <p style="color:#909399;font-size:13px;height:24px;">无须添加【】、()、[]符号，签名发送会自带【】符号，避免重复。</p>
          <p style="color:#909399;font-size:13px;height:24px;">所有发送的短信都会有敏感词检测，请正规使用。</p>
        </el-form-item>
        <el-form-item label="备注" prop="remarks">
          <div style="display:flex;padding-right:10px;">
            <el-input
              type="textarea"
              v-model.trim="form.remarks"
              :rows="2"
              placeholder
              style="flex:1;margin-right:10px;"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitHandle">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import baseMixin from '../mixin/edit.js';
export default {
  mixins: [baseMixin],
  data() {
    return {
      model: 'smsSigname',
      form: {
        name: '',
        remarks: ''
      },
      rules: {
        name: [{
          required: true,
          message: '请填写1-12位的名称',
          trigger: 'blur'
        }, {
          min: 1,
          max: 20,
          message: '长度在1 到 12个字符',
          trigger: 'blur'
        }],
        remarks: [{
          required: true,
          message: '请填写1-100位的名称',
          trigger: 'blur'
        }, {
          min: 1,
          max: 100,
          message: '长度在1 到 100 个字符',
          trigger: 'blur'
        }],
      }
    };
  },
  methods: {

  },
};
</script>
