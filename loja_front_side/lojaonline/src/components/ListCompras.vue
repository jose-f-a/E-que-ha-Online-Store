<template>
  <v-sheet
    class="grey lighten-5"
    max-height="85vh"
    min-height="85vh"
    rounded="lg"
    elevation="3"
  >
    <v-card :loading="this.loading">
      <v-card-title>As suas encomendas</v-card-title>

      <div v-for="compra in listaComprasVisiveis" v-bind:key="compra.compraid">
        <ListComprasItem v-bind:compra="compra"></ListComprasItem>
      </div>

      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="paginas"
          circle
          class="my-4"
          :total-visible="7"
        ></v-pagination>
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
import ListComprasItem from "./ListComprasItem";

export default {
  data() {
    return {
      page: 1,
      name: "Compra",
    };
  },
  components: {
    ListComprasItem,
  },
  methods: {},
  watch: {
    page: function () {
      this.$store.commit("user/setComprasVisiveis", this.page);
    },
  },
  computed: {
    user: {
      get() {
        return this.$store.getters["user/getUser"];
      },
    },
    listaComprasVisiveis: {
      get() {
        return this.$store.getters["user/getComprasVisiveis"];
      },
    },
    loading: {
      get() {
        return this.$store.getters["user/getLoading"];
      },
      set(val) {
        return this.$store.commit("user/setLoading", val);
      },
    },
    paginas: {
      get() {
        return this.$store.getters["user/getPaginas"];
      },
    },
  },
};
</script>

<style scoped>
</style>