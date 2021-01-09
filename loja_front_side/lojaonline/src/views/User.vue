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
        <v-btn text :ripple="false" @click="logout"> Logout </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="white main">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-list>
              <v-list-item-group>
                <v-list-item @click="togglePerfil">
                  <v-list-item-icon>
                    <v-icon>mdi-account-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Perfil</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-group :value="false" prepend-icon="mdi-cart-outline">
                  <template v-slot:activator>
                    <v-list-item-title>Compras</v-list-item-title>
                  </template>

                  <v-list-item @click="toggleCompras">
                    <v-list-item-icon>
                      <v-icon>mdi-dots-horizontal</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>A decorrer</v-list-item-title>
                  </v-list-item>

                  <v-list-item @click="toggleCompras">
                    <v-list-item-icon>
                      <v-icon>mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Concluidas</v-list-item-title>
                  </v-list-item>
                </v-list-group>
              </v-list-item-group>
            </v-list>
          </v-col>

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

export default {
  data() {
    return {
      showPerfil: true,
      showCompras: false,
    };
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
    togglePerfil() {
      this.showPerfil = true;
      this.showCompras = false;
    },
    toggleCompras() {
      this.showCompras = true;
      this.showPerfil = false;
    },
    verifyLogin() {
      console.log(this.$store.getters["appbar/getLogin"]);
      if (!this.$store.getters["appbar/getLogin"]) {
        this.$router.push("/");
        this.$router.go();
      }
    },
  },
  mounted: function () {
    this.$store.dispatch("appbar/verifySession");
    this.verifyLogin();
    console.log(this.user);
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
.logo {
  cursor: pointer;
}
.main {
  margin-top: 1rem;
}
</style>