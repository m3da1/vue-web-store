<template>
  <v-stepper-content step="1">
    <v-text-field v-model="data.name" v-bind:rules="[rules.required]" label="Name" required />
    <v-text-field
      v-model="data.email"
      v-bind:rules="[rules.required, rules.email]"
      label="Email Address"
      required
    />
    <v-text-field
      v-model="data.phone"
      v-bind:rules="[rules.required, rules.phone]"
      label="Phone Number"
      required
    />

    <v-btn color="primary" v-on:click="next">Continue</v-btn>
    <v-btn text v-on:click="$router.replace({name: 'Cart'})">Cancel</v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  name: "ContactInfo",
  props: {
    next: Function,
    rules: Object,
    data: Object,
  },
};
</script>

<style>
</style>