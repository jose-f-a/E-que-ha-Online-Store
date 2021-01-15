<template>
  <v-card class="cartao" elevation="0">
    <v-row>
      <v-col cols="3">
        <div class="imagem">
          <v-img
            class="image"
            width="125"
            height="125"
            contain
            :aspect-ratio="4 / 3"
            :src="imgPath(artigo.produtoid)"
          ></v-img>
        </div>
      </v-col>
      <v-col cols="9">
        <div class="produto">
          <p class="text-body-1">{{ this.artigo.nome }}</p>
          <p class="text-left">{{ this.artigo.preco }}€</p>
        </div>

        <div class="quantidadeC">
          <v-text-field
            class="input-quantidadeC"
            v-model="this.artigo.quantidade"
            type="number"
            label="Quantidade"
            dense
          ></v-text-field>

          <div class="butoes">
            <v-btn
              @click="this.menosQuantidade"
              class="mx-1"
              fab
              x-small
              color="primary"
            >
              <v-icon x-small dark> mdi-minus </v-icon>
            </v-btn>
            <v-btn
              @click="this.maisQuantidade"
              class="mx-1"
              fab
              x-small
              color="primary"
            >
              <v-icon x-small dark> mdi-plus </v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- <div class="imagem">
      <v-img
        class="image"
        contain
        width="75"
        :aspect-ratio="4 / 3"
        :src="imgPath(artigo.produtoid)"
      ></v-img>
    </div>

    <div class="produto">
      <p class="text-body-1">{{ this.artigo.nome }}</p>
      <p class="text-left">{{ this.artigo.preco }}€</p>
    </div>

    <div class="quantidadeC">
      <v-text-field
        class="input-quantidadeC"
        v-model="this.artigo.quantidade"
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
        <v-icon x-small dark> mdi-minus </v-icon>
      </v-btn>
      <v-btn
        @click="this.maisQuantidade"
        class="mx-1"
        fab
        dark
        x-small
        color="primary"
      >
        <v-icon x-small dark> mdi-plus </v-icon>
      </v-btn>
    </div> -->
  </v-card>
</template>

<script>
export default {
  props: ["artigo"],
  data: () => ({}),
  methods: {
    maisQuantidade() {
      const id = this.artigo.produtoid;
      //Vai ao store editar o artigo em questao
      //this.quantidade = this.quantidade + 1;
      this.$store.commit("compra/setMaisQuantidade", id);
    },
    menosQuantidade() {
      const id = this.artigo.produtoid;
      this.$store.commit("compra/setMenosQuantidade", id);
      //Vai ao store editar o artigo em questao
      //this.quantidade = this.quantidade - 1;
    },
    imgPath(id) {
      return require("../../public/imagens/" + id + "_1.webp");
    },
  },
};
</script>

<style scoped>
.cartao {
  margin-top: 1rem;
}
.imagem {
  display: flex;
  align-items: center;
  justify-content: center;
}
.produto {
  display: flex;
  flex-direction: column;
}

.quantidadeC {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
  width: 45%;
  padding: 0.7rem;
}
.input-quantidadeC input[type="number"] {
  -moz-appearance: textfield;
  min-width: 50px;
}
.input-quantidadeC input::-webkit-outer-spin-button,
.input-quantidadeC input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.butoes {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
}
</style>