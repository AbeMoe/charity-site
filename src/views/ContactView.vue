<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-spacer></v-spacer>

        <v-col>
          <h2 class="basker-text white--text ">Contact Us </h2>
        </v-col>

        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <TextField
          label="First Name"
          :rules="nameRules"
          v-model="firstname"
          cols="6">
        </TextField>
        <TextField
          label="Last Name"
          :rules="nameRules"
          v-model="lastname"
          cols="6">
        </TextField>

      </v-row>
      <v-row>
        <TextField
          label="Email"
          :rules="emailRules"
          v-model="email"
          cols="12">
        </TextField>
      </v-row>
      <v-row>
        <TextField
          label="Message"
          :rules="messageRules"
          v-model="message"
          :area="true"
          count="500"
          cols="12">
        </TextField>
      </v-row>
      <v-row>
        <v-col cols="10">
          <v-spacer></v-spacer>
        </v-col>
        <v-col cols="1">
          <v-btn  
          @click="sendMessage"
          :disabled="buttonEnabled"
          >
          Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>

  </v-form>
</template>

<script>
const axios = require('axios').default;
import TextField from '@/components/TextField.vue'

import store from '../store/index'
  export default {
    components: {
      TextField
    },
    data: () => ({
      message: "",
      email: "",
      firstname: "",
      lastname: "",
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