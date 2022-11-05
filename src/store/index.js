import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formURL: "https://wujy775ovp7wum6cqainbhh5ly0sbjnl.lambda-url.us-east-1.on.aws/",
    s3ContentsUrl: "https://kvbgno6xuecq2fufxsrua37iju0mbcsi.lambda-url.us-east-1.on.aws/",
    bucket: "battleroyaleboston",
    sponsorsPrefix: "sponsors",
    region: "us-east-1",

  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
