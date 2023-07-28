import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formURL: "https://wujy775ovp7wum6cqainbhh5ly0sbjnl.lambda-url.us-east-1.on.aws/",
    contestantURL: "https://aji5nf5yzj3waugvxo2pvviphe0jsskv.lambda-url.us-east-1.on.aws/",
    s3ContentsUrl: "https://kvbgno6xuecq2fufxsrua37iju0mbcsi.lambda-url.us-east-1.on.aws/",
    EBLink: "https://www.eventbrite.com/e/battle-royale-broadways-best-tickets-429337930307",
    bucket: "battleroyaleboston", //s3 bucket (largely unused)
    sponsorsPrefix: "sponsors",
    doorFee: "TBD",
    onlineFee: "TBD",
    region: "us-east-1", //AWS region
    eventDate: "6, April 2024", //Date event takes place
    doorsTime: "4:00 PM", //Time doors open
    eventTime: "5:00 PM" //Event start time

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
