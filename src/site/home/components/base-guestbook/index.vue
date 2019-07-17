<template>
  <div style="width:1200px;">
    <el-form :inline="true" ref="form" :model="form" :rules="rules" size="medium" :show-message="false" :status-icon="true">
      <el-form-item prop="name">
        <el-input v-model="form.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input v-model="form.phone" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item prop="remark">
        <el-input v-model="form.remark" placeholder="您的问题或需求" style="width:500px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="guestBook">提交您的需求</el-button>
        <el-button>点击在线咨询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        remark: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入活动名称",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            min: 1,
            max: 11,
            message: "请填写手机号",
            trigger: "blur"
          }
        ],
        remark: [
          {
            required: true,
            min: 1,
            max: 500,
            message: "请填写描述",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    async guestBook() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          const doc = await this.$tools.httpAgent(
            "/api/guestbook/create",
            "post",
            this.form
          );
          if (doc.code === 200) {
            this.$layer.msg("提交成功");
            this.form.name = "";
            this.form.phone = "";
            this.form.remark = "";
          }
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.a {
}
</style>

