<template>
  <div>
    <compra></compra>
    <!-- <v-stepper alt-labels>
      <v-stepper-header>
        <v-stepper-step step="1"> Pedido Processado </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2"> 2 </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3"> 3 </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4"> 4 </v-stepper-step>
      </v-stepper-header>
    </v-stepper> -->
  </div>
</template>

<script>
import compra from "./ListComprasItem";

export default {
  name: "Compra",
  components: {
    compra,
  },
  computed: {
    user: {
      get() {
        return this.$store.getters["appbar/getUser"];
      },
    },
  },
};
</script>

<style scoped>
</style>