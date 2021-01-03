<template>
  <v-app id="inspire">
    <app-bar
      :isLogin="this.login"
      :onClickDrawer="this.onClickDrawer"
      :onClickLoginButton="this.changeShowDialog"
    >
    </app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
    </v-navigation-drawer>
    <v-main>
      <v-container>
          <login
          :showDialog="this.loginDialog"
          @changeShowDialog="this.changeShowDialog"
          @setLogin="this.setLogin"
        >
        </login>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>

import AppBar from "@/components/AppBar.vue";
import Login from "@/components/Login.vue";
import axios from "axios";
export default {
  data: () => ({
    drawer: null,
    login: false,
    loginDialog: null,
  }),
  methods: {
    onClickDrawer() {
      this.drawer = !this.drawer;
    },
    setLogin() {
      this.login = true;
    },
    changeShowDialog() {
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
          .catch(function (error) {
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
    login: Login,
  },
};
</script>