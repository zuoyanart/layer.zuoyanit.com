const state = {
  userInfo: null,
  munu: []
};

const getters = {
  getToken (state) {
    // return tools.getCookie('username');
  }
};
const mutations = {
  setToken (state, tokenValue) {
    state.token = tokenValue;
  },
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo;
  },
  setUserMenu (state, menu) {
    state.menu = menu;
  }
};
const actions = {
  async setUserInfo () {

  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
