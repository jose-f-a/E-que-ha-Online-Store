<template>
  <v-card class="card-principal" elevation="2" outlined>
    <div class="produto">
      <v-img class="image" :src="imgPath(artigo.produtoid,artigo.imagens)"></v-img>
      <div class="produto-txt">
        <div>
          {{ this.artigo.nome }}
        </div>
        <div>{{ this.artigo.preco }} €/uni</div>

        <div class="quantidadeC">Qtd: {{ this.artigo.quantidade }}</div>
      </div>
    </div>
    <div v-if="this.step == 4 && this.showAnalise">
      <div class="analise">
        Avalie o artigo
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
          ({{ this.ratingValue }})
        </div>
        <div>
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
          <v-btn>
            <v-icon> mdi-check-outline </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  props: ["artigo", "step"],

  data: () => ({
    ratingValue: 0,
    showAnalise:true,
    desc: null,
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

        const user = this.$store.getters["user/getUser"].name

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
          .then(response => {
           
            this.showAnalise=false
            console.log(response)
            //Meter aqui um snack
            

          })
          .catch(function (error) {
            console.error(error);
          });
      } else {
        //Por aqui o snack a bar a dizer que tem de selecionar as cenas
        alert('dasd')
      }
    },
  },
  components: {},
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
.produto {
  display: flex;
  flex-direction: row;
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
}
</style>
