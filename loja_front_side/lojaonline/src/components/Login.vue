<template>
  <v-dialog v-model="showDialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-btn @click="closeDialog">
        <v-icon> mdi-close </v-icon>
      </v-btn>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Email"
                v-model="email"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
                label="Password"
                :type="show ? 'text' : 'password'"
                v-model="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="loginValidation">
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  props: {
    showDialog: { type: Boolean },
    changeShowDialog: { type: Function },
    setLogin: { type: Function },
  },
  data: () => ({
    show: false,
    email: "",
    password: "",
    valid: false,
  }),
  methods: {
    closeDialog() {
      this.$emit("changeShowDialog");
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
            localStorage.setItem("token", response.data.token);
            this.$emit("changeShowDialog");
            this.$emit("setLogin");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>