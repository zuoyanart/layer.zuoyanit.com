<style lang="css">
</style>

<template>
  <div id="main">
    <div class="menu form">
      <a href="javascript:history.back();">返回</a>
    </div>
    <div class="list">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder :readonly="userNameReadonly"></el-input>
        </el-form-item>
        <el-form-item label="用户组" prop="user_admin_group_id">
          <el-select v-model="form.user_admin_group_id" @change="pageRole">
            <el-option
              v-for="item in groupOption"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="角色" prop="adminrole_id">
          <el-select v-model="form.adminrole_id">
            <el-option
              v-for="item in roleOption"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="form.nickname" placeholder></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="为空则不更新密码"></el-input>
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
      model: 'userAdmin',
      userNameReadonly: false,
      groupOption: [],
      roleOption: [],
      rules: {
        username: [
          {
            required: true,
            message: '请填写1-20位的用户名',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 20,
            message: '长度在1 到 20 个字符',
            trigger: 'blur'
          }
        ],
        nickname: [
          {
            required: true,
            message: '请填写1-20位的昵称',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 20,
            message: '长度在 1 到 20 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请填写6-12位的密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 12,
            message: '长度在 1 到 12 个字符',
            trigger: 'blur'
          }
        ],
        user_admin_group_id: [
          {
            required: true,
            type: 'integer',
            min: 1,
            max: 2000000,
            message: '请选择分组',
            trigger: 'blur'
          }
        ],
        adminrole_id: [
          {
            required: true,
            type: 'integer',
            min: 1,
            message: '请选择角色',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  components: {},
  methods: {
    async pageGroup() {
      const doc = await this.$tools.httpAgent('/userAdminGroup', 'get', {
        cp: 1,
        mp: 100
      });
      if (doc.code === 200) {
        let data = doc.data.data;
        if (this.id === 0) {
          const defaultGroup = [{
            id: 0,
            name: '请选择分组'
          }];
          data = defaultGroup.concat(data);
          this.form.user_admin_group_id = 0;
        }
        this.groupOption = data;
      }
    },
    async pageRole(groupid) {
      const doc = await this.$tools.httpAgent('/adminRole', 'get', {
        cp: 1,
        mp: 100,
        groupid
      });
      if (doc.code === 200) {
        let data = doc.data.data;
        if (data.length === 0) {
          data = [{
            id: 0,
            name: '请选择角色'
          }];
          this.form.adminrole_id = 0;
        }
        this.roleOption = data;
      }
    },
    async before() {
      if (this.id > 0) {
        this.userNameReadonly = true;
        this.rules.password[0].required = false;
      }
      await this.pageGroup();
    },
    async getResult(doc) {
      await this.pageRole(doc.data.user_admin_group_id);
    }
  },
  async mounted() {

  }
};
</script>
