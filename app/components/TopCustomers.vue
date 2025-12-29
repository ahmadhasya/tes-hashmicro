<template>
  <v-card>
    <v-card-text>
      <v-table fixed-header style="height: 275px">
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Orders</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in customers" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.orders }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      customers: [
        {
          name: "Customer 1",
          orders: 57,
        },
        {
          name: "Customer 2",
          orders: 52,
        },
        {
          name: "Customer 3",
          orders: 43,
        },
        {
          name: "Customer 4",
          orders: 42,
        },
        {
          name: "Customer 5",
          orders: 40,
        },
        {
          name: "Customer 6",
          orders: 33,
        },
      ],
    };
  },
};
</script>
