<template>
  <div class="small">
    <v-row>
      <v-col sm="30">
        <v-card class="ma-1">
          <radar-chart :chart-data="datacollection"></radar-chart>
        </v-card>
      </v-col>
      <v-col sm="30">
        <v-card class="ma-1">
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import RadarChart from "../plugins/chart.js";

export default {
  name: "Review",
  props: {
    datacollection: Object
  },
  components: {
    RadarChart
  },
  data() {
    return {
      usability: 3,
      sound: 3,
      visual: 3,
      comfortable: 3,
      blocking: 3
    };
  }
};
</script>

<style>
.small {
  max-width: 450px;
}
</style>
