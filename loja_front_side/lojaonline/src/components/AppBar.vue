 <template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="onClickDrawer"></v-app-bar-nav-icon>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="57"
      max-width="134"
      src="../assets/logo.png"
    ></v-img>
    <v-form @submit="submitSearch">
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="Procure um produto"
        solo-inverted
      ></v-autocomplete>
    </v-form>

    <div v-if="isLogin">
      <v-btn depressed @click="this.clickConta">
        <v-icon> mdi-account </v-icon>
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
    loading: false,
    items: [],
    search: null,
    select: null,
  }),
  methods: {
    clickConta() {
      this.$router.push("/perfil");
    },
    onClickCartButton() {
      this.$store.commit("appbar/changeOpenCarrinho");
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
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      console.log(v);
      //Colocar items com listerns, assim ao carregar neles vai faz logo a pesquisa

      this.items = ["asda", "ee"];
      //No fim do pedido por false
      this.loading = false;
    },
    submitSearch() {
      this.$router.push("/pesquisa/" + this.search);
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
