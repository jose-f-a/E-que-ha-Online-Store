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
            <v-card-title class="card-titulo"> NOME DO PRODUTO </v-card-title>
            <v-card-subtitle class="card-desc"> DESCRIÇÃO </v-card-subtitle>
            <div class="rating">
              <v-rating
                v-model="this.rating"
                background-color="indigo lighten-3"
                color="indigo"
                readonly
              ></v-rating>
              <div class="custom-transform-class text-none">
                ({{ this.reviewNumber }})
              </div>
            </div>
            <div class="variante">
              <div class="variant-text">Variantes</div>
              <v-row>
                <v-col v-for="item in variantes" v-bind:key="item.id" cols="4" md="2">
                  <div class="variante-item" @click="clickVariavel(item.id)">
                    <v-img
                      :src="imgPath(item.id)"
                    ></v-img>
                    <div>{{item.cor}}</div>
                  </div>
                </v-col>
              </v-row>
            </div>
            <div class="preco"></div>
            <div class="quantidade">
              <v-text-field
                class="input-quantidade"
                v-model="quantidade"
                type="number"
                label="quantidade"
              ></v-text-field>
              <v-btn
                @click="this.menosQuantidade"
                class="mx-1"
                fab
                dark
                small
                color="primary"
              >
                <v-icon dark> mdi-minus </v-icon>
              </v-btn>
              <v-btn
                @click="this.maisQuantidade"
                class="mx-1"
                fab
                dark
                small
                color="primary"
              >
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
            </div>
            <div>
              <v-btn
                class="ma-2"
                outlined
                color="indigo"
                @click="adicionarCarrinho"
              >
                Adicionar ao carrinho
              </v-btn>
              <v-btn
                class="ma-2"
                outlined
                color="indigo"
                @click="comprarArtigo"
              >
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
    produtoId: null,
    imagens: [],
    variantes: [{id:16,cor:"branco"},{id:17,cor:"azul"},{id:18,cor:"preto"}], //Vai ter os ids,depois vai vai se buscar as imagens e mete-se um evento de click
    rating: 4.3,
    reviewNumber: 32,
    quantidade: 1,
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
  methods: {
    maisQuantidade() {
      this.quantidade = this.quantidade + 1;
    },
    menosQuantidade() {
      this.quantidade = this.quantidade - 1;
    },
    clickVariavel(id) {
      this.$router.push('/produto/'+id)
    },
    adicionarCarrinho() {
      alert("dasd");
    },
    comprarArtigo() {
      alert(this.produtoId);
    },
    imgPath(id) {
      console.log(id);
      return require("../../public/imagens/" + id + "_1.webp");
    },
  },
  components: {
    "app-bar": AppBar,
    login: Login,
    signup: Signup,
    "menu-lateral": Menu,
    carrinho: Carrinho,
  },
  created: function () {
    this.produtoId = this.$route.params.id;
    //Ir buscar a bd os dados deste produto e as variaveis
    //ir buscar as imagens dos produtos e variaveis
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
.card-titulo {
}
.card-desc {
  text-align: left;
}
.rating {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.variante {
  margin-left: 1rem;
}
.variant-text {
 
  text-align: left;
}
.variante-item {
  width: 4rem;
  padding: 2px;
}
.variante-item:hover {
  border-radius: 5px;
  border: 2px solid black;
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