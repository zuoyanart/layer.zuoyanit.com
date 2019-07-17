<template>
  <div id="main">
    <div class="menu form">
      <a href="javascript:history.back();">返回</a>
    </div>
    <div class="list">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="组名称" prop="title">
          <el-input v-model="form.name" placeholder="请输入组名称"></el-input>
        </el-form-item>
        <el-form-item label="请选择权限" prop="title">
          <user-menu ref="userMenu" :menukey="form.menukey"></user-menu>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitHandle">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import editMixin from '../mixin/edit.js';
import userMenu from '../../components/userMenu/index';
export default {
  mixins: [editMixin],
  data() {
    return {
      model: 'adminRole',
      rules: {
        name: [
          {
            required: true,
            message: '请填写1-40位的名称',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 40,
            message: '长度在 1 到 40 个字符',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  components: {
    'user-menu': userMenu
  },
  methods: {
    test() {
      const data = this.$refs.userMenu.getNode();
    },
    submitFormat() {
      const data = this.$refs.userMenu.getNode();
      this.form.menu = data[0];
      this.form.endmenu = data[1];
      this.form.menukey = data[2];
      const groupid = this.$route.query.groupid;
      if (groupid) {
        this.form.groupid = groupid;
      }
    }
  },
  async mounted() { }
};
</script>

<style lang="less" scoped>
</style>
