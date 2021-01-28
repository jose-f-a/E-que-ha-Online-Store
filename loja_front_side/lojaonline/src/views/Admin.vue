<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-img
          max-height="57"
          max-width="134"
          @click="goHome"
          src="../assets/logo.png"
          class="logo"
        ></v-img>

        <!-- <v-list-group v-model="menuProduto" prepend-icon="mdi-cart-outline">
          <template v-slot:activator>
            <v-list-item-title>Produtos</v-list-item-title>
          </template>
          <v-list-item @click="this.changeCriarProduto">
            <v-list-item-icon>
              <v-icon>mdi-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Criar</v-list-item-title>
          </v-list-item>
          <v-list-item @click="toggleCompras('2')">
            <v-list-item-icon>
              <v-icon>mdi-pencil</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Editar</v-list-item-title>
          </v-list-item>
        </v-list-group> -->

        <!-- <v-btn text @click="changeDashboard"> Dashboard </v-btn>
        <v-btn text> Compras </v-btn>
        <v-btn text> Pagamentos </v-btn>
        <v-btn text> Finanças </v-btn> -->

        <v-spacer></v-spacer>

        <v-btn text @click="onClickLogout"> Logout </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="white main">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-list>
              <v-list-item-group>
                <v-list-item @click="changeDashboard">
                  <v-list-item-icon>
                    <v-icon>mdi-chart-box-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="text-left">
                      Dashboard
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-group :value="false" prepend-icon="mdi-cart-outline">
                  <template v-slot:activator>
                    <v-list-item-title class="text-left">
                      Produtos
                    </v-list-item-title>
                  </template>

                  <v-list-item @click="this.changeCriarProduto">
                    <v-list-item-icon>
                      <v-icon>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="text-left">
                      Adicionar
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="text-left">
                      Editar
                    </v-list-item-title>
                  </v-list-item>
                </v-list-group>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col>
            <div v-if="criarProduto">
              <criarProduto></criarProduto>
            </div>

            <div v-if="dashboard">
              <dashboard></dashboard>
            </div>

            <bar-graph :points="points" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import CriarProduto from "../components/CriarProduto.vue";
import Dashboard from "../components/Dashboard.vue";

export default {
  data: () => ({
    criarProduto: false,
    dashboard: true,
    menuProduto: false,
  }),
  components: {
    criarProduto: CriarProduto,
    dashboard: Dashboard,
  },
  mounted() {
    this.fillData();
  },
  methods: {
    goHome() {
      this.$router.push("/");
      this.$store.commit("appbar/setShowLoginDialog",false)
       
    },
    onClickLogout() {
      //Remover cookie
      localStorage.removeItem("tokenAdmin");
      //Mudar no store
      this.$store.commit("admin/setLogin", false);
      this.$router.push("/");
      this.$store.commit("appbar/setShowLoginDialog",false)
       
    },
    changeCriarProduto() {
      this.criarProduto = !this.criarProduto;
      this.menuProduto = !this.menuProduto;
      this.dashboard = false;
    },
    changeDashboard() {
      this.dashboard = true;
      this.criarProduto = false;
      this.menuProduto = false;
    },
  },
  created: async function () {
    await this.$store.dispatch("admin/verifySession");

    if (!this.$store.getters["admin/getLogin"]) {
      this.$router.push("/");
       
    }
  },
};
</script>

<style scoped>
.logo {
  cursor: pointer;
}
</style>