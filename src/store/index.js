import Vue from 'vue';
import Vuex from 'vuex';
import recipes from './recipes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    utilityIcon: 'Database'
  },
  actions: {},
  mutations: {
    setUtilityIcon (state, icon) {
      state.utilityIcon = icon;
    }
  },
  getters: {},
  modules: {
    recipes
  }
});
