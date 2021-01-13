<template>
  <v-navigation-drawer v-model="isOpen" fixed temporary right>
    <div class="carrinho-top">
      <v-icon>mdi-arrow-collapse-right</v-icon>
      Carrinho 
      <v-icon @click="removerCarrinho"> mdi-trash-can </v-icon>
    
    </div>
    <div class="conteudo-artigos">
      <v-card elevation="24" outlined>
        <div  v-for="item in this.artigos"  v-bind:key="item.produtoid">
          <artigo :artigo="item"></artigo>
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
    isLogin(){
        return this.$store.getters["appbar/getLogin"];
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
  watch:{
    isLogin(){
      this.$store.dispatch("carrinho/loadArtigos");
    }
  },
  methods: {
    comprarArtigo(){
      this.$router.push("/compra");
      this.$router.go();
    },
    removerCarrinho(){
      
      console.log(this.$store.getters["appbar/getLogin"])
      if(this.$store.getters["appbar/getLogin"]){
        console.log('eeeeee')
        this.$store.dispatch("carrinho/removerDB");
        this.$store.commit("carrinho/setListaArtigos", []);
      }else{
        localStorage.removeItem('carrinho');
        this.$store.commit("carrinho/setListaArtigos", []);
        
      }
    }
  },
  //Sempre que este comonente é criado corre isto
  created: function () {
    console.log('criou carrinho')
    this.$store.dispatch("carrinho/loadArtigos");
  },
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