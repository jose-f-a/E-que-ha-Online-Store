 <template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="57"
      max-width="134"
      src="../assets/logo.png"
    ></v-img>
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
      label="Digite o nome de um artigo"
      solo-inverted
    ></v-autocomplete>
    <div v-if="login">
      <v-btn depressed>
        <v-icon> mdi-account </v-icon>
      </v-btn>
      <v-btn depressed>
        <v-icon> mdi-heart-outline </v-icon>
      </v-btn>
    </div>
    <div v-else>
      <v-btn depressed>
        <v-icon> mdi-login </v-icon>
      </v-btn>
      <v-btn depressed> Registar </v-btn>
    </div>
    <v-btn depressed>
    <v-icon> mdi-cart-outline </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: function () {
    return {
      login: false,
    };
  },
};
</script>
