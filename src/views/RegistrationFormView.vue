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

        <RegistrationTextField
        label="example Label"
        :rules="nameRules"
        :hint="firstname">
        </RegistrationTextField>
        <v-col cols="12">
          <v-textarea
            dark
            class="name-field basker-text"
            v-model="message"
            :counter="500"
            :rules="messageRules"
            label="Name(s)"
            hint="Name(s) you wish to be announced on stage as."
            required
          >
          </v-textarea>
        </v-col>
        <v-col cols="12">
          <v-textarea
            dark
            class="name-field basker-text"
            v-model="message"
            :counter="500"
            :rules="messageRules"
            label="Charity you are competing for"
            hint="Must be a verified 501c3."
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
    </v-container>

</template>

<script>
const axios = require('axios').default;
import RegistrationTextField from '@/components/RegistrationTextField.vue'
import store from '../store/index'

  export default {
    components: {
      RegistrationTextField
    },
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
        print("haiiiii")
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
