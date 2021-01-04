<template>
  <v-app id="inspire">
    <app-bar
      :isLogin="this.login"
      :onClickDrawer="this.onClickMenuDrawer"
      :onClickLoginButton="this.changeShowLoginDialog"
      :onClickCartButton="this.onClickCarrinho"
    >
    </app-bar>
    <menu-lateral :open="openMenuLateral" @set="this.setOpenMenuLateral">
    </menu-lateral>
    <carrinho :open="openCarrinho" @set="this.setOpenCarrinho">
    </carrinho>
    <v-main class="grey lighten-2">
      <v-container>
        
        <login
          :showDialog="this.loginDialog"
          @changeShowDialog="this.changeShowLoginDialog"
          @setLogin="this.setLogin"
        >
        </login>
        <signup :showSignupDialog="this.signupDialog"></signup>
        
        <v-row>
          <template v-for="n in 4">
            <v-col :key="n" class="mt-2" cols="12">
              <strong>Category {{ n }}</strong>
            </v-col>
            <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import AppBar from "@/components/AppBar.vue";
import Login from "@/components/Login.vue";
import Menu from "@/components/Menu.vue";
import Carrinho from "@/components/Carrinho.vue";

import axios from "axios";
export default {
  data: () => ({
    openMenuLateral: false,
    login: false,
    loginDialog: null,
    openCarrinho:false,
  }),
  methods: {
    setOpenCarrinho(val){
      this.openCarrinho=val
    },
    setOpenMenuLateral(val){
      this.openMenuLateral=val
    },
    handleMenuChange(isOpen){
      this.openMenuLateral = isOpen
    },
    onClickMenuDrawer() {
      this.openMenuLateral = !this.openMenuLateral;
    },
     onClickCarrinho() {
      this.openCarrinho = !this.openCarrinho;
    },
    setLogin() {
      this.login = true;
    },
    changeShowLoginDialog() {
      this.loginDialog = !this.loginDialog;
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
          .then(response => {
            if(response.data.message)
                this.login=true
          })
          .catch(error =>{
            this.login=false
            console.error(error);
          });
      }else{
        this.login=false
      }
    },
  },
  mounted: function () {
    this.verifySesion();
  },
  components: {
    "app-bar": AppBar,
    "login": Login,
    "menu-lateral":Menu,
    "carrinho": Carrinho
  },
};
</script>
