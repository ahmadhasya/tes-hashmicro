<template>
  <v-snackbar
    :model-value="show"
    :color="color"
    @update:model-value="useSnackbarStore().show = !useSnackbarStore().show"
  >
    {{ message }}
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="hideMessage"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { useSnackbarStore } from "~/stores/snackbar";

export default {
  computed: {
    show() {
      return useSnackbarStore().show;
    },
    message() {
      return useSnackbarStore().message;
    },
    color() {
      return useSnackbarStore().color;
    },
  },
  methods: {
    hideMessage() {
      useSnackbarStore().hideMessage();
    },
  },
};
</script>
