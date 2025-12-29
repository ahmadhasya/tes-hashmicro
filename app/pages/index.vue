<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center" style="height: 90vh">
      <v-col xs="12" sm="8" md="4" lg="4">
        <v-form @submit.prevent="loginClicked">
          <v-card class="elevation-1 pa-3">
            <v-card-text>
              <v-row no-gutters align="center" justify="center">
                <span class="text-h4 text-primary text-center my-2">
                  Hashmicro
                </span>
              </v-row>
              <v-row no-gutters align="center" justify="center" class="mb-3">
                <v-avatar>
                  <v-img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UwGgy7WQXPLPZLQ5FfCte0re12jApwz9GQ&s"
                  ></v-img>
                </v-avatar>
              </v-row>
              <v-text-field
                append-icon="mdi-account"
                name="username"
                label="Username"
                type="text"
                density="compact"
              ></v-text-field>
              <v-text-field
                append-icon="mdi-lock"
                name="password"
                label="Password"
                type="password"
                density="compact"
              ></v-text-field>
              <v-btn
                block
                color="secondary"
                type="submit"
                outlined
              >
                Login
              </v-btn>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
definePageMeta({
  layout: "",
});
import { useLoadingStore } from "~/stores/loading";

export default {
  methods: {
    loginClicked() {
      var that = this;
      useLoadingStore().showLoading();
      setTimeout(() => {
        useLoadingStore().hideLoading();
        that.$router.push("/dashboard");
      }, 500);
    },
  },
};
</script>
