<template>
  <v-container>
    <v-toolbar color="transparent">
      <v-toolbar-title class="text-primary text-h5"> Workers </v-toolbar-title>
      <v-spacer></v-spacer>
      <edit-worker></edit-worker>
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
          @click="deleteWorker"
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
        <edit-worker :worker_id="item.name" :icon="true"></edit-worker>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { title: "Worker Name", value: "name" },
      { title: "Role/Job", value: "role" },
      { title: "Action", value: "action", align: "end" },
    ],
    items: [
      { name: "Worker 1", role: "Courier" },
      { name: "Worker 2", role: "Stock Manager" },
      { name: "Worker 3", role: "Packaging" },
      { name: "Worker 4", role: "Packaging" },
      { name: "Worker 5", role: "Courier" },
    ],
  }),
  methods: {
    deleteWorker() {
      var that = this;
      useLoadingStore().showLoading("Deleting worker");
      setTimeout(() => {
        useLoadingStore().hideLoading();
        useSnackbarStore().showMessage({
          message: "Worker saved",
          color: "success",
        });
        that.dialog = false;
      }, 500);
    },
  },
};
</script>
