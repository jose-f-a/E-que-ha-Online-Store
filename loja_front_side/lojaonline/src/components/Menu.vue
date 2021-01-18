<template>
  <v-navigation-drawer v-model="isOpen" fixed temporary>
    <div class="top">
      <v-img class="logo" src="../assets/logo.png" @click="goHome"></v-img>
    </div>

    <v-list nav dense>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-subtitle-1 font-weight-bold">
            Categorias
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item-group >
        
          <v-list-item @change="go(2)"> Casa de banho </v-list-item>
        
          <v-list-item @change="go(3)">Interior</v-list-item>
  
          <v-list-item @change="go(4)"> Jardim </v-list-item>
  
          <v-list-item @change="go(5)"> Cozinha </v-list-item>
   
          <v-list-item @change="go(6)"> Casa inteligente </v-list-item>
  
          <v-list-item @change="go(7)"> Mobilia </v-list-item>

          <v-list-item @change="go(8)"> Criança </v-list-item>
    
          <v-list-item @change="go(10)"> Eletrodomésticos </v-list-item>
   
          <v-list-item @change="go(11)"> Iluminação </v-list-item>
     
          <v-list-item @change="go(12)"> Lazer e viagem </v-list-item>
            
          <v-list-item @change="go(13)"> Verão </v-list-item>
       
          <v-list-item @change="go(14)"> Inverno </v-list-item>
       
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    isOpen: {
      get() {
        return this.$store.getters["appbar/getOpenMenuLateral"];
      },
      set(val) {
        this.$store.commit("appbar/setOpenMenuLateral", val);
      },
    },
  },
  methods: {
    goHome() {
      this.$router.push("/");
      this.$router.go();
    },
    go(int) {
      this.$router.push("/categoria/" + int);
      this.$router.go();
    },
  },
};
</script>

<style scoped>
.top {
  width: 100%;
}
.logo {
  cursor: pointer;
}
.link {
  color: #000000;
  text-decoration: none;
}
</style>