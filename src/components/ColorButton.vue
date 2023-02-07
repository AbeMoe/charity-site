<template>
  <v-container>
    <v-btn :href=url target="_blank" class="text-transform basker-text"><span style="color: #ffdd00;">{{text}}</span></v-btn>
  </v-container>
</template>

<script>
export default {
  props: ['url','text'],
  created() {
    // props are exposed on `this`
    console.log(this.foo)
  }
}
</script>

export default {
