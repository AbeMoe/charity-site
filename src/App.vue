<template>
  <v-app
  >
     <div
      style="z-index: 50; width: 100vw; background: transparent; display: block;"
      class="ma-0 pa-0 banner-gradient"
      fluid 
      >
        <v-img

            :src="require('./assets/battle_royale_text.webp')"
            style="overflow: visible"
            
        >
          <v-img
            :src="require('./assets/broadway_image.webp')"
            max-width="25%"
            class="ma-a overflow-visible"

            style= "z-index: 100;margin: auto;transform: rotate(-10deg); position: relative; top: 60%; z-index: -10"
          ></v-img>
        </v-img>
        <v-app-bar
          style=" width: 100vw display: block; background: transparent;"
          light 
          class="elevation-0"    
        >
        <v-container style="width: 100vw; top: -50%; position: relative;" class="ma-0 pa-0">
          <v-row style="width: 100vw;" class="ma-0 pa-0">
            <v-col 
            v-for="button in buttons" :key=button 
            cols="1">
              <v-btn
                  plain
                  :to= button.routePath
                  class="router-button basker-text ka-0 pa-0"
                >{{ button.text }}
              </v-btn>
            </v-col>
            <v-col
            cols="4"
            >
            </v-col>
            <v-col>
            </v-col>
          </v-row>
        </v-container>


       </v-app-bar>
      </div>



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

export default {
  name: 'App',

  data: () => ({
    buttons: [
      { "text" : "home", "routePath" : "Home"} , 
      {"text" : "contact", "routePath" : "Contact"}, 
      {"text" : "register", "routePath" : "Register"}, 
      {"text" : "sponsors", "routePath" : "Sponsors"} ]
  }),
};
</script>

<style>


</style>
