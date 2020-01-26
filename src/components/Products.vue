<template>
  <v-card class="pa-5">
    <v-card-title>{{ title }}</v-card-title>
    <v-layout row wrap>
      <!-- xsをいじると個数を変えられる -->
      <v-flex xs3 v-for="{ id, name } in items" :key="id">
        <v-card class="grey lighten-3 ma-3">
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
            <v-btn @click="moveDetailItem(name)">Purchase</v-btn>
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
    items: Array,
    title: String
  },
  methods: {
    moveDetailItem(name) {
      document.location.href = "./product?=" + name;
    }
  }
};
</script>
