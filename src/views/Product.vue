<template>
  <div class="product">
    <ProductDetail :product="product" />
  </div>
</template>
<script>
import ProductDetail from "../components/ProductDetail.vue";
export default {
  name: "product",
  components: {
    ProductDetail
  },
  data() {
    return {
      product: this.$store.state.product
    };
  }
};
</script>
