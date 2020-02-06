<template>
  <v-app style="height: 550px;">
    <v-row style="flex-grow:0">
      <v-col v-for="n in 2" :key="n" cols="5" style="height: 500px;">
        <v-card style="height: 500px;">
          <v-carousel v-if="n == 1" height="500px" hide-delimiters>
            <v-carousel-item
              v-for="(item, i) in itemsrc"
              :key="i"
              :src="item.path"
            ></v-carousel-item>
          </v-carousel>
          <div v-else class=" text-left ">
            <h3 class="ml-2">{{ product.name }}</h3>
            総合評価<v-icon
              class="ml-2"
              align="start"
              v-for="i in average"
              :key="i"
              small
              color="yellow"
              >star</v-icon
            >
            <v-divider />
            <div class="ml-4 ma-3">価格:{{ product.price }}円</div>
            <div class="ml-4 ma-2">
              メモ:★【2020年最新Bluetooth 5.１
              ワイヤレスイヤホン＆CVC8.0ノイズキャンセリング】2020年最先端Bluetooth
              5.１が搭載されたワイヤレスイヤホン通信速度・範囲・安定性が飛躍的に向上し、従来のBluetoothイヤホンの通信問題、音飛び、途切れも有効的に改善されました。CVC8.0ノイズキャンセリング技術で、ハンズフリー通話の際にノイズに邪魔されることなく、相手と快適に通話できます。通話中の雑音や周囲のノイズを抑制し、相手の声も聞き取りやすく快適な通話を実現します。
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="2" style="height: 500px;">
        <v-card style="height: 500px;">
          <div class="pa-10">価格:{{ product.price }}円</div>
          <v-btn class="ma-10" @click="purchase()">購入する</v-btn>
          <v-btn @click="inCart()">カートに入れる</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import { PURCHASEITEM_UPDATE } from "../store/mutation-types";
import { mapMutations } from "vuex";
export default {
  name: "ProductDetail",
  props: {
    product: Object,
    itemsrc: Array,
    average: Number
  },
  data() {
    return {
      account: this.$store.state.account
    };
  },
  methods: {
    ...mapMutations({
      PURCHASEITEM_UPDATE
    }),
    purchase() {
      if (!this.account.uid) {
        var res = confirm("ログインしてください");
        if (res == true) {
          // OKなら移動
          window.location.href = "./login";
        }
      } else {
        this.PURCHASEITEM_UPDATE(this.product.product_id);
        document.location.href = "./purchase";
      }
    },
    inCart() {
      if (!this.account.uid) {
        var res = confirm("ログインしてください");
        if (res == true) {
          // OKなら移動
          window.location.href = "./login";
        }
      } else {
        const axios = require("axios");
        (async () => {
          await axios({
            method: "POST",
            url: "http://104.198.57.17:5000/register_cart_item",
            data: {
              uid: this.account.uid,
              product_id: this.product.product_id,
              image_path: this.itemsrc[0].path,
              name: this.product.name
            }
          })
            .then()
            .catch();
          document.location.href = "./cart";
        })();
      }
    }
  }
};
</script>
