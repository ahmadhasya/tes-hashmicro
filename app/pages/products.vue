<template>
  <v-container>
    <v-toolbar color="transparent">
      <v-toolbar-title class="text-primary text-h5"> Products </v-toolbar-title>
      <v-spacer></v-spacer>
      <edit-product></edit-product>
    </v-toolbar>
    <v-row no-gutters>
      <v-col lg="4" md="12">
        <v-text-field
          append-inner-icon="mdi-magnify"
          label="Search"
          density="compact"
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>

    <v-data-table :headers="headers" :items="items" item-key="name">
      <template v-slot:item.price="{ value }">
        {{ toIndonesiaMoneyFormat(value) }}
      </template>
      <template v-slot:item.cogs="{ value }">
        {{ toIndonesiaMoneyFormat(value) }}
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn
          icon
          size="small"
          variant="text"
          color="red"
          v-tooltip:top="'Delete'"
          @click="deleteProduct"
          ><v-icon>mdi-delete</v-icon></v-btn
        >
        <v-btn
          icon
          size="small"
          variant="text"
          color="purple"
          v-tooltip:top="'Stock Opname'"
          ><v-icon>mdi-list-box</v-icon></v-btn
        >
        <edit-product :product_id="item.name" :icon="true"></edit-product>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { title: "Product Name", value: "name" },
      { title: "Product Price", value: "price", align: "end" },
      { title: "Cost of Sales", value: "cogs", align: "end" },
      { title: "Stock", value: "stock", align: "end" },
      { title: "Action", value: "action", align: "end" },
    ],
    items: [
      { name: "Product 1", price: 1500000, cogs: 900000, stock: 25 },
      { name: "Product 2", price: 200000, cogs: 120000, stock: 80 },
      { name: "Product 3", price: 999000, cogs: 600000, stock: 50 },
      { name: "Product 4", price: 75000, cogs: 40000, stock: 120 },
      { name: "Product 5", price: 400000, cogs: 250000, stock: 30 },
      { name: "Product 6", price: 1500000, cogs: 900000, stock: 25 },
      { name: "Product 7", price: 200000, cogs: 120000, stock: 80 },
      { name: "Product 8", price: 999000, cogs: 600000, stock: 50 },
      { name: "Product 9", price: 75000, cogs: 40000, stock: 120 },
      { name: "Product 10", price: 400000, cogs: 250000, stock: 30 },
      { name: "Product 11", price: 1500000, cogs: 900000, stock: 25 },
      { name: "Product 12", price: 200000, cogs: 120000, stock: 80 },
      { name: "Product 13", price: 999000, cogs: 600000, stock: 50 },
      { name: "Product 14", price: 75000, cogs: 40000, stock: 120 },
      { name: "Product 15", price: 400000, cogs: 250000, stock: 30 },
    ],
  }),
  methods: {
    deleteProduct() {
      var that = this;
      useLoadingStore().showLoading("Deleting product");
      setTimeout(() => {
        useLoadingStore().hideLoading();
        useSnackbarStore().showMessage({
          message: "Product saved",
          color: "success",
        });
        that.dialog = false;
      }, 500);
    },
  },
};
</script>
