<template>
  <v-dialog v-model="showSignupDialog" temporary max-width="600px">
    <v-card class="card">
      <v-card-title blue>
        <p class="headline">Registar</p>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Nome" v-model="nome" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Contacto"
                v-model="contacto"
                required
              ></v-text-field>
            </v-col>
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
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                v-model="password"
                label="Password"
                class="input-group--focused"
                @click:append="show = !show"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-btn color="blue darken" text @click="showSignupDialog = false">
          Fechar
        </v-btn>
        <v-btn color="blue" tile @click="signup"> Registar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  props: {
    showSignupDialog: { type: Boolean },
    changeShowSignupDialog: { type: Function },
  },

  data: () => ({
    showSignupDialog: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),

  methods: {
    signup() {
      const options = {
        method: "POST",
        url: "http://localhost:3342/api/signup",
        headers: { "Content-Type": "application/json" },
        data: {
          nome: this.nome,
          contacto: this.contacto,
          email: this.email,
          password: this.password,
        },
      };

      axios
        .request(options)
        .then((response) => {
          if (response.status == 200) {
            this.$emit("changeShowSignupDialog");
          } else {
            this.$emit("changeShowSignupDialog");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
