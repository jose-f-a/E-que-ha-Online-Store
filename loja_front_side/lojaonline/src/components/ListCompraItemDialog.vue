<template>
  <v-dialog v-model="isOpen" max-width="75%">
    <v-card>
      <v-card-title class="headline">
        <p class="text-h5">Encomenda Nº{{ compra.compra.compraid }}</p>

        <v-spacer></v-spacer>

        <v-btn color="error" fab depressed x-small @click="this.closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-stepper v-model="this.step" vertical>
        <v-stepper-step :complete="this.step >= 1" step="1">
          Pedido Recebido
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-img
            max-height="195"
            max-width="250"
            src="../../public/animations/packing3.gif"
          ></v-img>
        </v-stepper-content>

        <v-stepper-step :complete="this.step >= 2" step="2">
          Produtos embalados
        </v-stepper-step>
        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-12" width="250" height="150">
            <v-img
              max-height="150"
              max-width="250"
              src="../../public/animations/em_packing.gif"
            ></v-img>
          </v-card>
        </v-stepper-content>

        <v-stepper-step :complete="this.step >= 3" step="3"
          >Produtos Enviados</v-stepper-step
        >
        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-12" width="250" height="150">
            <v-img
              max-height="150"
              max-width="250"
              src="../../public/animations/em_distribuicao.gif"
            ></v-img>
          </v-card>
        </v-stepper-content>

        <v-stepper-step :complete="this.step == 4" step="4"
          >Produtos Recebidos</v-stepper-step
        >
        <v-stepper-content step="4">
          <v-img
            max-height="180"
            max-width="270"
            src="../../public/animations/recebido.gif"
          ></v-img>
        </v-stepper-content>
      </v-stepper>

      <v-card>
        <v-card-title class="text-h6">Produtos</v-card-title>
        <div v-for="item in this.listProduto" v-bind:key="item.produtoid">
          <artigo :artigo="item" :step="step"></artigo>
        </div>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
import ArtigoCompra from "@/components/ArtigoDialogCompra.vue";

export default {
  data: () => ({
    step: 1,
    listProdutos: null,
  }),
  methods: {
    closeDialog() {
      this.$store.commit("user/changeCompraDialog");
    },
  },
  watch: {
    compra: function () {
      this.step = this.compra.compra.estadoCompra;
      this.listProduto = this.compra.produtos;
    },
  },
  computed: {
    isOpen: {
      get() {
        return this.$store.getters["user/getCompraDialog"];
      },
      set(val) {
        this.$store.commit("user/setCompraDialog", val);
      },
    },
    compra: {
      get() {
        return this.$store.getters["user/getSelectedCompra"];
      },
      set(val) {
        this.$store.commit("user/setSelectedCompra", val);
      },
    },
  },
  created: function () {
    var total = 0;
    for (var i in this.compra.produtos) {
      total = total + parseFloat(this.compra.produtos[i].preco);
    }

    this.total = total;
    this.data =
      this.compra.compra.criadaem.split("T")[0] +
      " " +
      this.compra.compra.criadaem.split("T")[1].split(".")[0];
  },
  components: {
    artigo: ArtigoCompra,
  },
};
</script>

<style>
</style>