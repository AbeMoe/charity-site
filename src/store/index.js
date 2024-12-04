import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formURL: "https://wujy775ovp7wum6cqainbhh5ly0sbjnl.lambda-url.us-east-1.on.aws/",
    contestantURL: "https://aji5nf5yzj3waugvxo2pvviphe0jsskv.lambda-url.us-east-1.on.aws/",
    s3ContentsUrl: "https://kvbgno6xuecq2fufxsrua37iju0mbcsi.lambda-url.us-east-1.on.aws/",

    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSchFagYH-aEg7iftmWnWSihAV_bmq_IwuX3ktXemf11jTBqtA/viewform?usp=sf_link",
    vipTicketLink: "https://square.link/u/Cye5VdAv",
    generalTicketLink: "https://square.link/u/jZFcJhps",
    donateLink: "https://square.link/u/QPk7wiDX",
    sponsorLink: "https://square.link/u/EPuBQCcM",
    bucket: "battleroyaleboston", //s3 bucket (Mostly for storing sponsor photos)
    sponsorsPrefix: "sponsors",
    doorFee: "$40",
    onlineFee: "$35",
    vipFee: "$80 (Online Only)",
    entryFee: "$75",
    prizeAmount: "$1000",
    region: "us-east-1", //AWS region
    eventDate: "5, April 2024", //Date event takes place
    doorsTime: "4:00 PM", //Time doors open
    eventTime: "5:00 PM", //Event start time
    arrivalTime: "3:00 PM",
    registrationStart: "1 January 2025",
    registrationEnd: "29 February 2025",
    entryFeePaid: "1 March 2025",
    musicDeadLine: "23 March 2025",
    charityBenefactor: "Shriners Hospital Transportation Fund",

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
