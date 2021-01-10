<template>
    <v-card class="card" elevation="2" outlined >
        <div class="produto" >
            <v-img class="image" src="../../public/imagens/17_1.webp"></v-img>
            <div>{{this.artigo.nome}}</div>
            <div>{{this.artigo.preco}}€</div>
        </div>
          <div class="quantidadeC">
              <v-text-field
                class="input-quantidadeC"
                v-model="this.artigo.quantidade"
                type="number"
                label="quantidade"
              ></v-text-field>
            </div>
      </v-card>
</template>

<script>
export default {
    props: ['artigo'],
    data: () => ({
        
    }),
    methods:{
    },
    
}
</script>

<style>

.card{
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 5px;
}
.produto{
    display: flex;
    flex-direction: row;
    width: fit-content;
}
.image{
    width: 2rem;
    height: 2rem;
}

.quantidadeC{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0.5rem;
}
.input-quantidadeC input[type="number"] {
  -moz-appearance: textfield;
}
.input-quantidadeC input::-webkit-outer-spin-button,
.input-quantidadeC input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>