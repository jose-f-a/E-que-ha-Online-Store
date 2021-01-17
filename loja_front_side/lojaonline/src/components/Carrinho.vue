<template>
  <v-navigation-drawer v-model="isOpen" fixed temporary right>
    <div class="carrinho-top">
      <!-- <v-icon @click="">mdi-arrow-collapse-right</v-icon> -->
      <p class="text-left text-h5">Carrinho</p>
      <v-spacer></v-spacer>
      <v-icon @click="removerCarrinho" class="icon-lixo">
        mdi-trash-can
      </v-icon>
    </div>
    <div class="conteudo-artigos">
      <div v-for="item in this.artigos" v-bind:key="item.produtoid">
        <artigo :artigo="item" class="artigo"></artigo>
      </div>
    </div>
    <div class="buttons">
      <v-btn class="ma-2" outline color="blue darken-2" @click="comprarArtigo">
        <v-icon>mdi-cart-outline</v-icon>
        Comprar
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import ArtigoCarrinho from "@/components/ArtigoCarrinho.vue";

export default {
  data: () => ({}),
  computed: {
    isOpen: {
      get() {
        return this.$store.getters["appbar/getOpenCarrinho"];
      },
      set(val) {
        this.$store.commit("appbar/setOpenCarrinho", val);
      },
    },
    isLogin() {
      return this.$store.getters["appbar/getLogin"];
    },
    artigos: {
      get() {
        return this.$store.getters["carrinho/getArtigos"];
      },
      set(val) {
        console.log(val);
      },
    },
  },
  watch: {
    isLogin() {
      this.$store.dispatch("carrinho/loadArtigos");
    },
  },
  methods: {
    comprarArtigo() {
      this.$router.push("/compra");
      this.$router.go();
    },
    removerCarrinho() {
      console.log(this.$store.getters["appbar/getLogin"]);
      if (this.$store.getters["appbar/getLogin"]) {
        console.log("eeeeee");
        this.$store.dispatch("carrinho/removerDB");
        this.$store.commit("carrinho/setListaArtigos", []);
      } else {
        localStorage.removeItem("carrinho");
        this.$store.commit("carrinho/setListaArtigos", []);
      }
    },
    fecharCarrinho() {},
  },
  //Sempre que este comonente é criado corre isto
  created: function () {
    console.log("criou carrinho");
    this.$store.dispatch("carrinho/loadArtigos");
  },
  components: {
    artigo: ArtigoCarrinho,
  },
};
</script>

<style>
.carrinho-top {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  max-height: 3rem;
  margin-top: 1rem;
  padding-left: 1rem;
}
.icon-lixo {
  margin-left: 4rem;
}
.conteudo-artigos {
  overflow: scroll;
  overflow-x: hidden;
  height: 85%;
  padding: 10px;
}
.artigo {
  margin-top: 10px;
}
.buttons {
  height: 5%;
}
</style>