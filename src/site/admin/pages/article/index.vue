<style lang="css">
.node-select {
  position: absolute !important;
  top: -2px;
  width: 200px;
  height: 37px;
  left: 170px;
}
</style>

<template>
  <div id="main">
    <base-mulmenu @search="search">
      <el-select class="node-select" @change="nodeSelect" v-model="apiParams.nodeid">
        <el-option v-for="item in nodeOptions" :label="item.text" :value="item.value"></el-option>
      </el-select>
      <router-link to="/article/edit" v-has:add>添加</router-link>
      <em @click="pass()" v-has:pass>审核</em>
      <em @click="del()" v-has:del>删除</em>
    </base-mulmenu>
    <el-table :data="tableData" border @selection-change="checkAll">
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column prop="title" label="标题">
        <template slot-scope="scope">[{{scope.row.nodename}}]{{scope.row.title}}</template>
      </el-table-column>
      <el-table-column label="创建时间" width="170">
        <template slot-scope="scope">{{scope.row.create_time | formatTime}}</template>
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row.id)" v-has:edit>编辑</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="pass(scope.row,true)"
            v-if="scope.row.pass == 0"
            v-has:pass
          >审核</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="pass(scope.row, false)"
            v-else
            v-has:pass
          >取消审核</el-button>
          <el-button size="mini" @click="del(scope.row)" v-has:del>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top:30px;text-align:right;margin-right:20px;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="apiParams.mp"
        @current-change="currentChange"
        v-if="total>apiParams.mp"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import baseMixin from '../mixin/index.js';
export default {
  mixins: [baseMixin],
  data () {
    return {
      model: 'article',
      nodeOptions: [],
      apiParams: {
        nodeid: 1,
        cp: 1,
        kw: '',
        mp: 20
      }
    };
  },
  async mounted () {
    // 获取node
    const nodes = await this.$tools.httpAgent('/tree/all', 'get');
    const nodesArray = [
      {
        text: '全部',
        value: 1
      }
    ];
    this.formatNodeList(1, nodes.data, nodesArray);
    this.nodeOptions = nodesArray;
  },
  methods: {
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
    async nodeSelect (nodeid) {
      this.apiParams = Object.assign(this.apiParams, {
        cp: 1,
        nodeid
      });
      await this.page();
    },
    async pass (row, state) {
      const passState = state === undefined ? true : state;
      if (row) {
        this.checkedAll = [row];
      }
      const id = this.$tools.getId(this.checkedAll);
      if (id === '') {
        return;
      }
      const res = await this.$tools.httpAgent('/article/pass', 'post', {
        id: id,
        ispass: passState
      });
      for (let i = 0, l = this.checkedAll.length; i < l; i++) {
        this.checkedAll[i].pass = passState ? 1 : 0;
      }
    }
  },
  components: {}
};
</script>
