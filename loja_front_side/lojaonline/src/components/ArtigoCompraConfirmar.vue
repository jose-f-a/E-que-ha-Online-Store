<template>
  <v-card class="card" elevation="0" outlined>
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
        </div>
      </v-col>
    </v-row>
    <!-- <div class="produto">
      <v-img class="image" :src="imgPath(artigo.produtoid)"></v-img>
      <div>{{ this.artigo.nome }}</div>
      <div>{{ this.artigo.preco }}€</div>
    </div>
    <div class="quantidadeC">
      <v-text-field
        class="input-quantidadeC"
        v-model="this.artigo.quantidade"
        type="number"
        label="quantidade"
      ></v-text-field>
    </div> -->
  </v-card>
</template>

<script>
export default {
  props: ["artigo"],
  data: () => ({}),
  methods: {
    imgPath(id) {
      return require("../../public/imagens/" + id + "_1.webp");
    },
  },
};
</script>

<style>
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
</style>