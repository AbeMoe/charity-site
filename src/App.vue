<template>
  <v-app
  style="width: 100vw;"
  >
  
  <v-container style="width: 100vw; " class="banner-gradient">

  <div class="royale-header"> Battle Royale </div>
  <div class="boston-header"> Boston </div>

    <v-app-bar
      style="background: transparent; width:100vw;"
      light 
      class="elevation-0"   
      v-if="isNotMobile" 
    >
    
      <v-row style="width: 100vw;" class="justify-start">
        <v-col 
        v-for="button in buttons" :key=button >
          <v-btn
              plain
              :to= button.routePath
              class="router-button basker-text ka-0 pa-0"
            >{{ button.text }}
          </v-btn>
        </v-col>
        <v-spacer/>

        <v-col cols="2" offset="auto">
          <ColorButton :url="ticketLink" text="Tickets"> </ColorButton>
        </v-col>
        <v-col cols="2" class="pr-3">
          <ColorButton :url="donateLink" text="Donate"> </ColorButton>
        </v-col>
      </v-row>
    </v-app-bar>
    <div v-else>
    <v-app-bar
      style="opacity: 0.38; width:100vw;"
    >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    </v-app-bar>
    <v-navigation-drawer
          v-model="drawer"
          location="bottom"
          style="background: transparent; overflow: auto; overflow-y: auto;"
      >
          <v-list v-show="drawer">
            <v-list-item  v-for="button in buttons" :key=button :title="button.text"  :value="button.routePath">
              <ColorButton :url="'#/' + button.routePath" :text="button.text"/>
            </v-list-item>
            <v-list-item>
               <ColorButton :url="ticketLink" text="Tickets"> </ColorButton>
            </v-list-item>
            <v-list-item>
               <ColorButton :url="donateLink" text="Donate"> </ColorButton>
            </v-list-item>
          </v-list>
      </v-navigation-drawer>
    </div>

    
  </v-container>




    <v-main
      style="width: 100vw display: block; margin:0"
    >

        <router-view
        style="width: 100vw margin: 0;"
        />
    <div class="footer"> </div>
      </v-main>
  </v-app>
</template>

<script>
import ColorButton from '@/components/ColorButton'
import store from "@/store/index";

export default {
  name: 'App',
  components: {
    ColorButton
  },
  data: () => ({
    ticketLink: store.state.ticketLink,
    donateLink: store.state.donateLink,
    buttons: [
      { "text" : "home", "routePath" : "Home"} , 
      {"text" : "contact", "routePath" : "Contact"}, 
      {"text" : "register", "routePath" : "Rules"}, 
      {"text" : "sponsors", "routePath" : "Sponsors"},
      ],
    drawer: false,
    isNotMobile: false
  }),
  beforeMount() {
    this.handleResize()
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      console.log("This is size", window.innerWidth)
      // Update the computed property when the window is resized
      this.isNotMobile = window.innerWidth >= 768; // Adjust the breakpoint as needed
    }
  }
};
</script>

<style>


</style>
