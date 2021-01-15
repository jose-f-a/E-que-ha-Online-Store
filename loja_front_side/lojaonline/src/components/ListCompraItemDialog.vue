<template>
  <v-dialog v-model="isOpen" max-width="75%">
    <v-card>
      <v-card-title class="headline"> Encomenda </v-card-title>
      <v-stepper v-model="e6" vertical>
        <v-stepper-step complete step="1"> Pedido Recebido </v-stepper-step>
        <v-stepper-content step="1">
          <v-card color="grey lighten-1" class="mb-12" height="200px">
            A embalar produtos
          </v-card>
        </v-stepper-content>
        <v-stepper-step complete step="2"> Produtos embalados </v-stepper-step>

        <v-stepper-step complete step="3">
          Select an ad format and name ad unit
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        </v-stepper-content>

        <v-stepper-step step="4"> View setup instructions </v-stepper-step>
        <v-stepper-content step="4">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        </v-stepper-content>
      </v-stepper>
      <v-card-text> </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="this.closeDialog"> Fechar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  methods: {
    closeDialog() {
      this.$store.commit("user/changeCompraDialog");
    },
  },
  computed: {
    isOpen: {
      get() {
        return this.$store.getters["user/getCompraDialog"];
      },
      set(val) {
        this.$store.commit("user/setCompraDialog", val);
      },
    },
  },
};
</script>

<style>
</style>