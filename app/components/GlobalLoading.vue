<template>
  <v-dialog :model-value="loading" persistent width="300">
    <v-card color="primary" dark>
      <v-card-text>
        {{ message ?? "Mohon tunggu" }}
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { useLoadingStore } from "~/stores/loading";

export default {
  computed: {
    loading() {
      return useLoadingStore().show;
    },
    message() {
      return useLoadingStore().message;
    },
  },
  methods: {
    hideLoading() {
      useLoadingStore().hideLoading();
    },
  },
};
</script>
