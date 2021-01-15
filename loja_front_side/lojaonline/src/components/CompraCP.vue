<template>
  <v-card clas="container" elevation="6" outlined>
    <v-card-title> Confirmar Produtos</v-card-title>

    <div class="lista">
      <v-card elevation="3" disabled>
        <div v-for="item in this.artigos" v-bind:key="item.produtoid">
          <artigo :artigo="item"></artigo>
        </div>
      </v-card>
    </div>

    <div>
      <v-btn class="ma-2" color="blue darken-2" @click="clickVoltar">
        Voltar
      </v-btn>

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
import ArtigoCompra from "@/components/ArtigoCompraConfirmar.vue";
export default {
  data: () => ({}),
  components: {
    artigo: ArtigoCompra,
  },
  methods: {
    clickContinuar() {
      this.$store.dispatch("compra/getMoradasDB");
      this.$store.commit("compra/setStep", 3);
    },
    clickVoltar() {
      this.$store.commit("compra/setStep", 1);
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
  },
  created: function () {
    this.$store.dispatch("compra/getArtigosById");
  },
};
</script>

<style scoped>
.lista {
  overflow: scroll;
  overflow-x: hidden;
  height: fit-content;
  max-height: 80vh;
  padding: 2rem;
}
</style>