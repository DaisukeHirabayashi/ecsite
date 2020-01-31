<template>
  <v-app>
    <div class="cart">
      <v-container>
        <v-list three-line>
          <v-subheader>ショッピングカート</v-subheader>
          <template v-for="(item, index) in productItems">
            <v-divider :key="index"></v-divider>

            <v-list-item :key="item.product_name">
              <v-list-item-avatar>
                <v-img :src="item.imgPath"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  v-html="item.product_name"
                ></v-list-item-title>
                <v-list-item-subtitle class="text-right"
                  ><v-btn text x-small @click="purchase(index)">購入する</v-btn
                  ><v-btn class="ml-2" text x-small
                    >削除</v-btn
                  ></v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-container>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      productItems: this.$store.state.item
    };
  },
  methods: {
    purchase(index) {
      console.log(index);
      document.location.href = "./purchase";
    }
  }
};
</script>
