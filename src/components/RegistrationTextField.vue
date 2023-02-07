<template>
  <v-col cols="cols" class="name-field">
    <v-text-field
      dark
      class="basker-text"
      :rules=rules
      counter="50"
      :value="modelValue" 
      @input="statusChanged"
      :label=label
      :hint=hint
      required
    >
    </v-text-field>
  </v-col>
</template>

<script>
export default {
  props: ['hint','label','target','rules', 'modelValue'],
  methods: {
    statusChanged(event) {
      console.log(event)
        this.$emit('input', event);
    },
  },
  created() {
    // props are exposed on `this`
    console.log(this.foo)
  },
  data: () => ({
  })
}
</script>

