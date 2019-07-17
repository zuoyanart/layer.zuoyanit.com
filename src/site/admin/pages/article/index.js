< style lang = "css" >
  .node - select {
    position: absolute!important;
    top: -2 px;
    width: 200 px;
    height: 37 px;
    left: 170 px;
  } <
  /style>

  <
  template >
  <
  div id = "main" >
  <
  base - mulmenu @search = "search" >
  <
  el - select class = "node-select"
@change = "nodeSelect"
v - model = "apiParams.nodeid" >
  <
  el - option v -
  for = "item in nodeOptions": label = "item.text": value = "item.value" > < /el-option> < /
  el - select > <
  router - link to = "/article/edit" > 添加 < /router-link> | <em @click="pass()">审核</em > | < em @click = "del()" > 删除 < /em> < /
  base - mulmenu > <
  el - table: data = "tableData"
border @selection - change = "checkAll" >
  <
  el - table - column type = "selection"
width = "40" > < /el-table-column> <
el - table - column prop = "title"
label = "标题" >
  <
  template slot - scope = "scope" > [{
    {
      scope.row.nodename
    }
  }] {
    {
      scope.row.title
    }
  } <
  /template> < /
  el - table - column > <
  el - table - column label = "创建时间"
width = "170" >
  <
  template slot - scope = "scope" > {
    {
      scope.row.create_time | formatTime
    }
  } <
  /template> < /
  el - table - column > <
  el - table - column label = "操作"
width = "300" >
  <
  template slot - scope = "scope" >
  <
  el - button size = "mini"
type = "primary"
@click = "edit(scope.row.id)" > 编辑 < /el-button> <
el - button size = "mini"
type = "primary"
@click = "pass(scope.row,true)"
v -
  if = "scope.row.pass == 0" > 审核 < /el-button> <
el - button size = "mini"
type = "primary"
@click = "pass(scope.row, false)"
v -
  else >取消审核 < /el-button> <
el - button size = "mini"
@click = "del(scope.row)" > 删除 < /el-button> < /
  template > <
  /el-table-column> < /
  el - table > <
  div style = "margin-top:30px;text-align:right;margin-right:20px;" >
  <
  el - pagination background layout = "prev, pager, next": total = "total": page - size = "apiParams.mp"
@current - change = "currentChange"
v -
  if = "total>apiParams.mp" > < /el-pagination> < /
div > <
  /div> </template >

  <
  script >
  import baseMixin from "../mixin/index.js";
export default {
  mixins: [baseMixin],
  data() {
    return {
      model: "article",
      nodeOptions: [],
      apiParams: {
        nodeid: 1,
        cp: 1,
        kw: "",
        mp: 50
      }
    };
  },
  async mounted() {
    //获取node
    let nodes = await this.$tools.httpAgent("/admin/tree/pageall", "post");
    let nodesArray = [{
      text: "全部",
      value: 1
    }];
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
      let s = "";
      for (let i = 0, len = data.length; i < len; i++) {
        if (data[i].pid == pid + "") {
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
      let l = nodepath.split(",").length - 3;
      let s = "";
      if (l == 0) {
        return s;
      } else {
        s += "├";
        for (let i = 0; i < l; i++) {
          s += "─ ";
        }
        return s;
      }
    },
    async nodeSelect(nodeid) {
      this.apiParams = Object.assign(this.apiParams, {
        cp: 1,
        nodeid
      });
      await this.page();
    },
    async pass(row, state) {
      let passState = state == undefined ? true : state;
      if (row) {
        this.checkedAll = [row];
      }
      let id = this.$tools.getId(this.checkedAll);
      if (id == "") {
        return;
      }
      let res = await this.$tools.httpAgent("/admin/article/pass", "post", {
        id: id,
        ispass: passState
      });
      for (let i = 0, l = this.checkedAll.length; i < l; i++) {
        this.checkedAll[i].pass = passState ? 1 : 0;
      }
    }
  },
  components: {}
}; < /script>
