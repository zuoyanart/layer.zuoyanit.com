<style lang="less">
body {
  background-color: #2d3a4b !important;
}
</style>

<style lang="less" scoped>
@import "../../../../assets/less/mixin.less";
.login {
  width: 450px;
  height: 342px;
  margin: 120px auto;
  padding: 40px 0;
  & > h2 {
    font-weight: 700;
    color: #fff;
    margin-bottom: 40px;
    text-align: center;
    font-size: 26px;
  }
  & > .login-content {
    width: 100%;
    height: 343px;
    & /deep/ .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    & /deep/ .el-input {
      display: inline-block;
      height: 47px;
      .el-input__prefix {
        padding: 7px 0 0 5px;
      }
      & > input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 40px;
        color: #eee;
        height: 47px;
      }
    }
  }
}
.code /deep/ .el-form-item__content {
  .flex-cont();
  .img {
    width: 120px;
    height: 40px;
    margin: 5px 2px 0 15px;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .el-input {
    .flex-item();
  }
}
</style>

<template>
  <div class="login">
    <h2>zuoyan admin</h2>
    <el-form
      ref="form"
      class="login-content"
      :model="form"
      :rules="rules"
      label-width="0px"
      @submit.native.prevent
    >
      <el-form-item prop="username">
        <el-input placeholder="用户名" v-model.trim="form.username">
          <i slot="prefix" class="pzcms pzicon-accountfilling"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="密码" v-model.trim="form.password" type="password">
          <i slot="prefix" class="pzcms pzicon-mima"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="code" class="code">
        <el-input placeholder="验证码" v-model.trim="form.code" @keydown.enter.native="submitHandle">
          <i slot="prefix" class="pzcms pzicon-securityCode-b"></i>
        </el-input>
        <!-- <img :src="src" > -->
        <div class="img" v-html="src" @click="setSrc"></div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitHandle" style="width:100%;" size="medium">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: '',
      form: {
        username: '',
        password: '',
        code: ''
      },
      rules: {
        username: [
          {
            validator: this.validateUsername,
            trigger: 'blur',
            message: '请填写1-20位的用户名'
          }
        ],
        password: [
          {
            validator: this.validatePassword,
            trigger: 'blur',
            message: '请填写6-20位的密码'
          }
        ],
        code: [
          {
            validator: this.validateCode,
            message: '请填写4位的验证码',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  methods: {
    validateUsername(rule, value, callback) {
      const len = value.length;
      if (len > 20 || len === 0) {
        callback(new Error('请填写用户名'));
      } else {
        callback();
      }
    },
    validatePassword(rule, value, callback) {
      const len = value.length;
      if (len > 20 || len < 6) {
        callback(new Error('请填写密码'));
      } else {
        callback();
      }
    },
    validateCode(rule, value, callback) {
      const len = value.length;
      if (len == 0 || len > 4) {
        callback(new Error('请填位验证码'));
      } else {
        callback();
      }
    },
    async setSrc() {
      const doc = await this.$tools.httpAgent('/plugin/captcha', 'get', {
        1: 1
      });
      this.src = doc.data.captcha;
      localStorage.setItem('captcha', doc.data.captchaid);
    },
    submitHandle: async function () {
      // const self = this;
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.form.captcha = localStorage.getItem('captcha');
          const doc = await this.$tools.httpAgent('/login', 'post', this.form, {
            login: false
          });
          if (doc.code === 200) {
            localStorage.setItem('jwt', JSON.stringify(doc.data));
            const menu = await this.$tools.httpAgent('/adminRole/user', 'get');// 获取用户菜单权限
            if (menu.code === 200) {
              localStorage.setItem('userMenu', menu.data.menu);
              document.location.href = '/';
            } else {
              this.$layer.msg('帐号或者密码错误');
              this.setSrc();
            }
          } else {
            // self.$layer.msg('帐号或者密码错误');
            this.setSrc();
          }
        }
      });
    }
  },
  mounted() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userMenu');
    localStorage.removeItem('menuIndex');
    this.setSrc();
  }
};
</script>
