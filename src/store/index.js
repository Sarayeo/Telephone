import { createStore } from 'vuex'

export default createStore({
  state: {
    compteur: 0
  },
  getters: {
  },
  mutations: {
    increment(state) {
      state.compteur++ 
    }
  },
  actions: {
  },
  modules: {
  }
})
