import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {

  },
  modules: {
    user
  },
  mutations: {

  },
  strict: false
});

export default store
;
