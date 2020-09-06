<template>
  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3">
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step step="1" v-bind:complete="step > 1">Step 1</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2" v-bind:complete="step > 2">Step 2</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Step 3</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <!-- <v-stepper-content step="1">Information about step 1</v-stepper-content>
            <v-stepper-content step="2">Information about step 2</v-stepper-content>
            <v-stepper-content step="3">Information about step 3</v-stepper-content> -->
            <ContactInfo v-bind:data="data" v-bind:rules="rules" v-bind:next="next" />
            <ShippingInfo v-bind:data="data" v-bind:rules="rules" v-bind:next="next" v-bind:previous="previous" />
            <Review v-bind:data="data" v-bind:submitOrder="submitOrder" v-bind:previous="previous" />
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactInfo from "../components/ContactInfo.vue";
import ShippingInfo from "../components/ShoppingInfo.vue";
import Review from "../components/Review.vue";
export default {
  name: "Checkout",
  components: {
    ContactInfo,
    Review,
    ShippingInfo,
  },
  data() {
    return {
      step: 1,
      checkoutForm: false,
      data: {
        email: '',
        name: '',
        phone: '',
        street: '',
        state: '',
        zip: ''
      },
      rules: {
        required: value => !!value || 'Required.',
        zip: value => value.length == 5 || 'Must be five characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        phone: value => {
          const pattern = /\d{10}/
          return pattern.test(value) || 'Invalid phone number.'
        }
      }
    }
  },
  methods: {
    next() {
      this.step += 1
    },
    previous() {
      this.step -= 1
    },
    submitOrder() {
      this.$router.push({ name: 'Thankyou' })
    }
  }
};
</script>