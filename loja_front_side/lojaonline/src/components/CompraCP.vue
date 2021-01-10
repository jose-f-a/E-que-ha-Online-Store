<template>
  <v-card clas="container" elevation="6" outlined>
    <v-card-title> Confirmar Produtos</v-card-title>
    <div class="lista">
      <v-card elevation="24" outlined disabled>
        <div v-for="item in this.artigos" v-bind:key="item.produtoid">
          <artigo :artigo="item"></artigo>
        </div>
      </v-card>
    </div>
    <div>
       <v-btn class="ma-2" outlined color="indigo" @click="clickVoltar">
        Voltar
      </v-btn>
      <v-btn class="ma-2" outlined color="indigo" @click="clickContinuar">
        Continuar
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import ArtigoCarrinho from "@/components/ArtigoCompra.vue";
export default {
  methods: {
    clickContinuar(){
        this.$store.commit("compra/setStep", 3);
    },
    clickVoltar(){
        this.$store.commit("compra/setStep", 1);
    }
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
  data: () => ({}),
  components: {
    artigo: ArtigoCarrinho,
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