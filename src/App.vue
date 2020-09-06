<template>
  <v-app>
    <TopNav />
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-snackbar
      v-model="$store.state.snackbar.show"
      v-bind:multi-line="true"
      v-bind:right="true"
      v-bind:top="true"
      v-bind:timeout="4000"
      v-bind:color="$store.state.snackbar.variant">
      {{$store.state.snackbar.message}}
      <v-btn dark text v-on:click="$store.commit('updateSnackbar', {show: false})">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav.vue";

export default {
  name: "App",

  components: {
    TopNav,
  },

  data: () => ({
    //
  }),
};
</script>
