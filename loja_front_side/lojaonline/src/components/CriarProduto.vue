<template>
  <v-card class="container" elevation="5" outlined width="1000">
    <v-card-title> Criar Produto</v-card-title>
    <v-form
      v-model="valid"
      method="POST"
      action="http://localhost:3342/api/create-product"
      class=""
    >
      <v-container>
        <v-row>
          <v-col cols="9">
            <v-text-field
              v-model="nome"
              label="Nome do produto"
              type="text"
              prepend-icon="mdi-pencil"
              required
              flat
              hide-details
              rounded
              clearable
              filled
              solo
              dense
              hint="Em caso de varias cores nome-cor"
            ></v-text-field>
            <v-text-field
              v-model="desc"
              :rules="descRules"
              :counter="120"
              label="Descrição"
              prepend-icon="mdi-dots-horizontal"
              required
              flat
              hide-details
              rounded
              clearable
              filled
              solo
              dense
            ></v-text-field>
            <v-text-field
              v-model="preco"
              label="Preço"
              type="number"
              hint="ex: 11.34 "
              prepend-icon="mdi-cash"
              required
              flat
              hide-details
              rounded
              clearable
              filled
              solo
              dense
            ></v-text-field>
            <v-text-field
              v-model="stock"
              label="Stock"
              type="number"
              prepend-icon="mdi-dropbox"
              required
              flat
              hide-details
              rounded
              clearable
              filled
              solo
              dense
            ></v-text-field>
            <v-file-input
              v-model="imagens"
              label="Insira as imagens"
              counter
              multiple
              truncate-length="7"
              accept="image/png, image/jpeg,image/webp"
              flat
              hide-details
              rounded
              clearable
              filled
              solo
              dense
            ></v-file-input>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="submit" color="blue" depressed block> Criar </v-btn>
          </v-col>
        </v-row>
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