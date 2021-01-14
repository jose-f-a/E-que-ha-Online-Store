<template>
  <v-card clas="container" elevation="6" outlined>
    <v-card-title> Criar Produto</v-card-title>
    <v-form v-model="valid" method="POST" action="http://localhost:3342/api/create-product">
      <v-container>
        <v-text-field
          v-model="nome"
          label="Nome do produto"
          type="text"
          required
          hint="Em caso de varias cores nome-cor"
        ></v-text-field>
        <v-text-field
          v-model="desc"
          :rules="descRules"
          :counter="120"
          label="Descrição"
          required
        ></v-text-field>
        <v-text-field
          v-model="preco"
          label="Preço"
          type="number"
          hint="ex: 11.34 "
          required
        ></v-text-field>
        <v-text-field
          v-model="stock"
          label="Stock"
          type="number"
          required
        ></v-text-field>
        <v-file-input
          v-model="imagens"
          label="Insira as imagens"
          counter
          multiple
          truncate-length="7"
          accept="image/png, image/jpeg,image/webp"
        ></v-file-input>
        <v-btn @click="submit" class="mr-4" > Criar </v-btn>
      </v-container>
    </v-form>
  </v-card>
</template>
<script>
//import axios from "axios";
export default {
  data: () => ({
    nome: null,
    desc: null,
    preco: null,
    stock: null,
    imagens: null,
    descRules: [
      (v) => !!v || "Descrição é necessaria",
      (v) =>
        v.length <= 120 || "Descrição não pode ultrapassar os 120 caracteres",
    ],
  }),
  methods: {
    submit() {
      console.log(this.stock + this.nome + this.desc);
      //console.log(this.imagens[0]);
      //var fs = require('browserify-fs');
      //fs.writeFile('./teste.txt', "sadsad")
      //console.log('sadasd')


/*
      const options = {
        method: "POST",
        url: "http://localhost:3342/api/create-product",
        headers: { "Content-Type": "application/json" },
        data: this.imagens,
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        }); */
    },
  },
  computed: {},
  components: {},
};
</script>

<style scoped>
</style>