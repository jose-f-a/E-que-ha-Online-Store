<template>
  <v-navigation-drawer v-model="isOpen" fixed temporary>
    <div class="top">
      <v-img class="logo" src="../assets/logo.png" @click="goHome"></v-img>
    </div>

    <v-list nav dense>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-subtitle-1 font-weight-bold">
            Categorias
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item-group>
        <router-link class="link" to="/categoria/2">
          <v-list-item> Casa de banho </v-list-item>
        </router-link>

        <router-link class="link" to="/categoria/3">
          <v-list-item>Interior</v-list-item>
        </router-link>

        <router-link class="link" to="/categoria/4">
          <v-list-item> Jardim </v-list-item>
        </router-link>

        <router-link class="link" to="/categoria/5">
          <v-list-item> Cozinha </v-list-item>
        </router-link>

        <router-link class="link" to="/categoria/6">
          <v-list-item> Casa inteligente </v-list-item>
        </router-link>

        <router-link class="link" to="/categoria/7">
          <v-list-item> Mobilia </v-list-item>
        </router-link>

        <router-link class="link" to="/categoria/8">
          <v-list-item> Criança </v-list-item>
        </router-link>

        <router-link class="link" to="/categoria/10">
          <v-list-item> Eletrodomésticos </v-list-item>
        </router-link>

        <router-link class="link" to="/categoria/11">
          <v-list-item> Iluminação </v-list-item>
        </router-link>

        <router-link class="link" to="/categoria/12">
          <v-list-item> Lazer e viagem </v-list-item>
        </router-link>

        <router-link class="link" to="/categoria/13">
          <v-list-item> Verão </v-list-item>
        </router-link>
      
        <router-link class="link" to="/categoria/14">
          <v-list-item> Inverno </v-list-item>
        </router-link>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    isOpen: {
      get() {
        return this.$store.getters["appbar/getOpenMenuLateral"];
      },
      set(val) {
        this.$store.commit("appbar/setOpenMenuLateral", val);
      },
    },
  },
  methods: {
    goHome() {
      this.$router.push("/");
      this.$router.go();
    },
  },
};
</script>

<style scoped>
.top {
  width: 100%;
}
.logo {
  cursor: pointer;
}
.link {
  color: #000000;
  text-decoration: none;
}
</style>