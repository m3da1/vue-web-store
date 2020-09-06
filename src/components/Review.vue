<template>
  <v-stepper-content step="3">
    <v-list>
      <v-subheader class="title">Review Order</v-subheader>
    </v-list>
    <!-- <v-list-item-group color="primary">
      <v-list-item v-for="(value, name) in data" v-bind:key="name">
        <v-list-item-content>
          <v-list-item-title>{{name | capitalize}}: {{value}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group> -->
    <!-- <hr /> -->
    <v-simple-table>
    <template v-slot:default>
      <thead>
      </thead>
      <tbody>
        <tr v-for="(value, name) in data" :key="name">
          <td width="200px">{{ name | capitalize}}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <v-btn color="primary" v-on:click="submitOrder" class="mt-4">Submit</v-btn>
  <v-btn text v-on:click="previous" class="mt-4">Previous</v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  name: "Review",
  props: {
    previous: Function,
    submitOrder: Function,
    data: Object,
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>