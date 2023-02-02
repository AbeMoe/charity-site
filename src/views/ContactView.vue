<template>
    <v-container>
      <v-row>
        <v-spacer></v-spacer>

        <v-col>
          <h2 class="basker-text text-center white--text ">Contact Us </h2>
        </v-col>
      </v-row>

        <v-spacer></v-spacer>
      <v-row>
        <v-col cols="6" class="name-field">
          <v-text-field
            dark
            class="basker-text"
            v-model="firstname"
            :counter="30"
            :rules="nameRules"
            label="First Name"
            required
          >
          </v-text-field>

        </v-col>
        <v-col cols="6">
          <v-text-field
            dark
            class="name-field basker-text"
            v-model="lastname"
            :counter="30"
            :rules="nameRules"
            label="Last Name"
            required
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            dark
            class="name-field basker-text"
            v-model="email"
            :counter="100"
            :rules="emailRules"
            label="Email"
            required
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            dark
            class="name-field basker-text"
            v-model="message"
            :counter="500"
            :rules="messageRules"
            label="Message"
            required
          >
          </v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10">
          <v-spacer></v-spacer>
        </v-col>
        <v-col cols="1">
          <v-btn  
          @click="sendMessage"
          :disabled="buttonEnabled"
          class="text-transform basker-text mt-6">
              <span style="color: #ffdd00;">Submit</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    </v-container>

</template>

<script>
const axios = require('axios').default;
import store from '../store/index'

  export default {
    data: () => ({

      message: "",
      email: "",
      firstname: "",
      lastname: "",
      loading: false,
      finished: false,

      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 30 || 'Name must be less than 20 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      messageRules: [
        v => !!v || 'Message is required',
        v => v.length <= 500 || 'Message must be less than 500 characters',
      ],
      buttonEnabled: false,
      
    }),
    computed: {

    },
    methods: {
       reset(event) {
        this.finished = false
       },
      async sendMessage(event) {
        if(this.$refs.form.validate()) { 
          this.finished = false
          this.loading=true
          var body = {
            message: this.message,
            email: this.email,
            firstname: this.firstname,
            lastname: this.lastname,
          }
          const res =  await axios.post(store.state.formURL, body)
          this.loading = false
          this.finished = true
          console.log(res)
        }
      }
   }
}
</script>

<style scoped>



</style>
