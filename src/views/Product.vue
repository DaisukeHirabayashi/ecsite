<template>
  <!-- 商品の詳細を出しているページのvue -->
  <div class="product">
    <v-container class="grey lighten-5">
      <ProductDetail :product="product" :itemsrc="itemsrc" :average="average" />
      <v-card>
        <v-row>
          <v-col cols="6">
            <Gragh :soundData="soundDatas" />
            <v-container ml-3 pa-0>
              <strong>音質について</strong>
              <v-layout justify-center>
                <v-progress-linear
                  color="success"
                  height="25"
                  :value="sum"
                  background-color="primary"
                  reactive
                ></v-progress-linear></v-layout
              ><strong>
                重低音<v-icon color="green">mdi-square</v-icon>:{{
                  review.bass
                }}</strong
              ><strong>
                中高音<v-icon color="primary">mdi-square</v-icon>:{{
                  review.midhigh
                }}</strong
              >
            </v-container>
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
      review: { sound: 3 },
      average: 3
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
        .catch();
      this.average = Math.round(
        (this.review.sound +
          this.review.blocking +
          this.review.visual +
          this.review.comfortable +
          this.review.usability) /
          5.0
      );
    })();
  },
  computed: {
    soundDatas() {
      return [
        this.review.sound,
        this.review.blocking,
        this.review.visual,
        this.review.comfortable,
        this.review.usability
      ];
    },
    sum() {
      return (
        (this.review.bass /
          parseFloat(this.review.bass + this.review.midhigh)) *
        100.0
      );
    }
  }
};
</script>
