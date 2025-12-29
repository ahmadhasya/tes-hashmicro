<template>
  <div>
    <v-card>
      <v-card-text>
        <Bar :data="chartData" :options="chartOptions" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
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
  name: "BarChartExample",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Sales",
            backgroundColor: "#9c171e",
            data: [40, 55, 30, 70, 85],
          },
          {
            label: "Revenue",
            backgroundColor: "#fea110",
            data: [60, 75, 45, 90, 100],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Monthly Performance",
          },
        },
      },
    };
  },
};
</script>
