<script>
import { reactive } from "vue";
import { Bar } from "vue-chartjs";
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
  components: { Bar },
  setup() {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [40, 39, 10, 40, 39, 80, 40],
        },
        {
          label: "Data One",
          backgroundColor: "#cff",
          data: [20, 19, 50, 20, 19, 30, 80],
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return { data, options };
  },
};
</script>
<template>
  <div class="container">
    <Bar id="my-chart-id" :options="options" :data="data" />
  </div>
</template>

<style scoped>
.container {
  height: 200px;
}
</style>
