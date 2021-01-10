<template>
  <v-card clas="container" elevation="6" outlined>
    <v-card-title> Pagamento </v-card-title>
    <div>
      <v-row>
        <v-col cols="4" md="3">
          <v-card elevation="24" outlined disabled>
            <v-img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Logo_MBWay.svg"></v-img>
          </v-card></v-col
        >
        
      </v-row>
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

export default {
  methods: {
    clickVoltar(){
        this.$store.commit("compra/setStep", 3);
    },
    clickContinuar(){
        this.$store.commit("compra/setStep", 5);
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