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
          <template v-for="n in 4">
            <v-col :key="n" class="mt-2" cols="12">
              <strong>Category {{ n }}</strong>
            </v-col>
            <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
              <artigo></artigo>
              <!-- <v-sheet height="150"></v-sheet> -->
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

export default {
  data: () => ({}),
  components: {
    "app-bar": AppBar,
    login: Login,
    signup: Signup,
    "menu-lateral": Menu,
    carrinho: Carrinho,
    artigo: Artigo,
  },
};
</script>