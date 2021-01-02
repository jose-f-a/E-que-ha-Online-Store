<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="450px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Registar</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Nome*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Contacto*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show2 ? 'text' : 'password'"
                  name="pass"
                  label="Password"
                  class="input-group--focused"
                  @click:append="show2 = !show2"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken" text @click="dialog = false">
            Fechar
          </v-btn>
          <v-btn color="blue" tile @click="dialog = false"> Registar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      show2: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
};
</script>

<style scoped></style>
