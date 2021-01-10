<template>
  <v-app id="inspire">
    <app-bar> </app-bar>
    <menu-lateral> </menu-lateral>
    <carrinho> </carrinho>
    <v-main class="white">
      <v-container>
        <login> </login>
        <signup></signup>
        <div>
    <v-stepper  value ="3" alt-labels>
      <v-stepper-header>
        <v-stepper-step step="1" complete>
          Editar Artigos
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2" complete>
          Confirmar artigos
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
          Escolher morada
        </v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step step="4">
          Pagamento
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="5">
          Confirmar
        </v-stepper-step>
        <v-divider></v-divider>
      </v-stepper-header>
    </v-stepper>
  </div>
  
  <div>
    <step1>
    </step1>
    Componentes do processo de compra
  </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";
import Menu from "@/components/Menu.vue";
import Carrinho from "@/components/Carrinho.vue";
import CompraC from "@/components/CompraC.vue";

export default {
  data() {
    return {

    };
  },
  components: {
    "app-bar": AppBar,
    login: Login,
    signup: Signup,
    "menu-lateral": Menu,
    carrinho: Carrinho,
    step1:CompraC
    
  },
  methods: {},
  
};
</script>