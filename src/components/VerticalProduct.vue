<template>
  <v-card outlined>
    <v-img v-bind:src="product.image" height="200px"></v-img>
    <v-card-title>{{product.name}}</v-card-title>
    <v-card-subtitle>$ {{product.price}}</v-card-subtitle>
    <v-card-actions>
      <v-btn @click="addToCart" outlined color="success">
        <v-icon left small>fa-plus</v-icon>Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "VerticalProduct",
  props: {
    product: Object,
    addToCart: Function
  }
};
</script>

<style>
</style>