<template>
  <v-sheet
    class="grey lighten-5"
    max-height="85vh"
    min-height="85vh"
    rounded="lg"
    elevation="3">
    <v-container>
      <v-row>
        <v-col>
          <p class="text-h5 text-left">perfil</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5"> </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "Perfil",
  computed: {
    user: {
      get() {
        return this.$store.getters["appbar/getUser"];
      },
    },
    components: {
  },
  },
};
</script>

<style scoped>
</style>