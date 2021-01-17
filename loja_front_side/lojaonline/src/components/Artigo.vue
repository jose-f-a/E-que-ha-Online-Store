<template>
  <v-card
    :ripple="false"
    elevation="0"
    tile
    class="artigo center"
    @click="goToProduto(artigo.produtoid)"
  >
    <v-img :src="imgPath()" width="200" contain :aspect-ratio="4 / 3"> </v-img>
    <v-card-title>{{ artigo.nome }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          v-model="artigo.rating.review"
          color="black"
          dense
          half-increments
          readonly
          size="15"
        ></v-rating>
        <div class="grey--text ml-4">{{artigo.rating.total}}</div>
      </v-row>
    </v-card-text>
    <v-card-text>
      <v-row align="left" class="mx-1">
        <div class="text-subtitle-2 text-left">{{ artigo.descricao }}</div>
        <v-list-item-title class="text-h6 text-left">
          {{ artigo.preco }}€
        </v-list-item-title>
      </v-row>
    </v-card-text>

    <v-row align="center" class="mx-1">
      <p
        class="text-caption text-left font-weight-medium grey--text text--darken-1 variante"
      >
        Mais opcoes
      </p>
    </v-row>
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
    goToProduto(id) {
      this.$router.push("/produto/" + id);
      this.$router.go();
    },
  },
  data: () => ({
    
  }),
};
</script>

<style scoped>
.artigo {
  cursor: pointer;
  width: 15rem;
}

.variante {
  margin-top: 1%;
  margin-left: 1rem;
  text-decoration: underline;
}
</style>