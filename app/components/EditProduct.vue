<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-if="icon"
        icon
        size="small"
        variant="text"
        color="green"
        v-tooltip:top="(product_id ? 'Edit' : 'New') + ' Product'"
        v-bind="activatorProps"
        ><v-icon>mdi-pencil</v-icon></v-btn
      >
      <v-btn v-else v-bind="activatorProps" color="primary" variant="flat">
        {{ product_id ? "Edit" : "New" }} Product
      </v-btn>
    </template>
    <v-card max-width="800">
      <v-card-title class="text-h5 text-primary"
        >{{ product_id ? "Edit" : "New" }} Product
        {{ product_id }}</v-card-title
      >
      <v-divider></v-divider>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-text-field
              prepend-inner-icon="mdi-cart"
              density="compact"
              label="Product Name"
            ></v-text-field>
          </v-col>
          <v-col lg="6" cols="12">
            <v-text-field
              prepend-inner-icon="mdi-cash"
              density="compact"
              label="Product Price"
              type="number"
            ></v-text-field>
          </v-col>
          <v-col lg="6" cols="12">
            <v-text-field
              prepend-inner-icon="mdi-cash-multiple"
              density="compact"
              label="Cost of Sales"
              type="number"
            ></v-text-field>
          </v-col>
          <v-col lg="4" cols="12">
            <v-text-field
              prepend-inner-icon="mdi-storefront"
              density="compact"
              label="Stock"
              type="number"
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
          @click="saveProduct"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["icon", "product_id"],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    saveProduct() {
      var that = this;
      useLoadingStore().showLoading("Saving product");
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
