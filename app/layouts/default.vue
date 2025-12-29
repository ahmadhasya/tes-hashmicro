<template>
  <v-app>
    <global-snackbar></global-snackbar>
    <global-loading></global-loading>
    <Title>Hashmicro</Title>
    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
    >
      <v-toolbar class="bg-white pa-1 text-primary">
        <v-avatar class="mx-3"
          ><v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UwGgy7WQXPLPZLQ5FfCte0re12jApwz9GQ&s"
          ></v-img
        ></v-avatar>
        <p class="font-weight-bold">Hashmicro</p>
        <v-spacer></v-spacer>
        <v-btn
          v-if="$vuetify.display.mobile"
          icon="mdi-chevron-down"
          variant="text"
          @click="drawer = false"
        ></v-btn>
      </v-toolbar>

      <v-divider></v-divider>
      <v-list nav>
        <template v-for="item in items">
          <v-list-subheader v-if="item.subheader" :key="item.subheader">{{
            item.subheader
          }}</v-list-subheader>
          <v-list-group
            v-else-if="item.subgroup"
            :key="item.subgroup"
            :value="item.subgroup"
          >
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="item.subgroup"
                :prepend-icon="item.icon"
              ></v-list-item>
            </template>
            <template v-for="submenu in item.menus" :key="submenu.value">
              <v-list-item
                color="primary"
                :title="submenu.title"
                :value="submenu.value"
                :to="submenu.value"
              ></v-list-item>
            </template>
          </v-list-group>
          <v-list-item
            v-else
            color="primary"
            :key="item.value"
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.value"
            :to="item.value"
          ></v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar style="background-color: #f2f7ff" flat class="text-primary">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="primary">
        </v-app-bar-nav-icon>
      </template>
      <h3 class="ml-3">Halo, Ahmad Hasya</h3>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-power" @click="logout()"></v-btn>
    </v-app-bar>
    <v-main><slot /></v-main>
    <v-footer :app="!$vuetify.display.mobile">
      <v-spacer></v-spacer>Hashmicro - {{ new Date().getFullYear() }}</v-footer
    >
  </v-app>
</template>

<script>
import GlobalLoading from '../components/GlobalLoading.vue';
import GlobalSnackbar from '../components/GlobalSnackbar.vue';
export default {
  components: { GlobalSnackbar, GlobalLoading },
  data: () => ({
    drawer: true,
    user: null,
    items: [
      {
        title: "Dashboard",
        value: "/dashboard",
        icon: "mdi-view-dashboard",
      },
      {
        title: "Products",
        value: "/products",
        icon: "mdi-store",
      },
      {
        subgroup: "Project",
        icon: "mdi-account-hard-hat",
        is_develop: true,
        menus: [
          {
            title: "Worker List",
            value: "/workers",
          },
          {
            title: "Project Calendar",
            value: "/project_calendar",
          }
        ],
      },
    ],
  }),
  mounted() {
    if (this.$vuetify.display.mobile) {
      this.drawer = false;
    }
  },
  methods: {
    async logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
