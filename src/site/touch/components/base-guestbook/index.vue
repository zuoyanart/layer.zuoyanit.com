<template>
  <yd-cell-group class="com-guestbook">
    <yd-cell-item>
      <input slot="right" type="text" placeholder="姓名" v-model="form.name">
    </yd-cell-item>
    <yd-cell-item>
      <input slot="right" type="number" placeholder="手机号" v-model="form.phone">
    </yd-cell-item>
    <yd-cell-item>
      <yd-textarea slot="right" placeholder="您的问题或者需求" maxlength="100" v-model="form.remark"></yd-textarea>
    </yd-cell-item>
    <yd-cell-item>
      <span slot="left">
        <yd-button type="hollow" style="width:2.5rem;" @click.native="guestBook">提交您的需求</yd-button>
      </span>
      <yd-button slot="right" type="warning" style="width:2.5rem;">拨打客服电话</yd-button>
    </yd-cell-item>
  </yd-cell-group>
</template>

<script>
import schema from "async-validator";
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
            message: "请输入姓名",
            trigger: "blur"
          },
          {
            min: 3,
            max: 10,
            message: "姓名长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            validator: this.validatePhone,
            trigger: "blur",
            message: "请正确填写手机号"
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
    validatePhone(rule, value, callback) {
      const reg = /^((1[2-9][0-9])+\d{8})$/;
      if (!reg.test(value)) {
        callback(new Error("请填写手机号"));
      } else {
        callback();
      }
    },
    async guestBook() {
      const validator = new schema(this.rules);
      validator.validate(this.form, async (errors, fields) => {
        if (errors) {
          this.$dialog.toast({
            mes: errors[0].message,
            timeout: 1000
          });
          return;
        }

        const doc = await this.$tools.httpAgent(
          "/api/guestbook/create",
          "post",
          this.form
        );
        if (doc.code === 200) {
          this.$dialog.toast({
            mes: "提交成功"
          });
          this.form.name = "";
          this.form.phone = "";
          this.form.remark = "";
        }
      });
    }
  }
};
</script>

<style lang="less">
.com-guestbook {
  color: #fff;
  .yd-cell {
    background-color: transparent !important;
    .yd-cell-item {
      background: #fff;
      margin-top: 0.2rem;
    }
  }
}
</style>

