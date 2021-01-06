<template>
    <v-navigation-drawer v-model="isOpen" fixed temporary>
        <v-btn @click="closeDialog">
        <v-icon> mdi-close </v-icon>
      </v-btn>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="57"
      max-width="134"
      src="../assets/logo.png"
    ></v-img>
        <v-list nav dense>
            <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Categorias
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
        <v-list-item-group
        >
          <v-list-item >
            <router-link to="/categoria/2">Casa de banho</router-link>
          </v-list-item>
         <v-list-item >
            <router-link to="/categoria/3">interior</router-link>
          </v-list-item>
           <v-list-item >
            <router-link to="/categoria/4">Jardim</router-link>
          </v-list-item>
           <v-list-item >
            <router-link to="/categoria/5">Cozinha</router-link>
          </v-list-item>
            <v-list-item >
            <router-link to="/categoria/6">Casa inteligente</router-link>
          </v-list-item>
            <v-list-item >
            <router-link to="/categoria/7">Mobilia</router-link>
          </v-list-item>
            <v-list-item >
            <router-link to="/categoria/8">Criança</router-link>
          </v-list-item>
            <v-list-item >
            <router-link to="/categoria/10">Eletrodomésticos</router-link>
          </v-list-item>
            <v-list-item >
            <router-link to="/categoria/11">Iluminação</router-link>
          </v-list-item>
            <v-list-item >
            <router-link to="/categoria/12">Lazer e viagem</router-link>
          </v-list-item>
            <v-list-item >
            <router-link to="/categoria/13">Verão</router-link>
          </v-list-item>
            <v-list-item >
            <router-link to="/categoria/14">Inverno</router-link>
          </v-list-item>

          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    computed:{
        isOpen:{
            get(){
                return this.$store.getters['appbar/getOpenMenuLateral']
            },
            set(val){
                
                this.$store.commit("appbar/setOpenMenuLateral",val)
            }
        }
    },
    methods:{
       closeDialog () {
           
           this.$store.commit("appbar/changeOpenMenuLateral")
           
       }
    },
}
</script>
<style scoped>

</style>