<template>
  <div>
    <v-row v-for="product in $store.state.products" v-bind:key="product.name">
      <HorizontalProduct v-bind:product="product" btnAction="remove" />
    </v-row>
  </div>
</template>

<script>
import HorizontalProduct from "../components/HorizontalProduct.vue";
export default {
  name: "ProductList",
  components: {
    HorizontalProduct,
  },
  methods: {
    removefromcart: function () {
      console.log("Removing from cart");
    },
  },
};
</script>

<style>
</style>