<template>
  <div>
    <v-sheet v-if="$vuetify.breakpoint.mdAndUp" v-bind:elevation="4" class="pa-6">
        <h3>Filters</h3>
        <v-radio-group v-model="priceFilter" v-bind:mandatory="true">
            <v-radio
              v-for="(price, idx) in prices"
              v-bind:key="price"
              v-bind:label="price"
              v-bind:value="idx"
            ></v-radio>
          </v-radio-group>
    </v-sheet>
    <v-expansion-panels v-else>
      <v-expansion-panel>
        <v-expansion-panel-header>Filters</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="priceFilter" v-bind:mandatory="true">
            <v-radio
              v-for="(price, idx) in prices"
              v-bind:key="price"
              v-bind:label="price"
              v-bind:value="idx"
            ></v-radio>
          </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      prices: ["Any", "Under $25", "$25 to $100", "$100 to $500", "Over $500"],
      priceFilter: 0,
      checkbox: true,
    };
  },
};
</script>

<style>
</style>