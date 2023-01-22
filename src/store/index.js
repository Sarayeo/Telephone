import { createStore } from 'vuex'

export default createStore({
  state: {
    inputValue: "",
    contactList: [
      {name: "yayyyaaa", number: "01020304"},
      {name: "Sara", number: "777776669"},
    ],
    historyCalls: [
    ]
  },
  getters: {
  },
  mutations: {
    insertContact(state, contact){
      state.contactList.unshift(contact)
    },
    addHistory(state, history){
      state.historyCalls.unshift(history)
    }
  },
  actions: {
  },
  modules: {
  }
})
