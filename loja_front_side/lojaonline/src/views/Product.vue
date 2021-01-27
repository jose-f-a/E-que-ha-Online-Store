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
                contain
                width="900"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </div>

          <div class="card-smal-container">
            <v-card-title class="card-titulo">{{ nome }} </v-card-title>
            <v-card-subtitle class="card-desc"> {{ desc }} </v-card-subtitle>

            <p class="text-left text-h5 preco">{{ this.preco }} €</p>

            <div class="rating">
              <v-rating
                v-model="this.rating"
                background-color="warning"
                half-increments
                color="warning"
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
                  <div
                    class="variante-item"
                    @click="clickVariavel(item.produtoid)"
                  >
                    <v-img :src="imgPath(item.produtoid,item.imagens)"></v-img>
                    <div>{{ item.cor }}</div>
                  </div>
                </v-col>
              </v-row>
            </div>

            <div class="quantidade">
              <v-text-field
                class="input-quantidade"
                v-model="quantidade"
                type="number"
                label="Quantidade"
              ></v-text-field>
              <v-btn
                @click="this.menosQuantidade"
                class="mx-1"
                fab
                dark
                x-small
                color="primary"
              >
                <v-icon dark> mdi-minus </v-icon>
              </v-btn>
              <v-btn
                @click="this.maisQuantidade"
                class="mx-1"
                fab
                dark
                x-small
                color="primary"
              >
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
            </div>

            <div>
              <v-btn
                class="ma-2"
                color="blue darken-2"
                outlined
                @click="adicionarCarrinho"
              >
                <v-icon>mdi-cart-outline</v-icon>
                Adicionar ao carrinho
              </v-btn>
              <v-btn class="ma-2" color="blue darken-2" @click="comprarArtigo">
                Comprar
              </v-btn>
            </div>
          </div>
        </v-card>

        <v-card class="card-analise">
          <v-card-title>Analises</v-card-title>
          <div v-for="analise in this.analises" v-bind:key="analise.reviewid">
            <v-card class="card-review">
              <div class="user">
                <v-avatar>
                  <img :src="randomImg(analise.reviewid)" alt="John" />
                </v-avatar>
                {{ analise.titulo }}
              </div>
              <div
                style="display: flex; flex-direction: row; align-items: center"
              >
                <v-rating
                  v-model="analise.rating"
                  color="warning"
                  length="5"
                  readonly
                  half-increments
                  size="20"
                ></v-rating>
                ({{ analise.rating }})
              </div>
              {{ analise.descricao }}

              <div class="data">
                {{ formatData(analise._data) }}
              </div>
            </v-card>
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
    nome: "",
    desc: "",
    preco: null, //Hard coded,mudar
    imagens: [],
    imagensString: "",
    variantes: [], //Vai ter os ids,depois vai vai se buscar as imagens e mete-se um evento de click
    rating: null,
    reviewNumber: null,
    quantidade: 1,
    model: 0,
    analises: [],
  }),
  methods: {
    randomImg(id) {
      return "https://randomuser.me/api/portraits/men/" + id + ".jpg";
    },
    formatData(data) {
      return data.split("T")[0];
    },
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
    async adicionarCarrinho() {
      
      console.log(this.imagensString)
      const artigo = {
        produtoid: this.produtoId,
        quantidade: this.quantidade,
        preco: this.preco,
        nome: this.nome,
        imagens:this.imagensString
      };
      await this.$store.dispatch("carrinho/adicionarProduto", artigo);
      alert("Adicionou");
    },
    async comprarArtigo() {
      const artigo = {
        produtoid: this.produtoId,
        quantidade: this.quantidade,
        preco: this.preco,
        nome: this.nome,
        imagens:this.imagensString
      };
      await this.$store.dispatch("carrinho/adicionarProduto", artigo);

      if (this.$store.getters["appbar/getLogin"]) {
        this.$router.push("/compra");
      } else {
        this.$store.commit("appbar/setShowLoginDialog", true);
      }
    },
    imgPath(id, img) {
      if (id <= 30) {
        return require("../../public/imagens/" + id + "_1.webp");
      } else {
        //Coluna da bd
        return require("../../public/imagens/" + img.split("||")[0]);
      }
    },
    setImagensProduto() {
      if (this.produtoId <= 30) {
        var i;
        for (i = 1; i < 4; i++) {
          try {
            require("../../public/imagens/" +
              this.produtoId +
              "_" +
              i +
              ".webp");
            this.imagens.push(
              require("../../public/imagens/" +
                this.produtoId +
                "_" +
                i +
                ".webp")
            );
          } catch (e) {
            console.log(e);
          }
        }
      } else {
        var img = this.imagensString.split("||");
        for (i = 0; i < img.length; i++) {
          try {
            require("../../public/imagens/" +img[i]);
            this.imagens.push(
              require("../../public/imagens/" +img[i])
            );
          } catch (e) {
            console.log(e);
          }
        }
      }
    },
    async getDadosDB() {
      const options = {
        method: "GET",
        url: "http://localhost:3342/api/produto-por-id",
        params: { id: this.produtoId },
      };
      await axios
        .request(options)
        .then((response) => {
          this.nome = response.data.produto.nome;
          this.desc = response.data.produto.descricao;
          this.variantes = response.data.variantes;
          this.preco = response.data.produto.preco;
          this.rating = parseFloat(response.data.rating.review);
          this.reviewNumber = response.data.rating.total;
          this.imagensString = response.data.produto.imagens;
        })
        .catch(function (error) {
          console.error(error);
        });

      const options2 = {
        method: "GET",
        url: "http://localhost:3342/api/get-review-byid",
        params: { produtoid: this.produtoId },
      };

      await axios
        .request(options2)
        .then((response) => {
          console.log(response.data);
          this.analises = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  components: {
    "app-bar": AppBar,
    login: Login,
    signup: Signup,
    "menu-lateral": Menu,
    carrinho: Carrinho,
  },
  created: async function () {
    console.log('criou')
    this.produtoId = this.$route.params.id;
    console.log('criou')
    await this.getDadosDB();
    console.log('criou')
    this.setImagensProduto();
  },
};
</script>

<style scoped>
.container {
  margin-top: 1rem;
}
.produto {
  align-self: center;
  display: flex;
  flex-direction: row;
}
.imagens {
  width: 70%;
}
.card-smal-container {
  width: 35%;
}
.card-desc {
  text-align: left;
}
.preco {
  padding-left: 1rem;
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
  cursor: pointer;
}
.variante-item:hover {
  border-radius: 5px;
  border: 1px solid #333333;
}
.quantidade {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin: 2rem;
}

.card-analise {
  margin-top: 3rem;
}

.card-review {
  padding: 0.5rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
}

.input-quantidade input[type="number"] {
  -moz-appearance: textfield;
}
.input-quantidade input::-webkit-outer-spin-button,
.input-quantidade input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>