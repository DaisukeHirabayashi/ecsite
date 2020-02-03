<template>
  <v-app>
    <div class="cart">
      <v-container>
        <v-list three-line>
          <v-subheader>ショッピングカート</v-subheader>
          <template v-if="!cartItems"
            >カートに入っているアイテムはありません</template
          >
          <template v-else v-for="(item, index) in cartItems">
            <v-divider :key="index"></v-divider>

            <v-list-item :key="item.name">
              <v-list-item-avatar>
                <v-img :src="item.image_path"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
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
      account: this.$store.state.account,
      cartItems: []
    };
  },
  created() {
    const axios = require("axios");
    console.log(this.account.uid);
    (async () => {
      await axios({
        method: "POST",
        url: "http://104.198.57.17:5000/pickup_cartitem",
        data: { uid: this.account.uid }
      })
        .then(response => (this.cartItems = response.data))
        .catch(error => console.log(error.response));
    })();
  },
  methods: {
    purchase(index) {
      console.log(index);
      document.location.href = "./purchase";
    }
  }
};
</script>
