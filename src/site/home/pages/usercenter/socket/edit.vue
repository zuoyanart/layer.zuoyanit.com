<style lang="css">
</style>

<template>
  <div id="main">
    <div class="list">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="应用名称" prop="name">
          <el-input v-model="form.name" placeholder></el-input>
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
      model: 'socket',
      rules: {
        name: [
          {
            required: true,
            message: '请填写1-20位的应用名',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 20,
            message: '长度在1 到 20 个字符',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  components: {},
  methods: {
    async before() {
    },
  },
  async mounted() {
  }
};
</script>
