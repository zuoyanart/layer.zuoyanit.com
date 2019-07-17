<style lang="css">
#content {
  /*width:1000px;*/
  height: 500px;
}
</style>

<template>
  <div id="main">
    <div class="menu form">
      <a href="javascript:history.back();">返回</a>
    </div>
    <div class="list">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input v-model.trim="form.title" placeholder="请输入活文章标题"></el-input>
        </el-form-item>
        <el-form-item label="节点">
          <el-select v-model.trim="form.nodeid">
            <el-option v-for="item in nodeOptions" :label="item.text" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题图片" prop="timg">
          <el-input v-model.trim="form.timg" id="timg" style="width:583px;display:inline-block;"></el-input>
          <el-upload
            style="width:81px;display:inline-block;"
            class="upload-demo"
            :action="this.$siteConfig.uploadUrl + '/upload/img'"
            accept="image/*"
            :on-success="upload"
            :show-file-list="false"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="文章连接" prop="link">
          <el-input v-model.trim="form.link"></el-input>
        </el-form-item>
        <el-form-item label="文章来源" prop="source">
          <el-input v-model.trim="form.source"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="brief">
          <el-input type="textarea" v-model.trim="form.brief" :rows="4"></el-input>
        </el-form-item>
        <el-form-item label="正文">
          <div id="content" style="height:350px;"></div>
        </el-form-item>
        <el-form-item label="标签" prop="tags">
          <el-input v-model.trim="form.tags"></el-input>
        </el-form-item>
        <el-form-item label="附加" prop="xs">
          <el-select v-model.trim="form.pass">
            <el-option v-for="item in passOption" :label="item.text" :value="item.value"></el-option>
          </el-select>
          <el-select v-model.trim="form.reco">
            <el-option v-for="item in recoOption" :label="item.text" :value="item.value"></el-option>
          </el-select>
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
      model: 'article',
      form: {
        nodeid: 1,
        timg: '',
        pass: 1,
        reco: 0
      },
      nodeOptions: [
        {
          text: '首页',
          value: 1
        }
      ],
      passOption: [
        {
          text: '审核',
          value: 1
        },
        {
          text: '未审核',
          value: 0
        }
      ],
      recoOption: [
        {
          text: '不推荐',
          value: 0
        },
        {
          text: '1级推荐',
          value: 1
        }
      ],
      rules: {
        title: [
          {
            required: true,
            message: '请填写1-60位的标题',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 60,
            message: '长度在 1 到 60 个字符',
            trigger: 'blur'
          }
        ],
        timg: [
          {
            min: 1,
            max: 100,
            message: '长度在 1 到 100 个字符',
            trigger: 'blur'
          }
        ],
        link: [
          {
            min: 5,
            max: 100,
            message: '长度在 5 到 100 个字符',
            trigger: 'blur'
          }
        ],
        source: [
          {
            min: 1,
            max: 100,
            message: '长度在 1 到 100 个字符',
            trigger: 'blur'
          }
        ],
        breif: [
          {
            min: 3,
            max: 500,
            message: '长度在 3 到 500 个字符',
            trigger: 'blur'
          }
        ],
        tags: [
          {
            min: 1,
            max: 100,
            message: '长度在 1 到 100 个字符',
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
        alert(res.data[0]);
        alert(this.form.timg);
      }
    },
    /**
     * 递归格式化nodelist
     * @method fomatNodeList
     * @param  {[type]}      pid  [description]
     * @param  {[type]}      data [description]
     * @return {[type]}           [description]
     */
    formatNodeList: function (pid, data, na) {
      const s = '';
      for (let i = 0, len = data.length; i < len; i++) {
        if (data[i].pid === pid) {
          na.push({
            text: this.setNodeListGap(data[i].nodepath) + data[i].name,
            value: data[i].id
          });
          this.formatNodeList(data[i].id, data, na);
        }
      }
      return s;
    },
    /**
     * fomat nodelist 添加制表符
     * @method setNodeListGap
     * @param  {[type]}       nodepath [description]
     */
    setNodeListGap: function (nodepath) {
      const l = nodepath.split(',').length - 3;
      let s = '';
      if (l === 0) {
        return s;
      } else {
        s += '├';
        for (let i = 0; i < l; i++) {
          s += '─ ';
        }
        return s;
      }
    },
    before () {
      window.editor = new window.wangEditor('#content');
      editor.customConfig.uploadImgServer = this.$siteConfig.uploadUrl + '/upload/img'; // 上传图片到服务器
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
  async mounted () {
    // 获取node
    const nodes = await this.$tools.httpAgent('/tree/all', 'get');
    const nodesArray = [
      {
        text: '首页',
        value: 1
      }
    ];
    this.formatNodeList(1, nodes.data, nodesArray);
    this.nodeOptions = nodesArray;
  }
};
</script>
