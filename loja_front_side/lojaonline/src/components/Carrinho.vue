<template>
  <v-navigation-drawer v-model="isOpen" fixed temporary right>
    <div class="carrinho-top">Close Button Carrinho</div>
    <div class="conteudo-artigos">
      <v-card elevation="24" outlined>
        <div  v-for="item in this.artigos"  v-bind:key="item.produtoid">
          <artigo></artigo>
        </div>
      </v-card>
    </div>
    <div class="buttons">
      <v-btn class="ma-2" outlined color="indigo" @click="comprarArtigo">
        Comprar
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import ArtigoCarrinho from "@/components/ArtigoCarrinho.vue";

export default {
  data:() => ({
    
  }),
  computed: {
    isOpen: {
      get() {
        return this.$store.getters["appbar/getOpenCarrinho"];
      },
      set(val) {
        this.$store.commit("appbar/setOpenCarrinho", val);
      },
    },
    artigos:{
        get(){
          return this.$store.getters["carrinho/getArtigos"];
        },
        set(val){
          console.log(val) 
        }
    }
  },
  method: {},
  components: {
    artigo: ArtigoCarrinho,
  },
};
</script>

<style>
.carrinho-top {
  height: 15%;
}
.conteudo-artigos {
  overflow: scroll;
  overflow-x: hidden;
  height: 70%;
  padding: 5px;
}
.buttons {
  height: 15%;
}
</style>