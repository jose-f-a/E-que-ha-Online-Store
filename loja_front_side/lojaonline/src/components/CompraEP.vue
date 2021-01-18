<template>
  <v-card clas="container" elevation="3" outlined :loading="this.loading">
    <v-card-title> Editar Artigos</v-card-title>
    <div class="lista">
      <v-card elevation="3">
        <div v-for="item in this.artigos" v-bind:key="item.produtoid">
          <artigo :artigo="item"></artigo>
        </div>
      </v-card>
    </div>

    <div>
      <p class="text-left text-h5 font-weight-bold total">
        Total: {{ this.total }}€
      </p>

      <v-btn
        class="ma-2"
        outlined
        color="blue darken-2"
        @click="clickContinuar"
      >
        Continuar
        <v-icon right>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import ArtigoCompra from "@/components/ArtigoCompra.vue";

export default {
  methods: {
    clickContinuar() {
      this.$store.commit("compra/setStep", 2);
      //Atualizar os dados dos produtos com os dados da db
      this.$store.dispatch("compra/updateDadosArtigos");
    },
  },
  computed: {
    artigos: {
      get() {
        return this.$store.getters["compra/getArtigos"];
      },
      set(val) {
        this.$store.commit("compra/setArtigos", val);
      },
    },
    loading: {
      get() {
        return this.$store.getters["compra/getLoading"];
      },
      set(val) {
        return this.$store.commit("compra/setLoading", val);
      },
    },
    total: {
      get() {
        return this.$store.getters["compra/getTotal"];
      },
      set(val) {
        return this.$store.commit("compra/setTotal", val);
      },
    },
  },
  mounted: function () {
    console.log("montado");
    this.$store.dispatch("compra/totalCompra");
  },
  data: () => ({}),
  components: {
    artigo: ArtigoCompra,
  },
};
</script>

<style scoped>
.lista {
  overflow: scroll;
  overflow-x: hidden;
  height: 60vh;
  min-height: 60vh;
  max-height: 60vh;
  padding: 2rem;
}
.total {
  padding-left: 2rem;
}
</style>