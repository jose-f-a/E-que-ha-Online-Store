<template>
  <v-card clas="container" elevation="6" outlined>
    <v-card-title> Morada </v-card-title>
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

export default {
  methods: {
    clickVoltar(){
        this.$store.commit("compra/setStep", 2);
    },
    clickContinuar(){
        this.$store.commit("compra/setStep", 4);
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