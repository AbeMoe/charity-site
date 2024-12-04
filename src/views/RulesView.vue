<template>
  <v-container>
    <p>Event Date: {{eventDate}}</p>
    <p>Event Time: Doors: {{doorsTime}} Show: {{eventTime}} Ideally, contestants should arrive by {{arrivalTime}}</p>
    <p> Registration Deadline: {{registrationEnd}} </p>
    <h3>Entry Fee:   Solo  Duet   {{entryFee}}</h3>
    <p> All Entry Fees must be received by {{entryFeePaid}} </p>
    <h1 class="highlight"> Prize: <span class="blink"> {{prizeAmount}} </span>  Prize to the winner</h1>
    <p> The remainder of the proceeds will be donated to {{charityBenefactor}}</p>
    <p> Registration: registration will begin on <b>{{registrationStart}}</b> and run until <b>{{registrationEnd}}</b>.</p>
    <h2 class="underlined"> Only 10 Spots are Available</h2>
    <ol class="pt-7" ><h3 class="underlined">Rules</h3>
      <li> Each constant must perform a Disney song no longer than 5 minutes in length. Performances can be "live" vocals or lip-sync. If your music goes over the 5-minute allotted time, the DJ will cut your music, and 10 points will be deducted from your score.</li>
      <li> Contestants must be registered <b>by 11:59 PM {{registrationEnd}} </b>; we will not accept any registrations after this time. </li>
      <li> The entry fee of {{entryFee}} will need to be paid before <b>11:59 PM on {{entryFeePaid}}.</b> </li>
      <li> <b>All contestants arrive at Club Cafe by {{arrivalTime}} </b></li>
      <li> Contestants are required to advertise this event. Each contestant will receive a custom code to track ticket sales, and whoever sells the most tickets will receive an award for their efforts.</li>
      <li> Music <b>MUST</b> be sent to battleroyaleboston@gmail.com by <b> {{musicDeadLine}} </b> </li>
    </ol>
    <ol class="pt-7"> <h3 class="underlined"> Judging </h3> <p> Contestants will be judged on the following: </p>
      <li>Stage presence (Do you command the stage and you have the audience's attention) 10pts per judge</li>
      <li>Vocals quality or lip sync 10 pts per judge ( You are not being judged on both. it will be one or the other for the same point value)</li>
      <ul class="sublist"> Breakdown:
          <li> Vocals: How is your tone, and pitch? Were you off-key?</li>
          <li> Lip Sync: Do your lips match the words for the track you are performing to?</li>
      </ul>
      <li>The entry fee of {{entryFee}} duet will need to be paid before 11:59 PM on {{entryFeePaid}}.</li>
      <li>Overall concept: The judges are looking for your ability to convey the message set forth by your song. Does your choice of costuming fit your message? 10 pts per judge </li>
      <li>Did you adhere to the allotted 5-minute time frame? (this will be a yes or no question. If the answer is "NO",  10 pts total will be deducted.) (no added point value) </li>
    </ol>
    <h1 class="highlight"> The Entry Fee is <span class="blink">Non-refundable</span> </h1>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="4">
        <ColorButton :url="registrationLink" text="Register"></ColorButton>
      </v-col>
      <v-spacer></v-spacer>

    </v-row>
  </v-container>
</template>

<style scoped>

</style>

<script>
import store from "@/store/index";
import ColorButton from '@/components/ColorButton'
  export default {
    data: () => ({
        registrationLink: store.state.registrationLink,
        registrationStart: store.state.registrationStart,
        registrationEnd: store.state.registrationEnd,
        entryFeePaid: store.state.entryFeePaid,
        eventDate: store.state.eventDate,
        eventTime: store.state.eventTime,
        doorsTime: store.state.doorsTime,
        entryFee: store.state.entryFee,
        charityBenefactor: store.state.charityBenefactor,
        arrivalTime: store.state.arrivalTime,
        musicDeadLine: store.state.musicDeadLine,
        prizeAmount: store.state.prizeAmount,
    }),
    components: {
      ColorButton,
    },

  };
</script>

<style scoped>
p, ul, li, h2, ol, h1, h3 {
  color: white;
  font-family: 'BaskervilleMTW01-SmBdIt';
}

li {
  margin-left: 5%;
  padding: 10px;
}
.sublist {
  margin-left: 5%;
}



.blink {
  animation: blinker 1.7s step-start infinite;
}

@keyframes blinker {
    50% {
    color: #CC48CE;
  }
}

.highlight {
  color: #ffdd00;
}


.underlined {
  text-decoration: underline;
}
</style>



