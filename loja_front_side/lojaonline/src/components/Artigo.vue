<template>
  <v-card elevation="0" tile class="artigo">
    <v-img
      src="../../public/imagens/16_1.jpg"
      width="250"
      contain
      :aspect-ratio="4 / 3"
    >
    </v-img>
    <v-card-title>Senta</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="black"
          dense
          half-increments
          readonly
          size="15"
        ></v-rating>
        <div class="grey--text ml-4">4.5</div>
      </v-row>

      <v-row align="center" class="mx-0">
        <div class="text-subtitle-2">Toalha de algodao</div>
        <v-list-item-title class="text-h6 text-left">5.00 $</v-list-item-title>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// import axios from 'axios';

export default {};
</script>

<style scoped>
.artigo {
  cursor: pointer;
  width: fit-content;
}
</style>