<template>
  <v-card class="pa-5">
    <v-card-title>{{ title }}</v-card-title>
    <v-layout row wrap>
      <!-- xsをいじると個数を変えられる -->
      <v-flex xs3 v-for="item in items" :key="item.product_id">
        <v-card class="grey lighten-3 ma-3">
          <v-card-text
            ><img :src="item.image_path" width="100%" alt=""
          /></v-card-text>
          <v-card-title>
            {{ item.name }}
          </v-card-title>
          <v-card-actions>
            <v-btn @click="moveDetailItem(item)">Purchase</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
import {
  ITEMDETAIL_UPDATE,
  ITEMDETAILSRC_UPDATE
} from "../store/mutation-types";
import { mapMutations } from "vuex";
export default {
  name: "Products",
  props: {
    items: Array,
    title: String
  },
  data() {
    return {
      itempath: []
    };
  },
  methods: {
    ...mapMutations({
      ITEMDETAIL_UPDATE,
      ITEMDETAILSRC_UPDATE
    }),
    moveDetailItem(item) {
      const axios = require("axios");
      (async () => {
        await axios({
          method: "POST",
          url: "http://104.198.57.17:5000/pickup_selectitem",
          data: { product_id: item.product_id }
        })
          .then(response => (this.itemPath = response.data))
          .catch(error => console.log(error.response));
        console.log(this.itemPath[0].path);
        if (this.itemPath) {
          this.ITEMDETAIL_UPDATE(item);
          this.ITEMDETAILSRC_UPDATE(this.itemPath);
          document.location.href = "./product?=" + item.name;
        }
      })();
    }
  }
};
</script>
