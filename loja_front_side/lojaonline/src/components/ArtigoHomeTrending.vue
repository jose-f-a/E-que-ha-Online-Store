<template>
  <v-card
    width="250"
    tile
    elevation="0"
    :ripple="false"
    class="artigo"
    @click="goToProduto(artigo.produtoid)"
  >
    <v-img
      :src="imgPath()"
      width="250"
      contain
      class="align-end"
      gradient="to bottom, rgba(0,0,0,0.03), rgba(0,0,0,.01)"
    >
      <p class="text-h6 text-left texto">{{ artigo.nome }}</p>
      <!-- <p class="text-subtitle-1 text-left texto">{{ artigo.preco }}€</p> -->
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "ArtigoHomeTrending",
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
    //
  }),
};
</script>

<style scoped>
.artigo {
  cursor: pointer;
  padding: 0.5rem;
  margin: 2rem;
}
.texto {
  margin: 0;
  margin-left: 0.75rem;
}
</style>