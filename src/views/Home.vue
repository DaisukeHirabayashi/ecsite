<template>
  <div class="home">
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-carousel height="300px" hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in itemsrc"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>

    <v-card width="95%" class="mx-auto  p-3 ">
      <Products :title="title" :items="items" />
    </v-card>
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
        { id: 4, name: "ddd", show: false },
        { id: 5, name: "ddd", show: false },
        { id: 6, name: "ddd", show: false },
        { id: 7, name: "ddd", show: false }
      ],
      title: "新着アイテム",
      itemsrc: [
        {
          src: "/home_src/alexa.jpg"
        },
        {
          src: "/home_src/deliver.png"
        }
      ],
      overlay: true
    };
  },
  created() {
    const axios = require("axios");
    (async () => {
      await axios({
        method: "POST",
        url: "http://104.198.57.17:5000/pickup_newitem"
      })
        .then(response => (this.items = response.data))
        .catch(error => console.log(error.response));
    })();
  },
  mounted() {
    this.$nextTick(function() {
      // ビュー全体がレンダリングされた後にのみ実行されるコード
      setTimeout(() => {
        this.overlay = false;
      }, 2000);
    });
  }
};
</script>
