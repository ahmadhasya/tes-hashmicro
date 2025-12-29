<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-if="icon"
        icon
        size="small"
        variant="text"
        color="green"
        v-tooltip:top="(worker_id ? 'Edit' : 'New') + ' Worker'"
        v-bind="activatorProps"
        ><v-icon>mdi-pencil</v-icon></v-btn
      >
      <v-btn v-else v-bind="activatorProps" color="primary" variant="flat">
        {{ worker_id ? "Edit" : "New" }} Worker
      </v-btn>
    </template>
    <v-card max-width="800">
      <v-card-title class="text-h5 text-primary"
        >{{ worker_id ? "Edit" : "New" }} Worker {{ worker_id }}</v-card-title
      >
      <v-divider></v-divider>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-text-field
              prepend-inner-icon="mdi-account-hard-hat"
              density="compact"
              label="Worker Name"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              prepend-inner-icon="mdi-shovel"
              density="compact"
              label="Role/Job"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="ms-auto"
          text="Save"
          variant="flat"
          color="primary"
          @click="saveWorker"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["icon", "worker_id"],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    saveWorker() {
      var that = this;
      useLoadingStore().showLoading("Saving worker");
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
