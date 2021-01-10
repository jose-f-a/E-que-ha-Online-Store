<template>
  <v-card clas="container" elevation="6" outlined>
    <v-card-title> Editar Produtos</v-card-title>
    <div class="lista">
      <v-card elevation="24" outlined>
        <div v-for="item in this.artigos" v-bind:key="item.produtoid">
          <artigo :artigo="item"></artigo>
        </div>
      </v-card>
    </div>
    <div>
      <v-btn class="ma-2" outlined color="indigo" @click="clickContinuar">
        Continuar
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import ArtigoCompra from "@/components/ArtigoCompra.vue";
export default {
  methods: {
    clickContinuar(){
        this.$store.commit("compra/setStep", 2);
        //Atualizar os dados dos produtos com os dados da db
        this.$store.dispatch("compra/updateDadosArtigos")
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