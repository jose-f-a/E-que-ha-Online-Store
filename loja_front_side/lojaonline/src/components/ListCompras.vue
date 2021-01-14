<template>
  <v-sheet
    class="grey lighten-5"
    max-height="85vh"
    min-height="85vh"
    rounded="lg"
    elevation="3"
  >
    <div class="lista">
      <p class="text-h4 text-left">As suas encomendas</p>
      <div v-for="compra in listaCompras" v-bind:key="compra.compraid">
        <ListComprasItem v-bind:compra="compra"></ListComprasItem>
      </div>
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
.lista {
  padding: 25px;
}
</style>