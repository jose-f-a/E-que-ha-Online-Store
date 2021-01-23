 <template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="onClickDrawer"></v-app-bar-nav-icon>
    <div class="logo">
      <v-img
        max-height="57"
        max-width="134"
        src="../assets/logo.png"
        @click="goHome"
      ></v-img>
    </div>

    <v-spacer></v-spacer>

    <v-form @submit.prevent="onSubmit">
      <v-text-field
        v-model="query"
        label="Pesquise"
        flat
        hide-details
        rounded
        clearable
        filled
        solo
        dense
        prepend-icon="mdi-magnify"
        single-line
        class="search-bar"
      ></v-text-field>
    </v-form>

    <v-spacer></v-spacer>
    <div v-if="isLogin">
      <v-btn depressed @click="this.clickConta">
        <v-icon> mdi-account </v-icon>
      </v-btn>
      <v-btn depressed @click="onClickLogout">
        <v-icon> mdi-logout-variant</v-icon>
      </v-btn>
      <v-btn depressed>
        <v-icon> mdi-heart-outline </v-icon>
      </v-btn>
    </div>
    <div v-else>
      <v-btn depressed @click="onClickLoginButton">
        <v-icon> mdi-login </v-icon>
      </v-btn>
      <v-btn depressed @click="onClickRegistarButton"> Registar </v-btn>
    </div>
    <div v-if="!isCompra">
      <v-btn depressed @click="onClickCartButton">
        <v-icon> mdi-cart-outline </v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    query: null,
  }),
  props: {},
  methods: {
    clickConta() {
      this.$router.push("/perfil");
    },
    onClickCartButton() {
      this.$store.commit("appbar/changeOpenCarrinho");
    },
    onClickLogout() {
      //Remover cookie
      localStorage.removeItem("token");
      //Mudar no store
      this.$store.commit("appbar/setLogin", false);
    },

    onClickDrawer() {
      this.$store.commit("appbar/changeOpenMenuLateral");
    },
    onClickLoginButton() {
      this.$store.commit("appbar/changeShowLoginDialog");
    },
    onClickRegistarButton() {
      this.$store.commit("appbar/changeShowSignupDialog");
    },
    onSubmit() {
      this.$router.push("/pesquisa/" + encodeURI(this.query));
      this.$router.go();
    },
    goHome() {
      this.$router.push("/");
      this.$router.go();
    },
  },
  computed: {
    isLogin() {
      return this.$store.getters["appbar/getLogin"];
    },
    isCompra() {
      return this.$store.getters["compra/getisCompra"];
    },
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  //Sempre que este comonente é criado corre isto
  created: function () {
    this.$store.dispatch("appbar/verifySession");
  },
};
</script>

<style scoped>
.logo {
  cursor: pointer;
  padding-left: 2rem;
}
.search-bar {
  width: 45rem;
}
</style>
