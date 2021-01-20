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
              height="350"
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
                <v-img src="..\..\public\imagens\16_1.webp"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="..\..\public\imagens\16_2.webp"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="..\..\public\imagens\16_3.webp"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="..\..\public\imagens\17_1.webp"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="..\..\public\imagens\17_2.webp"></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <p class="titulos text-h3">Trending</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-slide-group show-arrows>
              <v-slide-item v-for="artigo in artigos" v-bind:key="artigo.id">
                <artigo-home-trending v-bind:artigo="artigo">
                </artigo-home-trending>
              </v-slide-item>
            </v-slide-group>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <p class="titulos text-h3">Sugeridos</p>
          </v-col>
        </v-row>

        <v-row>
          <v-slide-group show-arrows>
            <v-slide-item v-for="artigo in artigos" v-bind:key="artigo.id">
              <artigo-home-sugeridos v-bind:artigo="artigo">
              </artigo-home-sugeridos>
            </v-slide-item>
          </v-slide-group>
        </v-row>

        <v-row>
          <v-col>
            <p class="titulos text-h3">Produtos melhor avaliados</p>
          </v-col>
        </v-row>
        <v-row>
          <v-slide-group show-arrows>
            <v-slide-item v-for="artigo in artigos" v-bind:key="artigo.id">
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
// import Artigo from "@/components/Artigo.vue";
import ArtigoHomeTrending from "@/components/ArtigoHomeTrending";
import ArtigoHomeSugeridos from "@/components/ArtigoHomeSugeridos";
import ArtigoHomeMelhorAvaliado from "@/components/ArtigoHomeMelhorAvaliado";

import axios from "axios";

export default {
  data() {
    return {
      artigos: [],
    };
  },
  components: {
    "app-bar": AppBar,
    login: Login,
    signup: Signup,
    "menu-lateral": Menu,
    carrinho: Carrinho,
    // artigo: Artigo,
    "artigo-home-trending": ArtigoHomeTrending,
    "artigo-home-sugeridos": ArtigoHomeSugeridos,
    "artigo-home-melhor-avaliado": ArtigoHomeMelhorAvaliado,
  },
  methods: {},
  created: function () {
    this.$nextTick(function () {
      const options = {
        method: "GET",
        url: "http://localhost:3342/api/getArtigo",
        headers: { "Content-Type": "application/json" },
      };

      axios
        .request(options)
        .then((res) => {
          this.artigos = res.data;
          console.log(this.artigos);
        })
        .catch((err) => console.log(err));
    });
  },
};
</script>

<style scoped>
.titulos {
  margin-top: 4rem;
}
</style>