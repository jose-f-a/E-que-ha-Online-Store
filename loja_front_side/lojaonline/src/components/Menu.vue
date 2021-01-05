<template>
    <v-navigation-drawer v-model="isOpen" fixed temporary>
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
    method:{
      
    },
}
</script>