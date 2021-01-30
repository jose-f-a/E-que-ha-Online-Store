<template>
  <v-card class="card-principal" elevation="2" outlined>
    <div class="produto">
      <v-img
        class="image"
        height="50"
        contain
        :src="imgPath(artigo.produtoid, artigo.imagens)"
      >
      </v-img>

      <div class="produto-txt">
        <p class="text-subtitle-2 texto">{{ this.artigo.nome }}</p>
        <p class="text-subtitle-2 texto">{{ this.artigo.preco }}€</p>
      </div>
    </div>

    <div v-if="this.step == 4 && this.showAnalise">
      <div class="analise">
        <p class="text-h6 text-left">Avalie o artigo</p>

        <div class="rating">
          <v-rating
            v-model="ratingValue"
            background-color="warning lighten-1"
            color="warning"
            half-increments
            hover
            length="5"
            size="15"
          ></v-rating>
          <p class="text-subtitle-2">({{ this.ratingValue }})</p>
        </div>

        <div class="comentario">
          <v-textarea
            v-model="desc"
            rows="2"
            row-height="15"
            no-resize
            counter="200"
            label="Comentario"
          ></v-textarea>
        </div>

        <div @click="this.sendReview">
          <v-btn color="blue darken-1" depressed block> Avaliar </v-btn>
        </div>
      </div>
    </div>

    <v-snackbar
      v-model="snackbarErro"
      :timeout="timeout"
      bottom
      color="red"
      elevation="15"
    >
      Preencha todos os campos para avaliar o produto {{ this.artigo.nome }}.
    </v-snackbar>
    <v-snackbar
      v-model="snackbarSucesso"
      :timeout="timeout"
      bottom
      color="green"
      elevation="15"
    >
      Avaliação feita. Obrigado pela sua opinião!
    </v-snackbar>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  props: ["artigo", "step"],

  data: () => ({
    ratingValue: 0,
    showAnalise: true,
    desc: null,
    snackbarErro: false,
    snackbarSucesso: false,
    timeout: 2000,
  }),
  methods: {
    imgPath(id, img) {
      if (id <= 30) {
        return require("../../public/imagens/" + id + "_1.webp");
      } else {
        //Coluna da bd
        return require("../../public/imagens/" + img.split("||")[0]);
      }
    },
    sendReview() {
      if (this.desc && this.ratingValue > 0) {
        const user = this.$store.getters["user/getUser"].name;

        const options = {
          method: "POST",
          url: "http://localhost:3342/api/createAnalise",
          headers: { "Content-Type": "application/json" },
          data: {
            user: user,
            desc: this.desc,
            rating: this.ratingValue,
            produtoid: this.artigo.produtoid,
          },
        };
        axios
          .request(options)
          .then(() => {
            this.showAnalise = false;
            this.snackbarSucesso = true;
          })
          .catch(function (error) {
            console.error(error);
          });
      } else {
        this.snackbarErro = true;
      }
    },
  },
};
</script>

<style scoped>
.card-principal {
  margin: 0.2rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.produto-txt {
  margin-top: 1rem;
}
.texto {
  line-height: 0.5rem;
}
.produto-txt {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.image {
  min-height: 5rem;
  min-width: 5rem;
  max-height: 5rem;
  max-width: 5rem;
}

.analise {
  padding: 0.3rem;
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  width: 40rem;
}
.rating {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.comentario {
  padding-left: 8px;
}
</style>
