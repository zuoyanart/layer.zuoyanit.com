<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" style="width:100%;margin:20px;">
    <el-form-item label="原密码" prop="oldpassword">
      <el-input type="password" v-model.trim="ruleForm.oldpassword"></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="password">
      <el-input type="password" v-model.trim="ruleForm.password"></el-input>
    </el-form-item>
    <el-form-item label="重复密码" prop="rePassword">
      <el-input type="password" v-model.trim="ruleForm.rePassword"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitHand">提交</el-button>
      <el-button @click="close">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        oldpassword: '',
        password: '',
        rePassword: '',
      },
      rules: {
        oldpassword: [{
          required: true,
          min: 6,
          max: 20,
          message: "请填写6-20位的密码",
          trigger: 'blur'
        }],
        password: [{
          required: true,
          min: 6,
          max: 20,
          message: "请填写6-20位的密码",
          trigger: 'blur'
        }],
        rePassword: [{
          required: true,
          min: 6,
          max: 20,
          message: "请填写6-20位的密码",
          trigger: 'blur'
        }, {
          validator: this.validatePassword,
          trigger: 'blur'
        }],
      }
    }
  },
  props: {
    layerid: String
  },
  methods: {
    validatePassword(rule, value, callback) {
      if (this.ruleForm.password !== this.ruleForm.rePassword) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    },
    async submitHand() {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          let doc = await this.$tools.httpAgent('/user/editPassword', 'put', this.ruleForm);
          if (doc.code === 200) {
            // localStorage.removeItem('jwt');
            // localStorage.removeItem('userMenu');
            this.$layer.close(this.layerid);
          }
        }
      });
    },
    close() {
      this.$layer.close(this.layerid);
    }
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
</style>
