<template>
  <v-card clas="container" elevation="6" outlined>
    <v-card-title> Pagamento </v-card-title>

    <div class="lista">
      <v-item-group active-class="primary">
        <v-container class="content">
          <v-row>
            <v-col cols="4" md="3">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  v-card
                  elevation="3"
                  outlined
                  @click="
                    toggle();
                    selectMetodo(1, active);
                  "
                >
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Logo_MBWay.svg"
                    width="300"
                    height="300"
                    contain
                    :aspect-ratio="4 / 3"
                  >
                  </v-img>
                  <v-scroll-y-transition>
                    <div
                      v-if="active"
                      class="display-3 flex-grow-1 text-center"
                    ></div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>

            <v-col cols="4" md="3">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  v-card
                  elevation="3"
                  outlined
                  @click="
                    toggle();
                    selectMetodo(2, active);
                  "
                >
                  <v-img
                    src="https://www.multibase.pt/wp-content/uploads/2015/07/1200px-Multibanco.svg.png"
                    width="300"
                    height="300"
                    contain
                    :aspect-ratio="4 / 3"
                  >
                  </v-img>

                  <v-scroll-y-transition>
                    <div
                      v-if="active"
                      class="display-3 flex-grow-1 text-center"
                    ></div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>

            <v-col cols="4" md="3">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  v-card
                  elevation="3"
                  outlined
                  @click="
                    toggle();
                    selectMetodo(3, active);
                  "
                >
                  <v-img
                    src="../../public/imagens/credit.png"
                    width="300"
                    height="300"
                    contain
                    :aspect-ratio="4 / 3"
                  >
                  </v-img>

                  <v-scroll-y-transition>
                    <div
                      v-if="active"
                      class="display-3 flex-grow-1 text-center"
                    ></div>
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

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  class="input-contacto"
                  label="Contacto"
                  v-model="contacto"
                  type="number"
                  prepend-icon="mdi-phone"
                  :rules="[rules.numbers]"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeDialog"> Fechar </v-btn>
          <v-btn color="blue darken-1" text @click="clickContinuar">
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div>
      <v-btn class="ma-2" color="blue darken-2" @click="clickVoltar">
        Voltar
      </v-btn>

      <v-btn
        class="ma-2"
        outlined
        color="blue darken-2"
        @click="clickContinuar"
      >
        Continuar
        <v-icon right>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      bottom
      color="red"
      elevation="15"
    >
      Selecione um metodo de pagamento
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    contacto: null,
    snackbar: false,
    timeout: 2000,
    rules: {
      numbers: (value) => value.length >= 9 || "Numero invalido",
    },
  }),

  methods: {
    clickVoltar() {
      this.$store.commit("compra/setStep", 3);
      this.$store.commit("compra/setMorada", null);
    },
    clickContinuar() {
      if (this.$store.getters["compra/getMetodoPagamento"] != null) {
        if (this.$store.getters["compra/getMetodoPagamento"] == 1) {
          if (!this.contacto.length < 9) {
            this.$store.commit("compra/setStep", 5);
          }
        }
      } else {
        this.snackbar = true;
      }
    },
    closeDialog() {
      this.dialog = false;
    },
    selectMetodo(id) {
      if (id == 1) {
        this.dialog = true;
      }
      this.$store.commit("compra/setMetodoPagamento", id);
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
  },
  components: {},
};
</script>

<style scoped>
.lista {
  overflow: scroll;
  overflow-x: hidden;
  height: auto;
  height: 60vh;
  min-height: 60vh;
  max-height: 60vh;
  padding: 5px;
}
.content {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.input-contacto input[type="number"] {
  -moz-appearance: textfield;
}
.input-contacto input::-webkit-outer-spin-button,
.input-contacto input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>