<style lang="css">
</style>

<template>
  <div id="main">
    <div class="list">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="分组名称" prop="groupname">
          <el-input v-model="form.groupname" placeholder></el-input>
        </el-form-item>
        <el-form-item label="告警联系人" prop="notice_phone">
          <el-input v-model="form.notice_phone" placeholder="英文逗号隔开的手机号"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="remarks">
          <el-input v-model="form.remarks" placeholder></el-input>
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
      model: 'taskgroup',
      rules: {
        groupname: [{
          required: true,
          message: '请填写1-20位的名称',
          trigger: 'blur'
        }, {
          min: 1,
          max: 20,
          message: '长度在1 到 20 个字符',
          trigger: 'blur'
        }],
        notice_phone: [{
          required: true,
          message: '请填写手机号码',
          trigger: 'blur'
        }, {
          validator: this.validatePhone,
          trigger: 'blur',
          message: '请填写合法的用英文逗号隔开的手机号'
        }],
        remarks: [{
          required: true,
          message: '请填写1-200位的描述',
          trigger: 'blur'
        }, {
          min: 1,
          max: 200,
          message: '长度在1 到 200 个字符',
          trigger: 'blur'
        }
        ],
      }
    };
  },
  components: {},
  methods: {
    async before() {
    },
    validatePhone(rule, value, callback) {//验证手机号
      const phone = value.split(',');
      const reg = /^[1]([3-9])[0-9]{9}$/;
      let isCheck = true;
      for (let i = 0, len = phone.length; i < len; i++) {
        if (!reg.test(phone[i])) {//没有通过验证
          isCheck = false;
          break;
        }
      }
      if (!isCheck) {
        callback('手机号码不合法');
      }
      callback();
    }
  },
  async mounted() {
  }
};
</script>
