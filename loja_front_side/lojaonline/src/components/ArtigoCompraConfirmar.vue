<template>
  <v-card class="cartao" elevation="0" outlined>
    <v-row>
      <v-col cols="2">
        <div class="imagem">
          <v-img
            class="image"
            width="100"
            height="100"
            contain
            :aspect-ratio="4 / 3"
            :src="imgPath(artigo.produtoid, artigo.imagens)"
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
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["artigo"],
  methods: {
    imgPath(id, img) {
      if (id <= 30) {
        return require("../../public/imagens/" + id + "_1.webp");
      } else {
        //Coluna da bd
        return require("../../public/imagens/" + img.split("||")[0]);
      }
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
.butoes {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2rem;
}
</style>