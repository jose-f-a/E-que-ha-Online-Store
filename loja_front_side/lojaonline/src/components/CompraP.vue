<template>
  <v-card clas="container" elevation="6" outlined>
    <v-card-title> Pagamento </v-card-title>
    <div>
      <v-item-group active-class="primary">
        <v-container>
          <v-row>
            <v-col cols="4" md="3">
              <v-item v-slot="{ active, toggle }">
                <v-card v-card elevation="24" outlined @click="toggle();selectMetodo(1,active);">
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
                <v-card v-card elevation="24" outlined  @click="toggle();selectMetodo(2,active);">
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/46/Multibanco.svg">
                    </v-img>
                  <v-scroll-y-transition>
                    <div v-if="active" class="display-3 flex-grow-1 text-center"></div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
              </v-col>
              <v-col cols="4" md="3">
              <v-item v-slot="{ active, toggle }">
                <v-card v-card elevation="24" outlined @click="toggle();selectMetodo(3,active);">
                  <v-img
                    src="../../public/imagens/credit.png">
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
<v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">MBWAY</span>
      </v-card-title>
      <v-btn @click="closeDialog">
        <v-icon> mdi-close </v-icon>
      </v-btn>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Contacto"
                v-model="contacto"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="clickContinuar">
          Confirmar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
  data: () => ({
    dialog:false,
    contacto:null
  }),
  methods: {
    clickVoltar() {
      this.$store.commit("compra/setStep", 3);
    },
    clickContinuar() {
      this.$store.commit("compra/setStep", 5);
    },
    selectMetodo(id){
        if(id==1){
          this.dialog=true
        }
        this.$store.commit("compra/setMetodoPagamento",id);
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
    pagamento: {
      get() {
        return this.$store.getters["compra/getMetodoPagamento"];
      },
      set(val) {
        this.$store.commit("compra/setMetodoPagamento", val);
      },
    },
  },
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