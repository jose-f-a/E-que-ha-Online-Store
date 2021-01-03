<template>
    <v-navigation-drawer v-model="this.drawer" fixed temporary>
    </v-navigation-drawer>
</template>

<script>
export default {
    props:{
        drawer :{type: Boolean},
        onClickDrawer: { type: Function },
    },
    method:{
        closeMenu(){
            this.$emit("onClickDrawer");
        }
    }
}
</script>