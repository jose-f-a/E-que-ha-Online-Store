<template>
  <v-card clas="container" elevation="6" outlined>
    <v-card-title> Confirmar </v-card-title>
    <div class="lista">
      <v-card elevation="24" outlined disabled>
        <div v-for="item in this.artigos" v-bind:key="item.produtoid">
          <artigo :artigo="item"></artigo>
        </div>
      </v-card>
    </div>
    <div class="morada">
      <v-card elevation="24" outlined> 
        <v-car-title>Morada</v-car-title>
        {{this.morada.rua}}
         </v-card>
    </div>
    <div class="metodoPagamento">
      <v-card elevation="24" outlined >
        Pagamento
        <div v-if="this.pagamento == 1">
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Logo_MBWay.svg"
          >
          </v-img>
        </div>
        <div v-if="this.pagamento == 2">
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Multibanco.svg"
          >
          </v-img>
        </div>
        <div v-if="this.pagamento == 3">
          <v-img src="../../public/imagens/credit.png"> </v-img>
        </div>
      </v-card>
    </div>
    <div>
      <v-btn class="ma-2" outlined color="indigo" @click="clickVoltar">
        Voltar
      </v-btn>
      <v-btn class="ma-2" outlined color="indigo" @click="clickFinalizar">
        Finalizar
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import ArtigoCompra from "@/components/ArtigoCompraConfirmar.vue";
export default {
  methods: {
    clickVoltar() {
      this.$store.commit("compra/setStep", 4);
    },
    clickFinalizar() {
      this.$store.dispatch("compra/criarCompra");
      // Remove o carrinho da bd depois da compra
      this.$store.dispatch("carrinho/removerDB");
      this.$router.push("/");
      this.$router.go();
      
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
    pagamento: {
      get() {
        return this.$store.getters["compra/getMetodoPagamento"];
      },
      set(val) {
        this.$store.commit("compra/setMetodoPagamento", val);
      },
    },
     morada: {
      get() {
        return this.$store.getters["compra/getMorada"];
      },
      set(val) {
        this.$store.commit("compra/setMorada", val);
      },
    },
  },
  components: {
    artigo: ArtigoCompra,
  },
};
</script>

<style scoped>
.v-card {
}
.lista {
  overflow: scroll;
  overflow-x: hidden;
  height: auto;
  max-height: 28rem;
  padding: 5px;
}
</style>