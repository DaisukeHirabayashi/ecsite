<template>
  <v-card class="mt-4 mb-4 pa-3">
    <v-layout row wrap>
      <v-flex xs4 v-for="{ id, name } in items" :key="id">
        <v-card class="grey lighten-3 ma-2">
          <v-card-text
            ><img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              width="100%"
              alt=""
          /></v-card-text>
          <v-card-title>
            {{ name }}
          </v-card-title>
          <v-card-actions>
            <v-btn text>Purchase</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  name: "Products",
  props: {
    items: Array
  }
};
</script>
