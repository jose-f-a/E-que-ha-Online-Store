<template>
  <v-dialog v-model="isOpen" max-width="75%">
    <v-card>
      <v-card-title class="headline"> Encomenda </v-card-title>
      <v-stepper alt-labels>
        <v-stepper-header>
          <v-stepper-step step="1"> Pedido Processado </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2"> 2 </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3"> 3 </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="4"> 4 </v-stepper-step>
        </v-stepper-header>
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