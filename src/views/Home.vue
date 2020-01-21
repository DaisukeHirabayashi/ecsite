<template>
  <div class="home">
    <h1>Home</h1>
    <v-container flud>
      <Products :items="items" />
    </v-container>
  </div>
</template>
<script>
import Products from "../components/Products.vue";
export default {
  components: {
    Products
  },
  name: "home",
  data() {
    return {
      items: [
        { id: 1, name: "aaa", show: false },
        { id: 2, name: "bbb", show: false },
        { id: 3, name: "ccc", show: false },
        { id: 4, name: "ddd", show: false }
      ]
    };
  }
};
</script>
