<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="57"
          max-width="134"
          src="../assets/logo.png"
        ></v-img>
        <v-list-group v-model="menuProduto" prepend-icon="mdi-cart-outline">
          <template v-slot:activator>
            <v-list-item-title>Produtos</v-list-item-title>
          </template>
          <v-list-item @click="this.changeCriarProduto">
            <v-list-item-icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Criar</v-list-item-title>
          </v-list-item>
          <v-list-item @click="toggleCompras('2')">
            <v-list-item-icon>
              <v-icon>mdi-check</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Editar</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-btn text> Compras </v-btn>
        <v-btn text> Pagamentos </v-btn>
        <v-btn text @click="changeDashboard"> Dashboard </v-btn>
        <v-btn text> Finanças </v-btn>
        <v-spacer></v-spacer>
        <v-responsive max-width="260">
          <v-text-field
            label="Pesquise"
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
        <v-btn text @click="onClickLogout"> Logout </v-btn>
      </v-container>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <div v-if="criarProduto">
          <criarProduto> </criarProduto>
        </div>

        <div v-if="dashboard">
          <dashboard> </dashboard>
        </div>
        <bar-graph :points="points" />
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
  methods:{
    onClickLogout() {
      //Remover cookie
      localStorage.removeItem("tokenAdmin")
      //Mudar no store
      this.$store.commit("admin/setLogin",false);
      this.$router.push("/");
      this.$router.go();
    },
    changeCriarProduto(){
        this.criarProduto= !this.criarProduto
        this.menuProduto= !this.menuProduto
        this.dashboard= false
    },
  },
  created: async function () {
    await this.$store.dispatch("admin/verifySession");

    if (!this.$store.getters["admin/getLogin"]) {
      this.$router.push("/");
      this.$router.go();
    }
  },
};
</script>