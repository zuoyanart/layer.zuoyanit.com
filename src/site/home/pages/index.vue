<template>
  <div class="router-main">
    <div class="layerindex">
      <h1 class="h1-header">安装</h1>
      <div class="markdown-body" v-html="installMd"></div>

      <h1 class="h1-header">使用</h1>
      <h2 class="h2-header">alert</h2>
      <el-button type="primary" @click="alertBtn">基本</el-button>
      <el-button type="primary" @click="alertIconBtn">icon</el-button>
      <div class="markdown-body" v-html="alertMd"></div>

      <h2 class="h2-header">confirm</h2>
      <el-button type="primary" @click="confirmHandle">删除</el-button>
      <el-button type="primary" @click="confirmIconHandle">删除(自定义)</el-button>
      <div class="markdown-body" v-html="confirmMd"></div>

      <h2 class="h2-header">msg</h2>
      <el-button type="primary" @click="msgHandle">msg</el-button>
      <el-button type="primary" @click="msg1Handle">带回调</el-button>
      <div class="markdown-body" v-html="msgMd"></div>

      <h2 class="h2-header">loading</h2>
      <el-button type="primary" @click="loadingHandle">默认</el-button>
      <div class="markdown-body" v-html="loadingMd"></div>

      <!-- <h2 class="h2-header">prompt</h2>
      <el-button type="primary" @click="promptHandle">弹出</el-button>-->
      <h2 class="h2-header">tips</h2>
      <el-button type="primary" id="tips" @click="tipsHandle">上</el-button>
      <el-button type="primary" id="tips1" @mouseenter.native="tips1Handle">右</el-button>
      <br />
      <br />
      <el-button type="primary" id="tips2" @click="tips2Handle">下</el-button>
      <br />
      <br />
      <el-button type="primary" id="tips3" @click="tips3Handle">左-自定义样式</el-button>
      <div class="markdown-body" v-html="tipsMd"></div>

      <h2 class="h2-header">弹窗</h2>
      <el-button type="primary" id="tips" @click="pageHandle">自定义弹窗</el-button>
      <h5 class="h3-header">传递的数据</h5>
      {{iframeData}}
      <div class="markdown-body" v-html="iframeMd"></div>
      <h2 class="h2-header">表格测试</h2>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="confirmIconHandle(scope.$index, scope.row)"
            >删除</el-button>
            <el-button type="primary" id="tipst" @click="tipstHandle" size="mini">上</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import alertMd from '../assets/md/alert.md';
import installMd from '../assets/md/install.md';
import confirmMd from '../assets/md/confirm.md';
import msgMd from '../assets/md/msg.md';
import loadingMd from '../assets/md/loading.md';
import iframeMd from '../assets/md/iframe.md';
import tipsMd from '../assets/md/tips.md';

import formComp from './form.vue';

export default {
  data () {
    return {
      alertMd: alertMd,
      installMd: installMd,
      confirmMd: confirmMd,
      msgMd: msgMd,
      loadingMd: loadingMd,
      iframeMd: iframeMd,
      tipsMd: tipsMd,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      iframeData: {
        name: '11111',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: 'asdasdasd'
      }
    };
  },
  methods: {
    alertBtn () {
      this.$layer.alert(
        '这是个演示',
        {
          title: '演示1'
        },
        layerid => {
          this.$layer.close(layerid);
        }
      );
    },
    alertIconBtn () {
      this.$layer.alert(
        '这是个演示',
        {
          title: '演示1',
          icon: 2
        },
        layerid => {
          this.$layer.close(layerid);
        }
      );
    },
    confirmHandle () {
      this.$layer.confirm('确定要<br/>删除吗？', layerid => {
        this.$layer.msg('执行取消');
        this.$layer.close(layerid);
      });
    },
    confirmIconHandle () {
      this.$layer.confirm(
        '确定要删除吗？',
        {
          title: 'confirm',
          btn: ['确定', '取消'],
          icon: 3
        },
        layerid => {
          this.$layer.msg('执行了删除');
          this.$layer.close(layerid);
        },
        layerid => {
          this.$layer.msg('执行取消');
          this.$layer.close(layerid);
        }
      );
    },
    msgHandle () {
      this.$layer.msg('弱弱的提示');
    },
    msg1Handle () {
      this.$layer.msg(
        '5s后执行',
        {
          time: 5
        },
        layerid => {
          alert('我执行了');
          this.$layer.close(layerid);
        }
      );
    },
    loadingHandle () {
      this.$layer.loading({
        time: 5
      });
    },
    promptHandle () {
      this.$layer.prompt('你好');
    },
    pageHandle () {
      this.$layer.iframe({
        content: {
          content: formComp,
          parent: this,
          data: { iframeData: this.iframeData }
        },
        area: ['900px', '600px'],
        title: '这是一个标题',
        maxmin: true,
        shade: false,
        shadeClose: false,
        cancel: () => {
          alert('关闭iframe');
        }
      });
    },
    tipsHandle () {
      this.$layer.tips('在很久很久以前', '#tips', {
        tips: 0,
        time: 100
      });
    },
    tips1Handle () {
      this.$layer.tips(
        '在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，',
        '#tips1',
        {
          tips: 1,
          time: 100
        }
      );
    },
    tips2Handle () {
      this.$layer.tips(
        '在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，',
        '#tips2',
        {
          tips: 2
        }
      );
    },
    tips3Handle () {
      this.$layer.tips(
        '在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，',
        '#tips3',
        {
          tips: [
            3,
            {
              selfClassName: true
            }
          ],
          time: 10
        }
      );
    },
    tipstHandle () {
      this.$layer.tips(
        '在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，',
        '#tipst',
        {
          tips: [
            3,
            {
              selfClassName: true
            }
          ],
          time: 10
        }
      );
    }
  },
  components: {},
  async mounted () {}
};
</script>
<style lang="less" scoped>
@import "../assets/less/index.less";
</style>
<style>
</style>
