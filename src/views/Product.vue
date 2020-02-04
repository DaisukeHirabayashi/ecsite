<template>
  <!-- 商品の詳細を出しているページのvue -->
  <div class="product">
    <v-container class="grey lighten-5">
      <ProductDetail :product="product" :itemsrc="itemsrc" />
      <v-card>
        <v-row>
          <v-col cols="6">
            <Gragh :soundData="soundDatas" />
          </v-col>
          <v-col cols="6">
            <Review />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import ProductDetail from "../components/ProductDetail.vue";
import Review from "../components/Review.vue";
import Gragh from "../components/Gragh.vue";
export default {
  name: "product",
  components: {
    ProductDetail,
    Review,
    Gragh
  },
  data() {
    return {
      product: this.$store.state.itemDetail,
      itemsrc: this.$store.state.itemDetailSrc,
      review: [{ sound: "" }]
    };
  },
  created() {
    const axios = require("axios");
    (async () => {
      await axios({
        method: "POST",
        url: "http://104.198.57.17:5000/get_review_average",
        data: {
          product_id: this.product.product_id
        }
      })
        .then(response => (this.review = response.data))
        .catch(error => console.log(error.response));
    })();
  },
  computed: {
    soundDatas() {
      return [
        this.review[0].sound,
        this.review[0].blocking,
        this.review[0].visual,
        this.review[0].comfortable,
        this.review[0].usability
      ];
    }
  }
};
</script>
