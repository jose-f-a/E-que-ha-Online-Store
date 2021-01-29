<template>
  <v-dialog v-model="isOpen" persistent max-width="550px">
    <v-card class="card">
      <v-card-title blue>
        <p class="headline">Registar</p>

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
                label="Nome"
                v-model="nome"
                prepend-icon="mdi-account-outline"
                :rules="[rules.required]"
                required
                solo
                flat
                filled
                rounded
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="linhas">
              <v-text-field
                label="Contacto"
                v-model="contacto"
                prepend-icon="mdi-phone-outline"
                :rules="[rules.required]"
                required
                solo
                flat
                filled
                rounded
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="linhas">
              <v-text-field
                label="Email"
                v-model="email"
                prepend-icon="mdi-email-outline"
                :rules="[rules.required]"
                required
                solo
                flat
                filled
                rounded
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="linhas">
              <v-text-field
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                v-model="password"
                label="Password"
                class="input-group--focused"
                @click:append="show = !show"
                prepend-icon="mdi-key-variant"
                required
                solo
                flat
                filled
                rounded
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-btn color="blue" depressed block @click="signup"> Registar </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      bottom
      color="red"
      elevation="15"
    >
      Registo inválido
    </v-snackbar>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    show: null,
    email: null,
    password: null,
    contacto: null,
    nome: null,
    snackbar: false,
    timeout: 2000,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),

  methods: {
    closeDialog() {
      this.nome = "";
      this.contacto = "";
      this.email = "";
      this.password = "";
      this.$store.commit("appbar/changeShowSignupDialog");
    },
    signup() {
      if (
        this.nome == null ||
        this.contacto == null ||
        this.email == null ||
        this.password == null ||
        this.password.length < 8
      ) {
        this.snackbar = true;
      } else {
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
          .then(() => {
            this.closeDialog();
          })
          .catch(function (error) {
            this.snackbar = true;
            console.log(error);
          });
      }
    },
  },
  computed: {
    isOpen: {
      get() {
        return this.$store.getters["appbar/getSignupDialog"];
      },
      set(val) {
        this.$store.commit("appbar/setShowSignupDialog", val);
      },
    },
  },
};
</script>

<style scoped>
.linhas {
  padding: 0;
  margin: 0.25rem;
}
</style>
