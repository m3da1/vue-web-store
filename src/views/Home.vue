<template>
  <div>
    <HomepageHeader />
    <HomepageProduct />
    <HomepageFooter />
  </div>
</template>

<script>
import HomepageHeader from "../components/HomepageHeader.vue";
import HomepageProduct from "../components/HomepageProducts.vue";
import HomepageFooter from "../components/HomepageFooter.vue";
export default {
  name: "Home",
  components: {
    HomepageHeader,
    HomepageProduct,
    HomepageFooter,
  },
};
</script>
