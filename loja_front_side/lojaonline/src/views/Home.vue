<template>
  <v-app id="inspire">
    <app-bar> </app-bar>
    <menu-lateral> </menu-lateral>
    <carrinho> </carrinho>
    <v-main class="white">
      <v-container>
        <login> </login>
        <signup></signup>
        <v-row cols="6" md="2">
          <v-col v-for="artigo in artigos" v-bind:key="artigo.id" class="mt-2" cols="12">
          <artigo v-bind:artigo="artigo"></artigo>
        </v-col>
        </v-row>
        <v-row>
          <template v-for="n in 4">
            <v-col :key="n" class="mt-2" cols="12">
              <strong>Category {{ n }}</strong>
            </v-col>
          </template>
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
import Artigo from "@/components/Artigo.vue";

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
    artigo: Artigo,
  },
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