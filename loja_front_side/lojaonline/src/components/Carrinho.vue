<template>
    <v-navigation-drawer v-model="isOpen" fixed temporary right>
    </v-navigation-drawer>
</template>

<script>
export default {
    props:{
        open :{type: Boolean},
        set: { type: Function },
    },
      data: function () {
        return {
            
        }
    },
    computed:{
        isOpen:{
            get(){
                return this.open
            },
            set(val){
                this.$emit('set',val)
            }
        }
    },
    method:{
        
    },
}
</script>