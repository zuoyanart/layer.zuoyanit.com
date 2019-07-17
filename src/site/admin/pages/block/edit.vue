<style lang="css">
</style>

<template lang="html">

<div id="main">
    <div class="menu form">
        <a href="javascript:history.back();">返回</a>
    </div>
    <div class="list">
    <el-form  ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="标题" prop="title">
            <el-input v-model="form.title" placeholder="请输入模块标题"></el-input>
        </el-form-item>
        <el-form-item label="正文" prop="content">
            <div id="content" v-model="form.content" style="height:350px;"></div>
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
      model: 'block',
      rules: {
        title: [
          {
            required: true,
            message: '请填写1-40位的标题',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 40,
            message: '长度在 1 到 40 个字符',
            trigger: 'blur'
          }
        ],
        content: {
          required: false,
          min: 1,
          max: 300,
          message: '请填写1-20位的名称'
        }
      }
    };
  },
  components: {},
  methods: {
    before () {
      window.editor = new window.wangEditor('#content');
      editor.customConfig.uploadImgServer = '/admin/upfile/local'; // 上传图片到服务器
      editor.customConfig.uploadFileName = 'file';
      editor.create();
    },
    getResult (doc) {
      editor.txt.html(doc.data.content);
    },
    submitFormat () {
      this.form.content = escape(editor.txt.html());
    }
  },
  async mounted () { }
};
</script>
