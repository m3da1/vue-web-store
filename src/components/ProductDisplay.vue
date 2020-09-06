<template>
  <div>
      <h3>Products</h3>
      <v-row>
          <v-col sm="6" md="4" v-for="product in $store.state.products" v-bind:key="product.name">
              <VerticalProduct v-bind:product="product" v-bind:addToCart="addToCart"/>
          </v-col>
      </v-row>
  </div>
</template>

<script>
import VerticalProduct from "../components/VerticalProduct.vue";
export default {
    name: "ProductDisplay",
    components: {
        VerticalProduct
    },
    methods: {
        addToCart(index, quantity=1) {
            this.$store.commit('addItemToCart', {itemId: index, quantity});
            this.$store.commit('updateSnackbar', {show: true});
        }
    }
}
</script>
