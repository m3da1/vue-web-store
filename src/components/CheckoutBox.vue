<template>
  <div>
    <v-card outlined>
      <v-card-title>Payment Details</v-card-title>
      <v-card-text>
        <v-text-field label="Name" />
        <v-text-field label="Email Address" />
        <p>Total: $999</p>
        <v-btn color="primary" v-on:click="gotocheckout">Checkout</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CheckoutBox",
  data() {
    return {
      checkoutform: null,
      nameRules: [],
      name: "",
      emailRules: [],
      email: "",
    };
  },
  methods: {
    gotocheckout: function () {
      this.$router.push({ name: 'Checkout' })
    },
  },
};
</script>