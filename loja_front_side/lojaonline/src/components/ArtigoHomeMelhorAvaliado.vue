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
      <v-img :src="imgPath()" width="250" contain>
        <v-fade-transition>
          <div
            v-if="hover"
            class="transition-fast-in v-card--reveal"
            style="height: 100%"
          >
            <v-img :src="imgPath2()" width="250" contain></v-img>
          </div>
        </v-fade-transition>
      </v-img>
      <div class="info-produto">
        <p class="text-subtitle-1 text-left texto font-weight-bold">
          {{ artigo.nome }}
        </p>
        <div class="rating">
          <v-rating
            v-model="artigo.media"
            background-color="black"
            color="black"
            dense
            half-increments
            readonly
            size="15"
          ></v-rating>
        </div>
      </div>
    </v-card>
  </v-hover>
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
    imgPath2() {
      return require("../../public/imagens/" +
        this.artigo.produtoid +
        "_2.webp");
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
  padding: 1rem;
  margin: 0 1rem 1rem 1rem;
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