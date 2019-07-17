<style lang="css">
</style>

<template>
  <div id="main">
    <div class="list">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" style="width:1000px">
        <el-form-item label="任务名称" prop="name">
          <el-input v-model.trim="form.name" placeholder></el-input>
        </el-form-item>
        <el-form-item label="执行规则" prop="cron">
          <el-input v-model.trim="form.cron" :readonly="true">
            <el-button slot="append" @click.native="openCron" icon="el-icon-search"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="请求地址" prop="url">
          <div style="display:flex;padding-right:10px;">
            <el-input v-model.trim="form.url" placeholder style="flex:1;margin-right:10px;"></el-input>
            <el-select v-model="form.method" placeholder style="width:100px;">
              <el-option key="get" value="get" label="get"></el-option>
              <el-option key="post" value="post" label="post"></el-option>
              <el-option key="put" value="put" label="put"></el-option>
              <el-option key="delete" value="delete" label="delete"></el-option>
            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="请求参数" prop="param">
          <el-input v-model.trim="form.param" placeholder="可以为字符串也可以为json，注意避免特殊字符"></el-input>
        </el-form-item>
        <el-form-item label="是否执行" prop="runstate" v-if="id==0">
          <el-select v-model.trim="form.runstate">
            <el-option key="0" :value="0" label="立即执行"></el-option>
            <el-option key="1" :value="1" label="稍后执行"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否告警" prop="notice">
          <el-select v-model.trim="form.notice">
            <el-option key="0" :value="0" label="告警"></el-option>
            <el-option key="1" :value="1" label="忽略错误"></el-option>
          </el-select>
          <el-tooltip
            class="item"
            effect="dark"
            content="超时或者http code不为200时是否发送告警"
            placement="top-start"
          >
            <i class="el-icon-question"></i>
          </el-tooltip>
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
import crontab from './crontab';
export default {
  mixins: [baseMixin],
  data() {
    return {
      model: 'task',
      form: {
        url: '',
        param: '',
        cron: '* * * * * *',
        runstate: 0,
        method: 'get',
        notice: 0
      },
      rules: {
        name: [{
          required: true,
          message: '请填写1-20位的名称',
          trigger: 'blur'
        }, {
          min: 1,
          max: 20,
          message: '长度在1 到 20 个字符',
          trigger: 'blur'
        }],
        url: [{
          required: true,
          message: '请填写1-200位的描述',
          trigger: 'blur'
        }, {
          min: 1,
          max: 200,
          message: '长度在1 到 200 个字符',
          trigger: 'blur'
        }, {
          pattern: /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i,
          message: '请输入合法的url地址'
        }]
      }
    };
  },
  components: {
    'base-crontab': crontab
  },
  methods: {
    openCron() {
      this.$layer.iframe({
        content: {
          content: crontab,
          parent: this,
          data: {
            data: this.form.cron
          }
        },
        area: ['565px', '400px'],
        title: '选择'
      });
    },
    cronChange(data) {
      console.log(data);
    },
    async before() {
      this.form.groupid = this.$route.params.groupid;
    },
  },
  async mounted() {
    this.$on('change', (data) => {
      // this.form.cron = data;
      this.$set(this.form, 'cron', data);
      console.log(this.form);
    });
  }
};
</script>
