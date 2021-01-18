<template>
  <v-card class="cartao" elevation="0">
    <v-row>
      <v-col cols="2">
        <div class="imagem">
          <v-img
            class="image"
            width="70"
            height="70"
            contain
            :aspect-ratio="4 / 3"
            :src="imgPath(artigo.produtoid)"
          ></v-img>
        </div>
      </v-col>

      <v-col cols="9">
        <div class="produto-info">
          <p class="text-left text-body-1">{{ this.artigo.nome }}</p>
          <p class="text-left">{{ this.artigo.preco }}€</p>
        </div>

        <div class="quantidadeC">
          <p class="text-subtitle-1">Quantidade:</p>

          <div class="quantidade">
            <p
              class="text-subtitle-1 font-weight-bold input-quantidadeC text-left"
            >
              {{ this.artigo.quantidade }}
            </p>
          </div>
          <!-- <v-text-field
            class="input-quantidadeC"
            v-model="this.artigo.quantidade"
            type="number"
            label="Quantidade"
            dense
            disabled
          ></v-text-field> -->

          <div class="butoes">
            <v-btn
              @click="this.menosQuantidade"
              class="mx-1"
              fab
              x-small
              color="primary"
              elevation="1"
            >
              <v-icon x-small dark> mdi-minus </v-icon>
            </v-btn>
            <v-btn
              @click="this.maisQuantidade"
              class="mx-1"
              fab
              x-small
              color="primary"
              elevation="1"
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
  data: () => ({
    // total: 0.0
  }),
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
  justify-content: space-around;
}
.produto-info {
  display: flex;
  flex-direction: column;
  line-height: 0.75rem;
}

.quantidadeC {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 0;
  margin: 0;
}
.quantidade {
  padding-left: 0.3rem;
  margin: 0;
}
/* .input-quantidadeC input[type="number"] {
  -moz-appearance: textfield;
}
.input-quantidadeC input::-webkit-outer-spin-button,
.input-quantidadeC input::-webkit-inner-spin-button {
  -webkit-appearance: none;
} */
.butoes {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2rem;
}
</style>