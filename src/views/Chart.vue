<script>
import { reactive, onMounted } from "vue";
import { Line } from "vue-chartjs";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "BarChart",
  components: { Line },
  setup() {
    const garbageData = reactive({ data: {} });
    const garbageName = reactive({ data: {} });
    const chartData = {
      labels: [],
      // labels: [
      //   "統計期",
      //   "金屬容器",
      //   "玻璃容器",
      //   "鋁箔包",
      //   "農藥容器及特殊環境用藥容器",
      //   "紙容器",
      //   "塑膠容器",
      //   "電池",
      //   "輪胎",
      //   "機動車輛",
      //   "潤滑油",
      //   "照明光源",
      //   "電子電器物品",
      //   "資訊物品",
      // ],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [40, 39, 10, 40, 39, 80, 40, 39, 10, 40, 39, 80, 40, 40],
        },
        {
          label: "Data One",
          backgroundColor: "#cff",
          data: [20, 19, 20, 10, 39, 50, 20, 39, 80, 30, 29, 60, 30, 20],
        },
      ],
    };
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };
    onMounted(() => {
      axios
        .get(
          "https://data.epa.gov.tw/api/v2/stat_p_133?api_key=ab767c60-3c0a-4759-a11f-a7c1d40900c2"
        )
        .then((res) => {
          garbageData.data = res.data.records;
          garbageName.data = res.data.fields;
          garbageName.data.forEach((item) => {
            chartData.labels.push(item.info.label);
          });
          console.log("garbageName.data", garbageName.data);
          console.log("chartData.labels", chartData.labels);
        })
        .catch((error) => {
          console.error(error);
        });
    });
    return { chartData, chartOptions };
  },
};
</script>
<template>
  <div class="container">
    <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<style scoped>
.container {
  height: 200px;
}
</style>
