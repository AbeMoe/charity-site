<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col :cols="getColWidth" class="headline"
        ><h1 class="white--text basker-text">Charity Sponsors</h1></v-col
      >
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col :cols="getColWidth" class="headline">
        <h3 class="white--text basker-text">
          Charity Sponsors Battle Royale could not be made possible without the
          continuous support from our sponsors. If you would like to become a
          sponsor, please <a class="text-link">click here</a>.
        </h3>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row>
      <v-spacer> </v-spacer>
      <v-col cols="3" v-for="(photo, index) in photos" :key="index">
        <v-img contain :src="photo" />
      </v-col>
      <v-spacer> </v-spacer>
    </v-row>
  </v-container>
</template>

<script>
const axios = require("axios").default;
import store from "../store/index";

export default {
  name: "Sponsors",

  data: () => ({
    buttons: ["Home", "Tickets", "Contact", "More"],
    photos: [],
  }),
  async mounted() {
    var body = {
      bucket: store.state.bucket,
      prefix: store.state.sponsorsPrefix,
    };
    const res = await axios.post(store.state.s3ContentsUrl, body);
    const photoKeys = res.data["response"].slice(1); //Remove directory at the start

    for (var key of photoKeys) {
      this.photos.push(
        `https://${store.state.bucket}.s3.${store.state.region}.amazonaws.com/${key}`
      );
    }
    console.log(this.photos);
  },
  computed: {
    getColWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 10;
        case "sm":
          return 10;
        case "md":
          return 6;
        case "lg":
          return 6;
        case "xl":
          return 6;
      }
    },
  },
};
</script>

<style scoped>
.headline {
  text-align: center;
}
</style>
