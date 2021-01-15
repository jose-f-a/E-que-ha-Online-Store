<template>
  <div class="white item" @click="onClickItem">
    <p class="text-subtitle-1 text-left item-info">{{ compra.compra.compraid }}</p>
    <p class="text-subtitle-1 text-left item-info">{{ compra.compra.criadaem }}</p>
    <div v-if="compra.compra.estadoCompra==1">
        <p class="text-subtitle-1 text-left item-info">Pedido Recebido</p>
    </div>
    <div v-if="compra.compra.estadoCompra==2">
        <p class="text-subtitle-1 text-left item-info">Produtos Embalados</p>
    </div>
    <div v-if="compra.compra.estadoCompra==3">
        <p class="text-subtitle-1 text-left item-info">Produtos Enviados</p>
    </div>
    <div v-if="compra.compra.estadoCompra==4">
        <p class="text-subtitle-1 text-left item-info">Encomenda Recebida</p>
          <v-icon>
            mdi-star
          </v-icon>
    </div>

    
  </div>
</template>

<script>
export default {
  props: ["compra"],
  methods: {
    onClickItem() {

      console.log(this.compra);
      this.$store.commit("user/changeCompraDialog");
      //console.log(this.$store.commit("user/changeCompraDialog"));
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  padding: 15px;
  cursor: pointer;
}
.item:hover {
  background: #666666;
}
.item-info {
  padding: 5px;
}
</style>