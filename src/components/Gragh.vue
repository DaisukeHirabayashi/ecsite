<script>
import { Radar, mixins } from "vue-chartjs";
export default {
  mixins: [Radar, mixins.reactiveData],
  data() {
    return {
      options: {
        scale: {
          angleLines: {
            display: false
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 5
          }
        }
      }
    };
  },
  props: {
    soundData: Array
  },
  watch: {
    soundData: function() {
      this.updateChartData();
    }
  },
  methods: {
    updateChartData() {
      const newChartData = Object.assign({}, this.chartData);
      newChartData.datasets[0].data = this.soundData;
      this.chartData = newChartData;
    }
  },
  mounted: function() {
    this.chartData = {
      labels: ["聴き心地", "遮音性", "見た目", "付け心地", "使いやすさ"],
      datasets: [
        {
          label: "曲のそれぞれの評価",
          data: this.soundData,
          backgroundColor: "RGBA(225,95,150, 0.5)",
          borderColor: "RGBA(225,95,150, 1)",
          borderWidth: 1,
          pointBackgroundColor: "RGB(46,106,177)"
        }
      ]
    };
  }
};
</script>
