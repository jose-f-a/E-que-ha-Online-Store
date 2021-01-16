<template>
  <v-card @click="onClickItem">
    <v-card-title>Encomenda nº: {{ compra.compra.compraid }} </v-card-title>
    <div> Feita em: {{ data }}</div>
    <div>Estado:</div>
    <div>Total:  {{ total }} €</div>
    <div v-if="compra.compra.estadoCompra == 1">Pedido Recebido</div>
    <div v-if="compra.compra.estadoCompra == 2">Produtos Embalados</div>
    <div v-if="compra.compra.estadoCompra == 3">
      Produtos Enviados
      <v-icon> mdi-car-estate </v-icon>
    </div>
    <div v-if="compra.compra.estadoCompra == 4">
      Encomenda Recebida
      <v-icon> mdi-check </v-icon>
    </div>
  </v-card>
</template>
<script>
export default {
  props: ["compra"],
  data: () => ({
    data: "",
    total:0
  }),
  methods: {
    onClickItem() {

      this.$store.commit("user/changeCompraDialog");
      this.$store.commit("user/setSelectedCompra", this.compra);
      
    },
  },
  watch:{
    compra:function (){
      var total=0
    console.log('Dentro do item')
    console.log(this.compra.compra.compraid)

    for(var i in this.compra.produtos){
      total = total + parseFloat(this.compra.produtos[i].preco)
    }
    console.log(Math.ceil(total))
    this.total = Math.ceil(total)
    this.data= this.compra.compra.criadaem.split('T')[0] + ' '+ this.compra.compra.criadaem.split('T')[1].split('.')[0]
  
    }
  },
  created: function () {
    var total=0
    console.log('Dentro do item')
    console.log(this.compra.compra.compraid)

    for(var i in this.compra.produtos){
      total = total + parseFloat(this.compra.produtos[i].preco)
    }
    console.log(Math.ceil(total))
    this.total = Math.ceil(total)
    this.data= this.compra.compra.criadaem.split('T')[0] + ' '+ this.compra.compra.criadaem.split('T')[1].split('.')[0]
  
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