// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#9c171e",
            secondary: "#fea110",
            // background: "#2a2a30"
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
