<template>
  <v-app id="inspire">
    <v-app-bar app color="white">
      <v-container class="py-0 fill-height">
        <v-img
          class="logo"
          max-height="57"
          max-width="134"
          src="../assets/logo.png"
          @click="goHome"
        ></v-img>

        <v-spacer></v-spacer>

        <v-btn text :ripple="false" @click="togglePerfil"> Perfil </v-btn>
        <v-btn text :ripple="false" @click="toggleCompras"> Compras </v-btn>
        <v-btn text :ripple="false" @click="logout"> Logout </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="white main">
      <v-container>
        <v-row>
          <v-col>
            <perfil v-if="showPerfil"></perfil>
            <compras v-if="showCompras"></compras>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import perfil from "../components/Perfil";
import compras from "../components/Compras";

import axios from "axios";

export default {
  data() {
    return {
      showPerfil: true,
      showCompras: false,
    }
  },
  components: {
    perfil,
    compras,
  },
  methods: {
    goHome() {
      this.$router.push("/");
      this.$router.go();
    },
    togglePerfil(){
      this.showPerfil = true;
      this.showCompras = false;
    },
    toggleCompras(){
      this.showCompras = true;
      this.showPerfil = false; 
    },
    verifySesion() {
      if (localStorage.getItem("token")) {
        const options = {
          method: "POST",
          url: "http://localhost:3342/api/sessionValidation",
          headers: { "Content-Type": "application/json" },
          data: {
            token: localStorage.getItem("token"),
          },
        };
        axios
          .request(options)
          .then((response) => {
            if (response.data.message) this.login = true;
          })
          .catch((error) => {
            this.$router.push("/");
            console.error(error);
          });
      } else {
        this.$router.push("/");
      }
    },
  },
  mounted: function () {
    this.verifySesion();
  },
};
</script>

<style scoped>
.logo {
  cursor: pointer;
}
.main { 
  margin-top: 1rem;
}
</style>