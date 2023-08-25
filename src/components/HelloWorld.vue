<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h2
        class="white--text basker-text"
        > Do you have what it takes to be the next Battle Royale Champion? </h2>
        <h1      class="white--text">
            {{eventDate}}
        </h1>
        <h1  class="white--text">
          Club Café
          </h1>
        <p class="white--text basker-text">Club Cafe: 209 Columbus Avenue, Boston, MA. 02116</p>
        <p  class="white--text basker-text">Charity Beneficiary: Shriners Hospital, Transportation Fund. For more information on the beneficiary please click here.</p>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col :cols="getImgSize">
        <v-row>
          <v-col cols="6">
            <p class="white--text basker-text">
            Doors: {{doorsTime}}
            </p>
          </v-col>
          <v-col>
            <p class="white--text basker-text">
            Show: {{eventTime}}
            </p>
          </v-col>
        </v-row>
  

        <div class="text-spacer"></div>
        <h2 class="white--text basker-text mb-0 pb-0"> Tickets: </h2>
        <ul class="white--text basker-text mb-0 pb-0 ml-2">
          General Admission:

          <li class="white--text basker-text ma-0 pa-0 ml-6">
            {{onlineFee}} (Online)
          </li>
          <li class="white--text basker-text ma-0 pa-0 ml-6">
            {{doorFee}} (Door)
          </li>
        </ul>

      </v-col>
      <v-col :cols="getImgSize" class="text-center"> 
        <h2 class="basker-text white--text center-text"> 
          Get Tickets For this Event on 
        </h2>
         <ColorButton :url="ticketLink" text="EventBrite"></ColorButton>
      </v-col>
      <v-spacer></v-spacer>
      <v-col :cols="getImgSize">
        <v-img
          :src="require('../assets/2022-winners-circle.webp')"
          style="overflow: visible"  
        >
        </v-img>
      </v-col>
      <v-spacer> </v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import ColorButton from '@/components/ColorButton'
import store from "@/store/index";

  export default {
    name: 'HelloWorld',
    data: () => ({
      ticketLink: store.state.ticketLink,
      eventDate: store.state.eventDate,
      doorsTime: store.state.doorsTime,
      eventTime: store.state.eventTime,
      doorFee: store.state.doorFee,
      onlineFee: store.state.onlineFee

    }),
    computed: {
      getImgSize () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 12
          case 'sm': return 12
          case 'md': return 4
          case 'lg': return 4
          case 'xl': return 4
        }
      },
    },
    components: {
      ColorButton,
    },
  }
</script>

<style scoped>


p {
  overflow-wrap: normal;
}



</style>
