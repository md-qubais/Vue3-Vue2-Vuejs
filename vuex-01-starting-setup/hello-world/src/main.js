import { createApp } from 'vue'
// import Vuex from "vuex";
import App from './App.vue'
// import Vue from 'vue'
import Vuex from 'vuex'
const app=createApp(App)

app.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
console.log(store)

app.mount("#app")
