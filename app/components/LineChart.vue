<template>
  <div>
    <v-card>
      <v-card-text>
        <Line :data="chartData" :options="chartOptions" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "LineChartExample",
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Visitors",
            borderColor: "#9c171e",
            backgroundColor: "rgba(156, 23, 30, 0.3)",
            tension: 0.4,
            fill: true,
            data: [120, 150, 180, 90, 200, 250],
          },
          {
            label: "Signups",
            borderColor: "#fea110",
            backgroundColor: "rgba(254, 161, 16, 0.3)",
            tension: 0.4,
            fill: true,
            data: [80, 100, 130, 70, 160, 190],
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
            text: "Monthly Visitors & Signups",
          },
        },
      },
    };
  },
};
</script>
