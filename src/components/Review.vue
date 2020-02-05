<template>
  <div class="small">
    <v-app>
      <v-subheader>使いやすさ</v-subheader>
      <v-card-text class="pt-0">
        <v-slider
          v-model="usability"
          step="1"
          :max="5"
          :min="1"
          thumb-label="always"
          ticks
        ></v-slider>
      </v-card-text>
      <v-subheader>聴き心地</v-subheader>
      <v-card-text class="pt-0">
        <v-slider
          v-model="sound"
          step="1"
          :max="5"
          :min="1"
          thumb-label="always"
          ticks
        ></v-slider>
      </v-card-text>
      <v-subheader>見た目</v-subheader>
      <v-card-text class="pt-0">
        <v-slider
          v-model="visual"
          step="1"
          :max="5"
          :min="1"
          thumb-label="always"
          ticks
        ></v-slider>
      </v-card-text>
      <v-subheader>つけ心地</v-subheader>
      <v-card-text class="pt-0">
        <v-slider
          v-model="comfortable"
          step="1"
          :max="5"
          :min="1"
          thumb-label="always"
          ticks
        ></v-slider>
      </v-card-text>
      <v-subheader>遮音性</v-subheader>
      <v-card-text class="pt-0">
        <v-slider
          v-model="blocking"
          step="1"
          :max="5"
          :min="1"
          thumb-label="always"
          ticks
        ></v-slider>
        <v-layout justify-center>
          <v-radio-group v-model="bass" row>
            <v-radio value="0">
              <template v-slot:label>
                <strong class="success--text">重低音</strong>
              </template>
            </v-radio>
            <v-radio value="1">
              <template v-slot:label>
                <strong class="primary--text">中高音</strong>
              </template>
            </v-radio>
          </v-radio-group>
        </v-layout>
      </v-card-text>
      <v-btn @click="registerReview()">レビューを送信する</v-btn>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Review",

  data() {
    return {
      account: this.$store.state.account,
      product_id: this.$store.state.itemDetail.product_id,
      usability: 3,
      sound: 3,
      visual: 3,
      comfortable: 3,
      blocking: 3,
      bass: "0"
    };
  },
  methods: {
    registerReview() {
      const axios = require("axios");
      (async () => {
        await axios({
          method: "POST",
          url: "http://104.198.57.17:5000/post_review",
          data: {
            uid: this.account.uid,
            product_id: this.product_id,
            usability: this.usability,
            sound: this.sound,
            visual: this.visual,
            comfortable: this.comfortable,
            blocking: this.blocking,
            bass: this.bass
          }
        })
          .then(response => (this.info = response.data))
          .catch(error => console.log(error.response));
        if (this.info == "success") {
          alert("登録が完了しました");
        }
      })();
    }
  }
};
</script>
<style>
.small {
  max-width: 450px;
}
</style>
