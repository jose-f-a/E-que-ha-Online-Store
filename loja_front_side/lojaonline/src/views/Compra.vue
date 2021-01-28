<template>
  <v-app id="inspire">
    <app-bar> </app-bar>
    <menu-lateral> </menu-lateral>
    <carrinho> </carrinho>
    <v-main class="container">
      <v-container>
        <login> </login>
        <signup></signup>
        <div>
          <v-stepper class="step" :value="this.step" alt-labels>
            <v-stepper-header>
              <v-stepper-step step="1" :complete="this.step > 1">
                Editar Artigos
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="2" :complete="this.step > 2">
                Confirmar artigos
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3" :complete="this.step > 3">
                Escolher morada
              </v-stepper-step>

              <v-divider></v-divider>
              <v-stepper-step step="4" :complete="this.step > 4">
                Pagamento
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="5" :complete="this.step > 5">
                Confirmar
              </v-stepper-step>
              <v-divider></v-divider>
            </v-stepper-header>
          </v-stepper>
        </div>

        <div class="componente">
          <div v-if="step == 1">
            <step1> </step1>
          </div>
          <div v-else></div>
          <div v-if="step == 2">
            <step2> </step2>
          </div>
          <div v-else></div>
          <div v-if="step == 3">
            <step3> </step3>
          </div>
          <div v-else></div>
          <div v-if="step == 4">
            <step4> </step4>
          </div>
          <div v-else></div>
          <div v-if="step == 5">
            <step5> </step5>
          </div>
          <div v-else></div>
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
import CompraEP from "@/components/CompraEP.vue";
import CompraCP from "@/components/CompraCP.vue";
import CompraM from "@/components/CompraM.vue";
import CompraP from "@/components/CompraP.vue";
import CompraC from "@/components/CompraC.vue";

export default {
  data() {
    return {
      show: true,
    };
  },
  components: {
    "app-bar": AppBar,
    login: Login,
    signup: Signup,
    "menu-lateral": Menu,
    carrinho: Carrinho,
    step1: CompraEP,
    step2: CompraCP,
    step3: CompraM,
    step4: CompraP,
    step5: CompraC,
  },
  methods: {},
  computed: {
    step: {
      get() {
        return this.$store.getters["compra/getStep"];
      },
      set(val) {
        this.$store.commit("compra/setStep", val);
      },
    },
  },
  created: async function () {
    await this.$store.dispatch("appbar/verifySession");
    

    // if (!this.$store.getters["appbar/getLogin"]) {
    //   this.$router.push("/");
    //   this.$router.go();
    // }
  },
  mounted: async function(){
    await this.$store.dispatch("appbar/verifySession");
    this.$store.commit("compra/setArtigos",[])
    this.$store.dispatch("compra/getArtigosDoCarrinho");
  }
};
</script>

<style scoped >
.container {
  display: flex;
  flex-direction: column;
  width: 80%;
}
.step {
  margin-bottom: 0.4rem;
}
</style>