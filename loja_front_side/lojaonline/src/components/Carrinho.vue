<template>
    <v-navigation-drawer v-model="isOpen" fixed temporary right>
    </v-navigation-drawer>
</template>

<script>
export default {
    computed:{
        isOpen:{
            get(){
                return this.$store.getters['appbar/getOpenCarrinho']
            },
            set(val){
                this.$store.commit("appbar/setOpenCarrinho",val)
            }
        }
    },
    method:{
        
    },
}
</script>