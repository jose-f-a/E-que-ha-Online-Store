 <template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="onClickDrawer"></v-app-bar-nav-icon>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="57"
      max-width="134"
      src="../assets/logo.png"
    ></v-img>
    <v-form @submit.prevent="onSubmit">
       <v-text-field
            v-model="query"
            label="Outlined"
            outlined
          ></v-text-field>
    </v-form>
    <div v-if="isLogin">
      <v-btn depressed @click="this.clickConta" >
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
    <v-btn depressed  @click="onClickCartButton">
    <v-icon> mdi-cart-outline </v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
   data: () => ({
    query:null
  }),
  props:{
  },
  methods:{
    clickConta(){
      this.$router.push('/perfil')
    },
    onClickCartButton(){
      this.$store.commit("appbar/changeOpenCarrinho")
    },
    onClickDrawer(){
      this.$store.commit("appbar/changeOpenMenuLateral")
    },
    onClickLoginButton(){
      this.$store.commit("appbar/changeShowLoginDialog")
    },
    onClickRegistarButton(){
      this.$store.commit("appbar/changeShowSignupDialog")
    },
    onSubmit(){
      this.$router.push("/pesquisa/"+encodeURI(this.query))
      this.$router.go()
    }

  },
  computed:{
      isLogin(){
        return this.$store.getters['appbar/getLogin']
      }
  },
  //Sempre que este comonente é criado corre isto
  created: function(){
      this.$store.dispatch("appbar/verifySession")
  },
};
</script>
