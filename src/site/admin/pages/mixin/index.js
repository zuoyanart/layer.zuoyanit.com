/**
 * @Author: 左盐
 * @Date:   2018-06-09 16:09:38
 * @Email:  huabinglan@163.com
 * @Project: xxx
 * @Last modified by:   左盐
 * @Last modified time: 2018-06-09 16:09:40
 */

const mixin = {
  data: function () {
    return {
      apiPrefix: '',
      model: 'user',
      tableData: [],
      checkedAll: [],
      apiParams: {
        cp: 1,
        kw: '',
        mp: 30
      },
      total: 0
    };
  },
  methods: {
    edit(id = 0) {
      this.$router.push(this.$route.path + '/edit/?id=' + id);
    },
    jump(url = '') {
      this.$router.push('/' + this.model + url);
    },
    checkAll(val) {
      this.checkedAll = val;
    },
    currentChange(cp) {
      this.apiParams.cp = cp;
      this.page();
    },
    search(options) {
      this.apiParams.kw = options.kw;
      this.apiParams.cp = 1;
      this.page();
    },
    before() {},
    after() {},
    async page(option = {}) {
      await this.before();
      if (option.cp) {
        this.apiParams.cp = option.cp;
      }
      if (option.kw !== undefined) {
        this.apiParams.kw = option.kw;
      }

      if (this.apiParams.cp === 1) {
        this.tableData = [];
      }
      const doc = await this.$tools.httpAgent(this.apiPrefix + '/' + this.model, 'get', this.apiParams);
      if (doc.code === 200) {
        await this.after(doc.data);
        this.tableData = doc.data.data;
        this.total = parseInt(doc.data.total);

      }
    },
    del(row) {
      if (row) {
        this.checkedAll = [row];
      }
      const id = this.$tools.getId(this.checkedAll);
      if (id === '') {
        return;
      }
      const layerid = this.$layer.confirm('您确定要删除吗?', {
        title: '警告'
      }, async () => {
        const doc = await this.$tools.httpAgent(this.apiPrefix + '/' + this.model, 'delete', {
          id: id
        });
        this.$layer.close(layerid);
        if (doc.code === 200) {
          for (let i = 0, l = this.checkedAll.length; i < l; i++) {
            const index = this.tableData.indexOf(this.checkedAll[i]);
            this.tableData.splice(index, 1);
          }
        }
      });
    }
  },
  mounted() {
    this.page();
  },
  components: {

  }
};

module.exports = mixin;