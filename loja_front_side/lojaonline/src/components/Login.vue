<template>
  <v-dialog v-model="isOpen" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Login</span>
        <v-spacer></v-spacer>
        <v-btn color="error" fab depressed x-small @click="this.closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col class="linhas">
              <v-text-field
                label="Email"
                v-model="email"
                required
                solo
                flat
                filled
                rounded
                prepend-icon="mdi-email-outline"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="linhas">
              <v-text-field
                prepend-icon="mdi-key-variant"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
                label="Password"
                :type="show ? 'text' : 'password'"
                v-model="password"
                flat
                solo
                filled
                rounded
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-btn color="blue darken-1" depressed block @click="loginValidation">
          Login
        </v-btn>
      </v-card-actions>

      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        bottom
        color="red"
        elevation="15"
      >
        Login inválido
      </v-snackbar>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import jwt from "jsonwebtoken";

export default {
  data: () => ({
    show: false,
    email: "",
    password: "",
    valid: false,
    snackbar: false,
    timeout: 2000,
  }),
  methods: {
    closeDialog() {
      this.$store.commit("appbar/changeShowLoginDialog");
    },
    loginValidation() {
      const options = {
        method: "POST",
        url: "http://localhost:3342/api/login",
        headers: { "Content-Type": "application/json" },
        data: { email: this.email, password: this.password },
      };
      axios
        .request(options)
        .then((response) => {
          if (response.status == 200) {
            const { isadmin } = jwt.decode(response.data.token);

            if (isadmin) {
              localStorage.setItem("tokenAdmin", response.data.token);
              this.$router.push("/admin");
               
            } else {
              localStorage.setItem("token", response.data.token);
              this.closeDialog();
              this.$store.commit("appbar/setLogin", true);
            }
          }
        })
        .catch((error) => {
          console.log(error);
          this.snackbar = true;
        });
    },
  },
  computed: {
    isOpen: {
      get() {
        return this.$store.getters["appbar/getLoginDialog"];
      },
      set(val) {
        this.$store.commit("appbar/setShowLoginDialog", val);
      },
    },
  },
};
</script>

<style scoped>
.linhas {
  padding: 0;
  margin: 0;
}
</style>