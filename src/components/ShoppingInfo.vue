<template>
  <v-stepper-content step="2">
    <v-text-field v-model="data.street" label="Street Address" required />
    <v-text-field v-model="data.state" label="State" required />
    <v-text-field
      v-model="data.zip"
      label="Zip Code"
      v-bind:rules="[rules.required, rules.zip]"
      required
    />
    <v-btn color="primary" v-on:click="next">Continue</v-btn>
    <v-btn text v-on:click="previous">Previous</v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  name: "ShippingInfo",
  props: {
      next: Function,
      previous: Function,
      rules: Object,
      data: Object
  }
};
</script>