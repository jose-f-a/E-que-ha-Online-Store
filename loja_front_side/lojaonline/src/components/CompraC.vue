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
      <v-col>
        <p class="text-left text-h5 font-weight-bold total">
          Total: {{ this.total }}€
        </p>
      </v-col>
    </v-row>

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
  data: () => ({
  }),
  methods: {
    clickVoltar() {
      this.$store.commit("compra/setStep", 4);
      this.$store.commit("compra/setMetodoPagamento", null);
    },
    clickFinalizar() {
      this.snackbar=true
      this.$store.dispatch("compra/criarCompra");
      // Remove o carrinho da bd depois da compra
      this.$store.commit("compra/setCompra",false);
      this.$store.dispatch("carrinho/removerDB");
      
      this.$store.commit("compra/setCompra",false);
      this.$store.dispatch("user/loadListCompras", 1);
      this.$store.commit("user/setShowCompras", true);
      this.$store.commit("compra/setStep",1)
      this.$store.commit("compra/setArtigos",[])
      this.$store.commit("compra/setMoradas",[])
      this.$store.commit("compra/setMorada",null)
      this.$store.commit("compra/setMetodoPagamento",null)
      this.$store.commit("compra/setLoading",null)
      this.$store.commit("compra/setTotal",0.0)
      this.$store.commit("user/setShowPerfil", false);
      this.$router.push("/perfil");
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
    total: {
      get() {
        return this.$store.getters["compra/getTotal"];
      },
      set(val) {
        return this.$store.commit("compra/setTotal", val);
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
  height: fit-content;
  min-height: fit-content;
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
.total {
  padding-left: 2rem;
}
</style>