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
      <div class="info-produto">
        <p class="text-h6 text-left texto">{{ artigo.nome }}</p>
        <div class="rating">
          <v-rating
            v-model="artigo.rating.review"
            background-color="black"
            color="black"
            dense
            half-increments
            readonly
            size="15"
          ></v-rating>
          <p class="text-body-2">({{ artigo.rating.total }})</p>
        </div>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "ArtigoHomeMelhorAvaliado",
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
.info-produto {
  /* background-color: #b8c6db; */
  background-image: linear-gradient(
    315deg,
    rgba(184, 198, 219, 0.35) 0%,
    rgba(245, 247, 250, 0.35) 74%
  );
}
.rating {
  display: flex;
  align-items: baseline;
  margin-left: 0.75rem;
}
.texto {
  margin: 0;
  margin-left: 0.75rem;
}
</style>