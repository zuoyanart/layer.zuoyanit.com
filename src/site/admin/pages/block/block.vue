<style lang="css">
</style>

<template>
  <div id="main">
    <base-mulmenu @search="search">
      <router-link to="/block/edit" v-has:add>添加</router-link>|
      <em @click="del()" v-has:del>删除</em>
    </base-mulmenu>
    <el-table :data="tableData" border @selection-change="checkAll">>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="id" width="100"></el-table-column>
      <el-table-column prop="title" label="模块名称"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row.id)" v-has:edit>编辑</el-button>
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
      model: 'block'
    };
  },
  async mounted () { },
  methods: {},
  components: {}
};
</script>
