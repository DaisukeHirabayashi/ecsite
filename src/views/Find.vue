<template>
  <v-container class="mx-auto text-left p-3">
    <v-card width="90%" class="mx-auto  p-3 ">
      <Products :title="keyword" :items="finditems" />
    </v-card>
    <v-pagination
      v-model="page"
      :length="itemsLength"
      @input="pageMove"
    ></v-pagination> </v-container
></template>

<script>
import { mapState, mapMutations } from "vuex";
import Products from "../components/Products.vue";
import { PAGE_UPDATE } from "../store/mutation-types";
export default {
  name: "finder",
  components: {
    Products
  },
  computed: {
    ...mapState({
      keyword: "finditem",
      itemsLength: "itemLength"
    }),
    finditems() {
      if (this.page == 1) {
        if (this.itemsLength == 1) {
          return this.items.slice(0);
        } else {
          return this.items.slice(0, 20);
        }
      } else {
        if (this.itemsLength == this.page) {
          return this.items.slice((this.page - 1) * 20);
        }
        return this.items.slice((this.page - 1) * 20, this.page * 20);
      }
    }
  },
  data() {
    return { page: this.$store.state.page, items: this.$store.state.item };
  },
  methods: {
    ...mapMutations({
      PAGE_UPDATE
    }),
    pageMove() {
      this.PAGE_UPDATE(this.page);
      document.location.href = "./serchitems";
    }
  }
};
</script>
