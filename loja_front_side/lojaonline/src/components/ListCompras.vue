<template>
  <v-sheet
    class="grey lighten-5"
    max-height="85vh"
    min-height="85vh"
    rounded="lg"
    elevation="3"
  >
    <div>
      <div v-for="item in listaCompras" v-bind:key="item.compraid">
        <ListComprasItem></ListComprasItem>
      </div>
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
  </v-sheet>
</template>

<script>
import ListComprasItem from "./ListComprasItem";

export default {
  name: "Compra",
  components: {
    ListComprasItem,
  },
  computed: {
    user: {
      get() {
        return this.$store.getters["user/getUser"];
      },
    },
    listaCompras: {
      get() {
        return this.$store.getters["user/getListaCompras"];
      },
    },
  },
};
</script>

<style scoped>
</style>