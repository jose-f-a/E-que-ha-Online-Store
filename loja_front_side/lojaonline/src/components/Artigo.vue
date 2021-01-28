<template>
  <v-hover v-slot="{ hover }">
    <v-card
       width="250"
      tile
      elevation="0"
      :ripple="false"
      class="artigo"
      @click="goToProduto(artigo.produtoid)"
    >
      <v-img :src="imgPath()" width="200" contain :aspect-ratio="4 / 3">
        <v-fade-transition>
          <div
            v-if="hover"
            class="transition-fast-in v-card--reveal"
            style="height: 100%"
          >
            <v-img
              :src="imgPath2()"
              width="200"
              contain
              :aspect-ratio="4 / 3"
            ></v-img>
          </div>
        </v-fade-transition>
      </v-img>

      <v-card-title>{{ artigo.nome }}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            v-model="artigo.rating.review"
            background-color="black"
            color="black"
            dense
            half-increments
            readonly
            size="15"
          ></v-rating>
          <div class="grey--text ml-4">{{ artigo.rating.total }}</div>
        </v-row>
      </v-card-text>

      <v-card-text>
        <v-row align="left" class="mx-1">
          <v-list-item-title class="text-subtitle-1 text-left">
            {{ artigo.preco }}€
          </v-list-item-title>
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Artigo",
  props: ["artigo"],
  methods: {
    imgPath() {
       if (this.artigo.produtoid <= 30) {
        return require("../../public/imagens/" + this.artigo.produtoid + "_1.webp");
      } else {
        //Coluna da bd
        
        return require("../../public/imagens/" + this.artigo.imagens.split("||")[0]);
      }
    },
    imgPath2() {
      if (this.artigo.produtoid <= 30) {
        return require("../../public/imagens/" + this.artigo.produtoid + "_2.webp");
      } else {
        
        //Coluna da bd
        return require("../../public/imagens/" + this.artigo.imagens.split("||")[1]);
      }
    },
    goToProduto(id) {
      this.$router.push("/produto/" + id);
       
    },
  },
  data: () => ({}),
};
</script>

<style scoped>
.artigo {
  cursor: pointer;
  padding: 1rem;
  margin: 0 1rem 1rem 1rem;
}
</style>