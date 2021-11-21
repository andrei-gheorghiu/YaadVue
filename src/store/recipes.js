export default {
  name: 'recipes',
  namespaced: true,
  state: {
    entries: []
  },
  actions: {},
  mutations: {
    ADD_RECIPE (state, recipe) {
      const index = state.entries.findIndex(({ id }) => id === recipe.id);
      if (index > -1) {
        state.entries.splice(index, 1, {
          ...state.entries[index],
          ...recipe
        });
      } else {
        state.entries.push(recipe);
      }
    },
    REMOVE_RECIPE (state, id) {
      const index = state.entries.findIndex(r => r.id === id);
      if (index > -1) {
        state.entries.splice(index, 1);
      }
    }
  },
  getters: {}
};
