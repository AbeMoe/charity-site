<template>
  <v-col cols="cols" class="name-field">
    <v-textarea
      v-if="area"
      dark
      class="basker-text"
      :rules=rules
      :counter=counter
      :value="modelValue" 
      @input="statusChanged"
      :label=label
      :hint=hint
      required
    >
    </v-textarea>
    <v-text-field
      v-else
      dark
      class="basker-text"
      :rules=rules
      :counter=counter
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
  props: ['hint','label','target','rules', 'modelValue', 'area', 'count'],
  methods: {
    statusChanged(event) {
      this.$emit('input', event);
    },
  },
  created() {
    // props are exposed on `this`
    console.log("this is area",this.area)
    if(!this.count)
    {
      this.counter = this.counterDefault
    }
    if(this.area != undefined) {
      this.area = true
    }
  },
  data: () => ({
    counterDefault: "50"
  })
}
</script>

