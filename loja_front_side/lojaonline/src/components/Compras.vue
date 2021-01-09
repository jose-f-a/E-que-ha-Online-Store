<template>
  <v-sheet
    class="grey lighten-5"
    max-height="85vh"
    min-height="85vh"
    rounded="lg"
    elevation="3"
  >
  <h1>aaa</h1>
    <compra></compra>
  </v-sheet>
</template>

<script>
import compra from './Compra';

export default {
  name: "Compras",
  components: {
    compra
  },
  created: {
    
  },
  computed: {
    user: {
      get() {
        return this.$store.getters["appbar/getUser"];
      },
    },
  },
};
</script>

<style scoped>
</style>