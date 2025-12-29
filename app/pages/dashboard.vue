<template>
  <v-container>
    <v-row dense>
      <v-col lg="4" md="12">
        <v-card color="green" dark to="/products">
          <v-card-title class="text-h5"> Success </v-card-title>

          <v-card-subtitle>Success transactions</v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
            <h3 class="mr-5">100 orders</h3>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4" md="12">
        <v-card color="red" dark to="/products">
          <v-card-title class="text-h5"> Cancelled </v-card-title>

          <v-card-subtitle>Cancelled transactions</v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
            <h3 class="mr-5">4 orders</h3>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4" md="12">
        <v-card color="orange" dark to="/products" class="text-white">
          <v-card-title class="text-h5"> Pending </v-card-title>

          <v-card-subtitle>Pending transactions</v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
            <h3 class="mr-5">25 orders</h3>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="6" md="12">
        <div>
          <pie-chart></pie-chart>
        </div>
      </v-col>
      <v-col lg="6" md="12">
        <top-customers></top-customers>
      </v-col>
      <v-col lg="6" md="12">
        <bar-chart></bar-chart>
      </v-col>
      <v-col lg="6" md="12">
        <line-chart></line-chart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from "../components/BarChart.vue";
import PieChart from "../components/PieChart.vue";
import TopCustomers from "../components/TopCustomers.vue";
export default {
  components: { BarChart, PieChart, TopCustomers },
};
</script>
