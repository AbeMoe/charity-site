<template>
  <v-container>
    <p>Event Date: 16 April 2023</p>
    <p>Event Time: Doors: 1:00 PM Show: 2:00 PM [Ideally, contestants should arrive by 11:30 AM to participate in the VIP Brunch Meet and Greet Brunch is included]</p>
    <p> Registration Deadline: 1 March 2023 </p>
    <ul ><h3 class="underlined">Entry Fee:</h3>
      <li> Solo $35.00 </li>
      <li> Duet $50.00 </li>
    </ul>
    <p> All Entry Fees must be received by 15 March 2023 </p>
    <p> Prize: The winner gets a crown, sash, Title "Battle Royale Champion", and chooses which charity $500 will be donated to.</p>
    <p> The remainder of the proceeds will be donated to the Shriners Hospital, Transportation Fund.</p>
    <p> Registration: egistration will begin on 1 January 2023 and run until 1 March 2023.</p>
    <h2 class="underlined"> Only 10 Spots are Available</h2>
    <ol class="pt-7" ><h3 class="underlined">Rules</h3>
      <li> Each constant must perform a Broadway song no longer than 5 minutes in length. Performances can be "live" vocals or lip-sync. If your music goes over the 5-minute allotted time, the DJ will cut your music, and 10 points will be deducted from your score.</li>
      <li> Contestants must be registered by 11:59 PM on 1 March 2023; we will not accept any registrations after this time. </li>
      <li> The entry fee of $35.00 solo or $50.00 duet will need to be paid before 11:59 PM on 15 March 2023. </li>
      <li> All contestants must select a charity they are competing for when registering.</li>
      <li> All contestants arrive at Club Cafe by 11:30 AM and be present for the VIP Brunch (Contestant brunch is included). </li>
    </ol>
    <ol class="pt-7"> <h3 class="underlined"> Judging </h3> <p> Contestants will be judged on the following: </p>
      <li>Stage presence (Do you command the stage and you have the audience's attention) 10pts per judge</li>
      <li>Vocals quality or lip sync 10 pts per judge ( You are not being judged on both. it will be one or the other for the same point value)</li>
      <ul class="sublist"> Breakdown:
          <li> Vocals: How is your tone, and pitch? Were you off-key?</li>
          <li> Lip Sync: Do your lips match the words for the track you are performing to?</li>
      </ul>
      <li>The entry fee of $35.00 solo or $50.00 duet will need to be paid before 11:59 PM on 15 March 2023.</li>
      <li>All contestants must select a charity they are competing for when registering.</li>
      <li>Overall concept: The judges are looking for your ability to convey the message set forth by your song. Does your choice of costuming fit your message? 10 pts per judge </li>
      <li>Did you adhere to the allotted 5-minute time frame? (this will be a yes or no question. If the answer is "NO",  10 pts total will be deducted.) (no added point value) </li>
    </ol>
    <p> <span class="underlined">Optional Mini Challenge:</span> contestant will have their own fundraising page on the website the contestant who raises the most money in the time frame allotted will receive 10 additional points. </p>
    <h1 class="highlight"> The Entry Fee is <span class="blink">Non-refundable</span> </h1>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="4">
        <v-btn class="text-transform basker-text mt-6">
          <span class="highlight">Register</span>

        </v-btn>
      </v-col>
      <v-spacer></v-spacer>

    </v-row>
  </v-container>
</template>

<style scoped>

</style>

<script>

  export default {

    data: () => ({
    }),

  };
</script>

<style scoped>
p, ul, li, h2, ol, h1 {
  color: white;
  font-style: italic;
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



