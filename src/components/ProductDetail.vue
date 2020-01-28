<template>
  <v-app>
    <v-container class="grey lighten-5">
      <v-row style="height: 500px;">
        <v-col v-for="n in 2" :key="n" cols="12" sm="5">
          <v-card style="height: 500px;">
            <v-carousel v-if="n == 1" height="500px" hide-delimiters>
              <v-carousel-item
                v-for="(item, i) in itemsrc"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
            <div v-else class=" text-left ">
              <h1 class="ml-2">{{ product.product_name }}</h1>
              <!-- <v-avatar color="grey" class="mr-4"></v-avatar> -->
              <v-icon
                class="ml-2"
                align="start"
                v-for="i in 3"
                :key="i"
                small
                color="yellow"
                >star</v-icon
              >
              <v-divider />
              <div class="ml-4 ma-3">価格:{{ product.amount }}円</div>
              <div class="ml-4 ma-2">
                メモ:★【2020年最新Bluetooth 5.１
                ワイヤレスイヤホン＆CVC8.0ノイズキャンセリング】2020年最先端Bluetooth
                5.１が搭載されたワイヤレスイヤホン通信速度・範囲・安定性が飛躍的に向上し、従来のBluetoothイヤホンの通信問題、音飛び、途切れも有効的に改善されました。CVC8.0ノイズキャンセリング技術で、ハンズフリー通話の際にノイズに邪魔されることなく、相手と快適に通話できます。通話中の雑音や周囲のノイズを抑制し、相手の声も聞き取りやすく快適な通話を実現します。
                ★【Bluetooth イヤホン Hi-Fi
                高音質&AACとaptXの高音質コーデックに対応】AACとaptXの高音質コーデックに対応し、遅延が少なくより高音質な音楽再生がご利用いただけます。大口径10mmのドライバーを搭載し、心に響く爽快な高音域を実現しました。防水性能は、水没しても故障しにくいIPX7に対応。急な雨や夏場の汗など、天候や場所を気にせず音楽を楽しめます。
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col sm="2" cols="12">
          <v-card style="height: 500px;">
            <div class="pa-10">価格:{{ product.amount }}円</div>
            <v-btn class="ma-10" @click="purchase()">購入する</v-btn>
            <v-btn>カートに入れる</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "ProductDetail",
  props: {
    product: Object
  },
  data() {
    return {
      itemsrc: [
        {
          src: "https://noteitemlist.netlify.com/pic/coffee.png"
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
  },
  methods: {
    purchase() {
      document.location.href = "./purchase";
    }
  }
};
</script>
