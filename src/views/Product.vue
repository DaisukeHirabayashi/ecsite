<template>
  <!-- 商品の詳細を出しているページのvue -->
  <div class="product">
    <v-container class="grey lighten-5">
      <ProductDetail :product="product" :itemsrc="itemsrc" />
      <Review :datacollection="datacollection" />
    </v-container>
  </div>
</template>
<script>
import ProductDetail from "../components/ProductDetail.vue";
import Review from "../components/Review.vue";
export default {
  name: "product",
  components: {
    ProductDetail,
    Review
  },
  data() {
    return {
      product: this.$store.state.itemDetail,
      itemsrc: this.$store.state.itemDetailSrc,
      datacollection: {
        labels: ["聴き心地", "遮音性", "見た目", "付け心地", "使いやすさ"],
        datasets: [
          {
            label: "Aさん",
            data: [100, 72, 86, 74, 86],
            backgroundColor: "RGBA(225,95,150, 0.5)",
            borderColor: "RGBA(225,95,150, 1)",
            borderWidth: 1,
            pointBackgroundColor: "RGB(46,106,177)"
          }
        ]
      }
    };
  }
};
</script>
