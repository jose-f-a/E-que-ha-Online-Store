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
            <v-carousel>
              <v-carousel-item
                v-for="(imagem, i) in imagens"
                :key="i"
                :src="imagem"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </div>
          <div class="card-smal-container">
            <v-card-title class="card-titulo">{{nome}} </v-card-title>
            <v-card-subtitle class="card-desc"> {{desc}} </v-card-subtitle>
            <div class="rating">
              <v-rating
                v-model="this.rating"
                background-color="indigo lighten-3"
                half-increments
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
                <v-col
                  v-for="item in this.variantes"
                  v-bind:key="item.produtoid"
                  cols="4"
                  md="3"
                >
                  <div class="variante-item" @click="clickVariavel(item.produtoid)">
                    <v-img :src="imgPath(item.produtoid)"></v-img>
                    <div>{{ item.cor }}</div>
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
              {{preco}}€
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
import axios from "axios";

export default {
  data: () => ({
    produtoId: null,
    nome:'',
    desc:'',
    preco:1, //Hard coded,mudar
    imagens: [],
    variantes: [], //Vai ter os ids,depois vai vai se buscar as imagens e mete-se um evento de click
    rating: null,
    reviewNumber: null,
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
      this.$router.push("/produto/" + id);
      this.$router.go();
    },
    adicionarCarrinho() {
      const artigo={produtoid:this.produtoId,
      quantidade:this.quantidade,preco:this.preco,nome:this.nome}
      this.$store.dispatch("carrinho/adicionarProduto",artigo);
      alert('Adicionou')
    },
    comprarArtigo() {
      
      const artigo={produtoid:this.produtoId,
      quantidade:this.quantidade,preco:this.preco,nome:this.nome}
      this.$store.dispatch("carrinho/adicionarProduto",artigo);
      this.$router.push("/compra");
      this.$router.go();
    },
    imgPath(id) {
      return require("../../public/imagens/" + id + "_1.webp");
    },
    setImagensProduto() {
      var i;
      for (i = 1; i < 4; i++) {
        this.imagens.push(
          require("../../public/imagens/" + this.produtoId + "_" + i + ".webp")
        );
      }
    },
    getDadosDB(){
      const options = {
      method: "GET",
      url: "http://localhost:3342/api/produto-por-id",
      params: { id: this.produtoId },
    };

    axios.request(options).then(response => {
        this.nome= response.data.produto.nome
        this.desc= response.data.produto.descricao
        this.variantes = response.data.variantes
        this.preco = response.data.preco
        this.rating = parseFloat(response.data.rating[0].review)
        this.reviewNumber=response.data.rating[0].total
      })
      .catch(function (error) {
        console.error(error);
      });
    }
  },
  components: {
    "app-bar": AppBar,
    login: Login,
    signup: Signup,
    "menu-lateral": Menu,
    carrinho: Carrinho,
  },
  mounted: function () {
    this.produtoId = this.$route.params.id;
    this.setImagensProduto();
    this.getDadosDB();
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