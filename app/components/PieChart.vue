<template>
  <div>
    <v-card>
      <v-card-text>
        <v-row align="center" justify="center">
          <Pie
            style="height: 300px"
            :data="chartData"
            :options="chartOptions"
          />
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register Chart.js modules
ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default {
  name: "PieChartExample",
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: [
          "Product 1",
          "Product 2",
          "Product 3",
          "Product 4",
          "Product 5",
        ],
        datasets: [
          {
            label: "Top Products",
            backgroundColor: [
              "#9c171e",
              "#fea110",
              "#2a2a30",
              "#4CAF50",
              "#2196F3",
            ],
            data: [12, 19, 3, 5, 2],
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
            text: "Top Products",
          },
        },
      },
    };
  },
};
</script>
