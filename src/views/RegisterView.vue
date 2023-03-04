<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-spacer></v-spacer>

        <v-col>
          <h2 class="basker-text text-center white--text ">Contact Us </h2>
        </v-col>
      </v-row>

        <v-spacer></v-spacer>
      <v-row>

        <TextField
        label="email"
        :rules="emailRules"
        hint="Your contact email">
        </TextField>
      </v-row>
      <v-row>
        <TextField
        :area="true"
        label="About You"
        count=500
        :rules="messageRules"
        hint="This is a short bio for the digital program">
        </TextField>
      </v-row>
      <v-row>
        <TextField
        :rules="messageRules"
        label="Name(s)"
        hint="Name(s) you wish to be announced on stage as.">
        </TextField>
      </v-row>
      <v-row>
        <TextField
        required
        :rules="messageRules"
        label="Charity you are competing for"
        hint="Must be a verified 501c3">
        </TextField>
      </v-row>
      <v-row>
        <TextField
        required
        :rules="messageRules"
        label="Charity website"
        hint="A link to your charitys website">
        </TextField>
      </v-row>
        <v-col cols="12">
          <v-file-input dark 
          label="Head shot"
          @change="previewImage"
          v-model="image"
          ></v-file-input>
        </v-col>
        <v-col cols="12"> 
          <v-img :src="url"></v-img>
        </v-col>
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
      url: null,
      image: null,
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
      previewImage() {
        this.url= URL.createObjectURL(this.image)
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
          const res =  await axios.post(store.state.contestantURL, body)
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
