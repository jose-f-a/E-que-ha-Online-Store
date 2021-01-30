<template>
  <v-card class="container" elevation="5" outlined width="1000">
    <v-card-title> Criar Produto</v-card-title>
    <v-form
      v-model="valid"
      method="POST"
      action="http://localhost:3342/api/create-product"
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
            <v-select
              v-model="e1"
              :items="items"
              item-text="categoria"
              item-value="valor"
              label="Categoria"
              prepend-icon="mdi-format-list-bulleted"
              hide-details
              single-line
              rounded
              dense
              clearable
            ></v-select>
            <v-file-input
              v-model="imagens"
              label="Insira as imagens"
              counter
              multiple
              truncate-length="7"
              accept="image/webp"
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
    <v-snackbar
      v-model="snackbarErro"
      :timeout="timeout"
      bottom
      color="red"
      elevation="15"
    >
      Erro na criação. Verifique os campos.
    </v-snackbar>
    <v-snackbar
      v-model="snackbarSucesso"
      :timeout="timeout"
      bottom
      color="green"
      elevation="15"
    >
      Produto criado com sucesso!
    </v-snackbar>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    snackbarSucesso: false,
    snackbarErro: false,
    timeout: 2000,
    nome: null,
    desc: null,
    preco: null,
    stock: null,
    imagens: null,
    e1: null,
    items: [
      { categoria: "Casa de banho", valor: "2" },
      { categoria: "Interior", valor: "3" },
      { categoria: "Jardim", valor: "4" },
      { categoria: "Cozinha", valor: "5" },
      { categoria: "Casa inteligente", valor: "6" },
      { categoria: "Mobilia", valor: "7" },
      { categoria: "Criança", valor: "8" },
      { categoria: "Eletrodomésticos", valor: "9" },
      { categoria: "Iluminação", valor: "10" },
      { categoria: "Lazer e viagem", valor: "11" },
    ],
    descRules: [
      (v) => !!v || "Descrição é necessaria",
      (v) =>
        v.length <= 120 || "Descrição não pode ultrapassar os 120 caracteres",
    ],
  }),
  methods: {
    submit() {
      if (!(this.nome || this.desc || this.preco || this.stock || this.e1)) {
        this.snackbarErro = true;
      } else {
        var imgString = "";
        for (var i = 0; i < this.imagens.length; i++) {
          imgString = imgString + this.imagens[i].name + "||";
        }
        const options = {
          method: "POST",
          url: "http://localhost:3342/api/create-product",
          headers: { "Content-Type": "application/json" },
          data: {
            nome: this.nome,
            preco: this.preco,
            stock: this.stock,
            descricao: this.desc,
            categoriaid: this.e1,
            imagem: imgString,
          },
        };
        axios
          .request(options)
          .then(() => {
            this.nome = null;
            this.desc = null;
            this.preco = null;
            this.stock = null;
            this.imagens = null;
            this.snackbarSucesso = true;
          })
          .catch((error) => {
            this.snackbarErro = true;
            console.error(error);
          });
      }
    },
  },
};
</script>

<style scoped>
</style>