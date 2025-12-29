import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () => ({
    show: false,
    message: "",
  }),
  actions: {
    showLoading(message) {
      this.show = true;
      this.message = message;
    },
    hideLoading() {
      this.show = false;
      this.message = null;
    },
  },
});
