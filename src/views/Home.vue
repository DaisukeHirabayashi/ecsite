<template>
  <div class="home">
    <v-carousel height="300px" hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in itemsrc"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>

    <v-card width="70%" class="mx-auto  p-3 ">
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
        { id: 7, name: "ddd", show: false },
        { id: 8, name: "ddd", show: false },
        { id: 9, name: "ddd", show: false },
        { id: 10, name: "ddd", show: false },
        { id: 11, name: "ddd", show: false }
      ],
      title: "新着アイテム",
      itemsrc: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>
