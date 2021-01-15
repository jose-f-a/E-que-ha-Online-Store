<template>
  <v-card class="content" elevation="5" outlined>
    <v-card-title> Confirmar </v-card-title>

    <div class="artigos">
      <v-card elevation="3" outlined disabled>
        <v-card-title> Artigos </v-card-title>

        <div v-for="item in this.artigos" v-bind:key="item.produtoid">
          <artigo :artigo="item"></artigo>
        </div>
      </v-card>
    </div>

    <v-row>
      <v-col cols="6">
        <div>
          <v-card elevation="3" outlined class="morada">
            <v-card-title>Morada</v-card-title>
            <div class="morada-info">
              <p class="text-left">
                {{ this.morada.rua }}, {{ this.morada.cidade }}
              </p>
              <p class="text-left">{{ this.morada.codigo_postal }}</p>
              <p class="text-left">{{ this.morada.pais }}</p>
            </div>
          </v-card>
        </div>
      </v-col>

      <v-col cols="6">
        <div>
          <v-card elevation="3" outlined class="metodoPagamento">
            <v-card-title>Pagamento</v-card-title>

            <div v-if="this.pagamento == 1">
              <v-img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Logo_MBWay.svg"
                width="150"
                height="150"
                contain
                :aspect-ratio="4 / 3"
              >
              </v-img>
            </div>
            <div v-if="this.pagamento == 2">
              <v-img
                src="https://www.multibase.pt/wp-content/uploads/2015/07/1200px-Multibanco.svg.png"
                width="150"
                height="150"
                contain
                :aspect-ratio="4 / 3"
              >
              </v-img>
            </div>
            <div v-if="this.pagamento == 3">
              <v-img
                src="../../public/imagens/credit.png"
                width="150"
                height="150"
                contain
                :aspect-ratio="4 / 3"
              >
              </v-img>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="butoes">
          <v-btn class="ma-2" color="blue darken-2" @click="clickVoltar">
            Voltar
          </v-btn>

          <v-btn
            class="ma-2"
            outlined
            color="blue darken-2"
            @click="clickFinalizar"
          >
            Finalizar
          </v-btn>
        </div></v-col
      >
    </v-row>
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
.artigos {
  overflow: scroll;
  overflow-x: hidden;
  height: auto;
  height: 30rem;
  min-height: 30rem;
  max-height: 30rem;
  padding: 5px;
}
.morada {
  height: 15rem;
  min-height: 15rem;
  max-height: 15rem;
  padding: 5px;
}
.morada-info {
  padding-left: 1rem;
  line-height: 10px;
}
.metodoPagamento {
  height: 15rem;
  min-height: 15rem;
  max-height: 15rem;
  padding: 5px;
}
</style>