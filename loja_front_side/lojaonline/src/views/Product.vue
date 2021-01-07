<template>
  <v-app id="inspire">
    <app-bar> </app-bar>
    <menu-lateral> </menu-lateral>
    <carrinho> </carrinho>
    <v-main class="container">
      <v-container>
        <login> </login>
        <signup></signup>
        <v-card class="produto">
          <div class="imagens">
            <v-carousel v-model="model">
              <v-carousel-item v-for="(color, i) in colors" :key="color">
                <v-sheet :color="color" height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <div class="display-3">Slide {{ i + 1 }}</div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="card-smal-container">
            <v-card-title> NOME DO PRODUTO </v-card-title>
            <v-card-subtitle> DESCRIÇÃO </v-card-subtitle>
            <div class="rating">
              <v-icon> mdi-star </v-icon>
            </div>
            <div class="preco"></div>
            <div class="quantidade">
              <v-text-field
                class="input-quantidade"
                v-model="quantidade"
                type="number"
                label="quantidade"
              ></v-text-field>
              <v-btn class="mx-1" fab dark small color="primary">
                <v-icon dark> mdi-minus </v-icon>
              </v-btn>
              <v-btn class="mx-1" fab dark small color="primary">
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
            </div>
            <div>
              <v-btn class="ma-2" outlined color="indigo">
                Adicionar ao carrinho
              </v-btn>
              <v-btn class="ma-2" outlined color="indigo">
                Comprar
              </v-btn>
            </div>
          </div>
        </v-card>
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

export default {
  data: () => ({
    quantidade: 3,
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
  components: {
    "app-bar": AppBar,
    login: Login,
    signup: Signup,
    "menu-lateral": Menu,
    carrinho: Carrinho,
  },
};
</script>

<style >
.container {
  /*background: red;*/
}
.produto {
  display: flex;
  flex-direction: row;
}
.imagens {
  width: 70%;
}
.card-smal-container {
  width: 35%;
}
.quantidade {
  display: flex;
  flex-direction: row;
  margin: 2rem;
}
.input-quantidade input[type="number"] {
  -moz-appearance: textfield;
}
.input-quantidade input::-webkit-outer-spin-button,
.input-quantidade input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>