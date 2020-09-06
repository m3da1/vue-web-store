<template>
  <div class="text-center">
    <v-overlay v-bind:value="overlay" class="flex-column">
      <p>Processing Order...</p>
      <v-progress-circular size="64" indeterminate />
    </v-overlay>
    <v-container v-if="!overlay">
      <v-row>
        <v-col sm="6" offset-sm="3" xl="4" offset-xl="4">
          <h2>Thank you for purchase! It will be shipped soon.</h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Thankyou",
  data() {
    return {
      overlay: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.overlay = false;
    }, 3000);
  },
  beforeMount() {
    this.overlay = true;
  },
};
</script>