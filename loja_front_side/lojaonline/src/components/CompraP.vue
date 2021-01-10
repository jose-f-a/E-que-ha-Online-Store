<template>
  <v-card clas="container" elevation="6" outlined>
    <v-card-title> Pagamento </v-card-title>
    <div>
      <v-item-group active-class="primary">
        <v-container>
          <v-row>
            <v-col cols="4" md="3">
              <v-item v-slot="{ active, toggle }">
                <v-card v-card elevation="24" outlined  @click="toggle">
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Logo_MBWay.svg">
                    </v-img>
                  <v-scroll-y-transition>
                    <div v-if="active" class="display-3 flex-grow-1 text-center"></div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
              </v-col>
              <v-col cols="4" md="3">
              <v-item v-slot="{ active, toggle }">
                <v-card v-card elevation="24" outlined  @click="toggle">
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Logo_MBWay.svg">
                    </v-img>
                  <v-scroll-y-transition>
                    <div v-if="active" class="display-3 flex-grow-1 text-center"></div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
              </v-col>
          </v-row>
        </v-container>
      </v-item-group>
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
      this.$store.commit("compra/setStep", 3);
    },
    clickContinuar() {
      this.$store.commit("compra/setStep", 5);
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