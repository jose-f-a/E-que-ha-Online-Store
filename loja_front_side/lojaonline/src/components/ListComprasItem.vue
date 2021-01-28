<template>
  <v-card @click="onClickItem">
    <v-card-title class="text-decoration-underline"
      >Encomenda nº: {{ compra.compra.compraid }}
    </v-card-title>

    <v-card-text class="text-left black--text">
      <p class="text-subtitle-1 texto">Feita em: {{ data }}</p>
      <p class="text-subtitle-1 texto">Total: {{ total }} €</p>

      <p
        class="text-subtitle-1 font-weight-medium texto"
        v-if="compra.compra.estadoCompra == 1"
      >
        Pedido Recebido
      </p>
      <p
        class="text-subtitle-1 font-weight-medium texto"
        v-if="compra.compra.estadoCompra == 2"
      >
        Produtos Embalados
      </p>
      <p
        class="text-subtitle-1 font-weight-medium texto"
        v-if="compra.compra.estadoCompra == 3"
      >
        Produtos Enviados
        <v-icon> mdi-car-estate </v-icon>
      </p>

      <p
        class="text-subtitle-1 font-weight-medium texto"
        v-if="compra.compra.estadoCompra == 4"
      >
        Encomenda Recebida
        <v-icon> mdi-check </v-icon>
      </p>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ["compra"],
  data: () => ({
    data: "",
    total: 0,
  }),
  methods: {
    onClickItem() {
      this.$store.commit("user/changeCompraDialog");
      this.$store.commit("user/setSelectedCompra", this.compra);
    },
  },
  watch: {
    compra: function () {
      var total = 0;
      console.log("Dentro do item");
      console.log(this.compra.compra.compraid);

      for (var i in this.compra.produtos) {
        total = total + parseFloat(this.compra.produtos[i].preco);
      }
      console.log(Math.ceil(total));
      this.total = Math.ceil(total);
      this.data =
        this.compra.compra.criadaem.split("T")[0] +
        " " +
        this.compra.compra.criadaem.split("T")[1].split(".")[0];
    },
  },
  created: function () {
    var total = 0;
    console.log("Dentro do item");
    console.log(this.compra.compra.compraid);

    for (var i in this.compra.produtos) {
      total = total + parseFloat(this.compra.produtos[i].preco);
    }
    console.log(Math.ceil(total));
    this.total = Math.ceil(total);
    this.data =
      this.compra.compra.criadaem.split("T")[0] +
      " " +
      this.compra.compra.criadaem.split("T")[1].split(".")[0];
  },
};
</script>
<style scoped>
.texto {
  line-height: 0.5rem;
}
</style>