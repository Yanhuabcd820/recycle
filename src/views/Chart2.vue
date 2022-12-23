<script>
import { reactive, onMounted } from "vue";
import { Bar } from "vue-chartjs";
import axios from "axios";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  setup() {
    const garbageData = reactive({ data: {} });
    const garbageName = reactive({ data: {} });
    const year111 = reactive({ data: [] });
    const fields = reactive({ data: [] });
    const chartData = {
      labels: [
        "統計期",
        "金屬容器",
        "玻璃容器",
        "鋁箔包",
        "農藥容器及特殊環境用藥容器",
        "紙容器",
        "塑膠容器",
        "電池",
        "輪胎",
        "機動車輛",
        "潤滑油",
        "照明光源",
        "電子電器物品",
        "資訊物品",
      ],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#000",
          data: [40, 39, 10, 40, 39, 80, 40, 39, 10, 40, 39, 80, 40, 40],
        },
        {
          label: "Data 2",
          backgroundColor: "#acd",
          data: [40, 39, 10, 40, 39, 80, 40, 39, 10, 40, 39, 80, 40, 40],
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };
    // onMounted(() => {
    //   axios
    //     .get(
    //       "https://data.epa.gov.tw/api/v2/stat_p_133?api_key=ab767c60-3c0a-4759-a11f-a7c1d40900c2"
    //     )
    //     .then((res) => {
    //       garbageData.data = res.data.records;
    //       garbageName.data = res.data.fields;
    //       year111.data = garbageData.data.filter((item) => {
    //         // console.log("item", item.item1);
    //         return item.item1.match("110年");
    //       });
    //       garbageName.data.forEach((item) => {
    //         chartData.labels.push(item.info.label);
    //       });
    //       console.log("year111.data", year111.data[12]);
    //       console.log("garbageName.data", garbageName.data);
    //       console.log("chartData.labels", chartData.labels);
    //       console.log("then");
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // });
    return {
      chartData,
      chartOptions,
    };
  },
};
</script>
<template>
  <div class="container">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<style scoped>
.container {
  height: 200px;
}
</style>
