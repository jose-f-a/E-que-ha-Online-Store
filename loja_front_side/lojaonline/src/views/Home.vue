<template>
  <v-app id="inspire">
    <app-bar> </app-bar>
    <menu-lateral> </menu-lateral>
    <carrinho> </carrinho>
    <v-main class="white">
      <v-container>
        <login> </login>
        <signup></signup>

        <v-row>
          <v-col>
            <v-carousel
              show-arrows-on-hover
              hide-delimiter-background
              cycle
              delimiter-icon="mdi-minus"
            >
              <template v-slot:prev="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
              </template>
              <template v-slot:next="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </template>

              <v-carousel-item>
                <v-img
                  src="../../public/imagens/banner1.webp"
                  contain
                  @click="goToCategoria(1)"
                ></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  src="../../public/imagens/banner2.webp"
                  contain
                  @click="goToCategoria(2)"
                ></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  src="../../public/imagens/banner3.webp"
                  contain
                  @click="goToCategoria(3)"
                ></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  src="../../public/imagens/banner4.webp"
                  contain
                  @click="goToCategoria(4)"
                ></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  src="../../public/imagens/banner5.webp"
                  contain
                  @click="goToCategoria(5)"
                ></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="coluna">
            <p class="titulos text-h4 text-left font-weight-medium">
              Sugestões
            </p>
          </v-col>
        </v-row>
        <v-row class="slide-group">
          <v-slide-group show-arrows>
            <v-slide-item
              v-for="artigo in artigosSugeridos"
              v-bind:key="artigo.id"
            >
              <artigo-home-sugeridos v-bind:artigo="artigo">
              </artigo-home-sugeridos>
            </v-slide-item>
          </v-slide-group>
        </v-row>

        <v-row>
          <v-col class="coluna">
            <p class="titulos text-h4 text-left font-weight-medium">Trending</p>
          </v-col>
        </v-row>
        <v-row class="slide-group">
          <v-slide-group show-arrows>
            <v-slide-item
              v-for="artigo in artigosTrending"
              v-bind:key="artigo.id"
            >
              <artigo-home-trending v-bind:artigo="artigo">
              </artigo-home-trending>
            </v-slide-item>
          </v-slide-group>
        </v-row>

        <v-row>
          <v-col class="coluna">
            <p class="titulos text-h4 text-left font-weight-medium">
              Produtos melhor avaliados
            </p>
          </v-col>
        </v-row>
        <v-row class="slide-group">
          <v-slide-group show-arrows>
            <v-slide-item
              v-for="artigo in artigoMelhorAvaliado"
              v-bind:key="artigo.id"
            >
              <artigo-home-melhor-avaliado v-bind:artigo="artigo">
              </artigo-home-melhor-avaliado>
            </v-slide-item>
          </v-slide-group>
        </v-row>
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
import ArtigoHomeTrending from "@/components/ArtigoHomeTrending";
import ArtigoHomeSugeridos from "@/components/ArtigoHomeSugeridos";
import ArtigoHomeMelhorAvaliado from "@/components/ArtigoHomeMelhorAvaliado";

export default {
  data() {
    return {};
  },
  components: {
    "app-bar": AppBar,
    login: Login,
    signup: Signup,
    "menu-lateral": Menu,
    carrinho: Carrinho,
    "artigo-home-trending": ArtigoHomeTrending,
    "artigo-home-sugeridos": ArtigoHomeSugeridos,
    "artigo-home-melhor-avaliado": ArtigoHomeMelhorAvaliado,
  },
  methods: {
    imgPath(id, img) {
      if (id <= 30) {
        return require("../../public/imagens/" + id + "_1.webp");
      } else {
        //Coluna da bd
        return require("../../public/imagens/" + img.split("||")[0]);
      }
    },
    goToCategoria(val) {
      switch (val) {
        case 1:
          this.$router.push("/categoria/" + "4");
          break;
        case 2:
          this.$router.push("/categoria/" + "11");
          break;
        case 3:
          this.$router.push("/categoria/" + "5");
          break;
        case 4:
          this.$router.push("/categoria/" + "2");
          break;
        case 5:
          this.$router.push("/categoria/" + "10");
          break;
        default:
          break;
      }
    },
  },
  computed: {
    artigos: {
      get() {
        return this.$store.getters["homepage/getArtigos"];
      },
    },
    artigoMelhorAvaliado: {
      get() {
        return this.$store.getters["homepage/getArtigosMelhorAvaliados"];
      },
    },
    artigosTrending: {
      get() {
        return this.$store.getters["homepage/getArtigosTrending"];
      },
    },
    artigosSugeridos: {
      get() {
        return this.$store.getters["homepage/getArtigosSugeridos"];
      },
    },
  },
  created: function () {
    this.$store.dispatch("homepage/loadArtigosMelhorClassificados");
    this.$store.dispatch("homepage/loadArtigosTrending");
    this.$store.dispatch("homepage/loadArtigosSugeridos");
  },
};
</script>

<style scoped>
.titulos {
  margin-top: 10rem;
  margin-left: 6rem;
}
.slide-group {
  justify-content: center;
}
</style>