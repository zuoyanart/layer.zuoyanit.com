<style lang="css">
</style>

<template>
  <div id="main">
    <div class="menu form">
      <a href="javascript:history.back();">返回</a>
    </div>
    <div class="list">
      <el-form ref="form" :model="form" :rules="rules" label-width="130px">
        <el-form-item label="标题" prop="name">
          <el-input v-model.trim="form.name" placeholder="请输入节点名称"></el-input>
        </el-form-item>
        <el-form-item label="标题图" prop="timg">
          <el-input
            v-model.trim="form.timg"
            placeholder="请输入图片路径"
            style="width:583px;display:inline-block;"
          ></el-input>
          <el-upload
            style="width:81px;display:inline-block;"
            class="upload-demo"
            action="/admin/upfile/local"
            accept="image/*"
            :on-success="upload"
            :show-file-list="false"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="连接地址" prop="link">
          <el-input v-model.trim="form.link" placeholder="请输入节点名称"></el-input>
        </el-form-item>
        <el-form-item label="正文类型" prop="article_type">
          <el-select v-model.trim="form.article_type">
            <el-option v-for="item in articleTypeOption" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="SEO keyword" prop="keyword">
          <el-input v-model.trim="form.keyword" placeholder="请输入keyword"></el-input>
        </el-form-item>
        <el-form-item label="SEO des" prop="seodes">
          <el-input
            type="textarea"
            :rows="4"
            v-model.trim="form.seodes"
            placeholder="请输入description"
          ></el-input>
        </el-form-item>
        <el-form-item label="权重" prop="weight">
          <el-input type="number" v-model.number="form.weight" placeholder="请输入权重"></el-input>
        </el-form-item>
        <el-form-item label="简短描述" prop="remark">
          <el-input
            type="textarea"
            :rows="4"
            v-model.trim="form.remark"
            placeholder="请输入description"
          ></el-input>
        </el-form-item>
        <el-form-item label="正文" prop="brief">
          <div id="brief" style="width:888px;height:350px;"></div>
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
      model: 'tree',
      form: {
        link: '',
        timg: '',
        weight: 0
      },
      articleTypeOption: [
        {
          label: '普通',
          value: ''
        },
        {
          label: '组图',
          value: 'photo'
        },
        {
          label: '视频',
          value: 'video'
        }
      ],
      rules: {
        name: [
          {
            required: true,
            message: '请填写1-20位的标题',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 20,
            message: '长度在 1 到 20 个字符',
            trigger: 'blur'
          }
        ],
        timg: [
          {
            required: false,
            min: 3,
            max: 300,
            message: '请上传图片',
            trigger: 'blur'
          }
        ],
        link: [
          {
            min: 1,
            max: 100,
            message: '长度在 1 到 100 个字符',
            trigger: 'blur'
          }
        ],
        keyword: [
          {
            min: 3,
            max: 100,
            message: '长度在 3 到 100 个字符',
            trigger: 'blur'
          }
        ],
        seodes: [
          {
            min: 3,
            max: 500,
            message: '长度在 3 到 500 个字符',
            trigger: 'blur'
          }
        ],
        weight: [
          { required: true, message: '权重不能为空' },
          { type: 'number', min: 0, max: 10000, message: '数字值0-10000' }
        ],
        remark: [
          {
            min: 3,
            max: 500,
            message: '长度在 1 到 500 个字符',
            trigger: 'blur'
          }
        ],
        brief: [
          {
            min: 1,
            max: 3000,
            message: '长度在 3 到 3000 个字符',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  components: {},
  methods: {
    upload (res) {
      if (res.errno === 0) {
        this.form.timg = res.data[0];
      }
    },
    before () {
      window.editor = new window.wangEditor('#brief');
      editor.customConfig.uploadImgServer = '/admin/upfile/local'; // 上传图片到服务器
      editor.customConfig.uploadFileName = 'file';
      editor.create();
      const pid = this.$route.query.pid;
      if (pid) {
        this.form.pid = pid;
      }
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
