<template>
  <v-card :ripple="false" elevation="0" tile class="artigo">
    <v-img :src="imgPath()" width="250" contain :aspect-ratio="4 / 3"> </v-img>
    <v-card-title>{{ artigo.nome }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="black"
          dense
          half-increments
          readonly
          size="15"
        ></v-rating>
        <div class="grey--text ml-4">4.5</div>
      </v-row>
    </v-card-text>
    <v-card-text>
      <v-row align="center" class="mx-1">
        <div class="text-subtitle-2">{{ artigo.descricao }}</div>
        <v-list-item-title class="text-h6 text-left">
          {{ artigo.preco }}€
        </v-list-item-title>
      </v-row>
    </v-card-text>

    <div class="variante">
      <v-row>
        <v-col v-for="item in variantes" v-bind:key="item.id" cols="4" md="3">
          <div class="variante-item" @click="clickVariavel(item.id)">
            <v-img :src="imgPath(item.id)"></v-img>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Artigo",
  props: ["artigo"],
  methods: {
    imgPath() {
      return require("../../public/imagens/" +
        this.artigo.produtoid +
        "_1.webp");
    },
  },
  data: () => ({
    variantes: [
      { id: 16, cor: "branco" },
      { id: 17, cor: "azul" },
      { id: 19, cor: "roxo" },
    ],
  }),
};
</script>

<style scoped>
.artigo {
  cursor: pointer;
  width: fit-content;
}

.variante {
  margin-left: 1rem;
}
.variante-item {
  width: 4rem;
  padding: 2px;
}
.variante-item:hover {
  border-radius: 5px;
  border: 1px solid black;
}
</style>