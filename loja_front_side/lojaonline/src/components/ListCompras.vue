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
        <ListComprasItem
          v-bind:compra="compra"
          @click="onClickItem"
        ></ListComprasItem>
      </div>
      <ListCompraItemDialog></ListCompraItemDialog>
    </div>
  </v-sheet>
</template>

<script>
import ListComprasItem from "./ListComprasItem";
import listCompraItemDialog from "./ListCompraItemDialog";

export default {
  name: "Compra",
  components: {
    ListComprasItem,
    listCompraItemDialog,
  },
  methods: {
    onClickItem() {
      this.$store.commit("user/changeCompraDialog");
    },
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