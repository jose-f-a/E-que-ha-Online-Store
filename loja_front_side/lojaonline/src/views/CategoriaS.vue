<template>
  <v-app id="inspire">
    <app-bar> </app-bar>
    <menu-lateral> </menu-lateral>
    <carrinho> </carrinho>
    <v-main>
      <v-container class="container">
        <login> </login>
        <signup></signup>
        <div v-if="id==2">
          <div class="titulo">Categoria Casa de Banho</div>
        </div>
        <div v-if="id==3">
          <div class="titulo">Categoria Interior</div>
        </div>
        <div v-if="id==4">
          <div class="titulo">Categoria Jardim</div>
        </div>
        <div v-if="id==5">
         <div class="titulo">Categoria Cozinha</div>
        </div>
        <div v-if="id==6">
         <div class="titulo">Categoria Casa Inteligente</div>
        </div>
        <div v-if="id==7">
          <div class="titulo">Categoria Mobilia</div>
        </div>
        <div v-if="id==8">
          <div class="titulo">Categoria Criança</div>
        </div>
        <div v-if="id==10">
          <div class="titulo">Categoria Eletrodomesticos</div>
        </div>
        <div v-if="id==11">
          <div class="titulo">Categoria Iluminação</div>
        </div>
        <div v-if="id==12">
          <div class="titulo">Categoria Lazer e Viagem</div>
        </div>
        <div v-if="id==13">
          <div class="titulo">Categoria Verão</div>
        </div>
        <div v-if="id==14">
          <div class="titulo">Categoria Inverno</div>
        </div>
        <div v-if="artigos.length>0">
           <v-row class="lista-artigos">
            <v-col
              v-for="artigo in artigos"
              v-bind:key="artigo.id"
              class="mt-2 artigo"
              cols="3"
            >
              <artigo v-bind:artigo="artigo" > </artigo>
            </v-col>
          </v-row>
          <v-pagination
            v-model="page"
            :length="paginas"
            circle
            class="my-4"
            :total-visible="7"
          ></v-pagination>
        </div>
        <div v-else>
          <div class="titulo">Não existe produtos</div>
        </div>
         
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import AppBar from "@/components/AppBar.vue";
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";
import Menu from "@/components/Menu.vue";
import Carrinho from "@/components/Carrinho.vue";
import Artigo from "@/components/Artigo.vue";

export default {
  data() {
    return {
      id: null,
      page: 1,
    };
  },
  watch: {
    page: function () {
      this.$store.commit("categoria/setArtigosVisiveis", this.page);
    },
  },
  computed: {
    artigos: {
      get() {
        return this.$store.getters["categoria/getArigosVisiveis"];
      },
      set(val) {
        this.$store.commit("categoria/setArigosVisiveis", val);
      },
    },
    paginas: {
      get() {
        return this.$store.getters["categoria/getPaginas"];
      },
    },
  },
  components: {
    "app-bar": AppBar,
    login: Login,
    signup: Signup,
    "menu-lateral": Menu,
    carrinho: Carrinho,
    artigo: Artigo,
  },
  methods: {},
  created: function () {
    this.id = this.$route.params.id;
    this.$store.dispatch("categoria/loadListArtigos", this.id);
  },
};
</script>

<style scoped>
.titulo {
}
.container {
  text-align: left;
}
.artigo {
  margin-left: auto;
  margin-right: auto;
}

.lista-artigos {
  display: flex !important;
  justify-items: center;
  align-items: center;
}
</style>