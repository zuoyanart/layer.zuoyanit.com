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
        <el-form-item>
          <el-button type="primary" @click="submitHandle">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import editMixin from '../mixin/edit.js';
export default {
  mixins: [editMixin],
  data () {
    return {
      model: 'userGroup',
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
  components: {},
  methods: {
    submitFormat () {

    }
  },
  async mounted () { }
};
</script>

<style lang="less" scoped>
</style>
