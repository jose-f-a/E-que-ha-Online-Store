<template>
  <v-card clas="container" elevation="6" outlined>
    <v-card-title> Morada </v-card-title>
    <div>
      <v-row>
        <v-col cols="4" md="3">
          <v-card elevation="24" outlined disabled>
            <v-icon>mdi-plus</v-icon>
          </v-card></v-col
        >
        <v-col
          v-for="item in this.moradas"
          v-bind:key="item.moradaid"
          cols="4"
          md="3"
        >
          <v-card elevation="24" outlined disabled>
            <v-icon>mdi-plus</v-icon>
          </v-card>
        </v-col>
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
    clickVoltar() {
      this.$store.commit("compra/setStep", 2);
    },
    clickContinuar() {
      this.$store.commit("compra/setStep", 4);
    },
  },
  computed: {
    moradas: {
      get() {
        return this.$store.getters["compra/getMoradas"];
      },
      set(val) {
        this.$store.commit("compra/setMoradas", val);
      },
    },
  },
  data: () => ({}),
  components: {},
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