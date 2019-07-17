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
      id: 0,
      form: {},
      rules: {}
    };
  },
  methods: {
    submitFormat() {},
    submitHandle: async function () {
      this.$refs.form.validate(async valid => {
        if (valid) {
          const op = this.id ? 'put' : 'post';
          await this.submitFormat();
          const doc = await this.$tools.httpAgent(this.apiPrefix + '/' + this.model, op, this.form);
          if (doc.code === 200) {
            history.back();
          }
        }
      });
    },
    before() {},
    getResult(doc) {},
    after() {},
    async getInfo() {
      this.id = this.$route.query.id || 0;
      await this.before();
      if (this.id) {
        const doc = await this.$tools.httpAgent(this.apiPrefix + '/' + this.model + '/' + this.id, 'get', {
          id: this.id
        });
        if (doc.code === 200) {
          this.form = doc.data;
          this.getResult(doc);
        }
      }
      await this.after();
    }
  },
  mounted() {
    this.getInfo();
  },
  components: {

  }
};

module.exports = mixin;