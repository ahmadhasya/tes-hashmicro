import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', {
  state: () => ({
    show: false,
    message: '',
    color: '',
  }),
  actions: {
    showMessage({ message, color }) {
      this.show = true
      this.message = message
      this.color = color
    },
    hideMessage() {
      this.show = false
      this.message = ''
      this.color = ''
    },
  },
})
