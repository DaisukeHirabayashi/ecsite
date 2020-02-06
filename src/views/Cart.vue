<template>
  <v-app>
    <div class="cart">
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
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
                  ><v-btn text x-small @click="purchase(item.product_id)"
                    >購入する</v-btn
                  ><v-btn
                    class="ml-2"
                    text
                    x-small
                    @click="deleteItem(item.product_id)"
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
import { PURCHASEITEM_UPDATE } from "../store/mutation-types";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      account: this.$store.state.account,
      cartItems: [],
      overlay: true
    };
  },
  created() {
    const axios = require("axios");
    (async () => {
      await axios({
        method: "POST",
        url: "http://104.198.57.17:5000/pickup_cartitem",
        data: { uid: this.account.uid }
      })
        .then(response => (this.cartItems = response.data))
        .catch();
    })();
  },
  mounted() {
    this.$nextTick(function() {
      // ビュー全体がレンダリングされた後にのみ実行されるコード
      setTimeout(() => {
        this.overlay = false;
      }, 2000);
    });
  },
  methods: {
    ...mapMutations({
      PURCHASEITEM_UPDATE
    }),
    purchase(product_id) {
      this.PURCHASEITEM_UPDATE(product_id);
      document.location.href = "./purchase";
    },
    deleteItem(product_id) {
      const axios = require("axios");
      (async () => {
        await axios({
          method: "POST",
          url: "http://104.198.57.17:5000/delete_cartitem",
          data: { uid: this.account.uid, product_id: product_id }
        })
          .then(response => (this.cartItems = response.data))
          .catch();
        document.location.href = "./cart";
      })();
    }
  }
};
</script>
