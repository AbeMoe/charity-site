import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formURL: "https://wujy775ovp7wum6cqainbhh5ly0sbjnl.lambda-url.us-east-1.on.aws/",
    contestantURL: "https://aji5nf5yzj3waugvxo2pvviphe0jsskv.lambda-url.us-east-1.on.aws/",
    s3ContentsUrl: "https://kvbgno6xuecq2fufxsrua37iju0mbcsi.lambda-url.us-east-1.on.aws/",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf7qbg4jrs62ny3dmR4svEPLSFW5upQIi4Vt21loylZFcrSkQ/viewform",
    ticketLink: "https://www.eventbrite.com/e/battle-royale-boston-2024-tickets-713930103157",
    donateLink: "https://square.link/u/QPk7wiDX",
    bucket: "battleroyaleboston", //s3 bucket (Mostly for storing sponsor photos)
    sponsorsPrefix: "sponsors",
    doorFee: "$40",
    onlineFee: "$35",
    vipFee: "$80 (Online Only)",
    entryFee: "$75",
    region: "us-east-1", //AWS region
    eventDate: "6, April 2024", //Date event takes place
    doorsTime: "4:00 PM", //Time doors open
    eventTime: "5:00 PM", //Event start time
    arrivalTime: "3:00 PM",
    registrationStart: "1 January 2024",
    registrationEnd: "29 February 2024",
    entryFeePaid: "15 March 2024",
    musicDeadLine: "23 March 2024",
    charityBenefactor: "The Veteran's Appreciation and Support Foundation",

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
