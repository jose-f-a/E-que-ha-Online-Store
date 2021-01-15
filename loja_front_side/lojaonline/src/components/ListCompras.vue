<template>
  <v-sheet
    class="grey lighten-5"
    max-height="85vh"
    min-height="85vh"
    rounded="lg"
    elevation="3"
  >
    <div class="lista">
      <p class="text-h4 text-left">As suas encomendas</p>
       <div v-for="compra in listaComprasVisiveis" v-bind:key="compra.compraid">
        <ListComprasItem v-bind:compra="compra"></ListComprasItem>
      </div>
      <div class="text-center">
    <v-pagination
      v-model="page"
      :length="paginas" circle class="my-4"
      :total-visible="7"
    ></v-pagination>
  </div>   
    </div>
  </v-sheet>
</template>
<script>
import ListComprasItem from "./ListComprasItem";

export default {
  data () {
      return {
        page: 1,
        name: "Compra",
        perPage: 6,
      }
    },
  components: {
    ListComprasItem,
  },
  methods:{
    
  },
  watch:{
    page:function(){
      this.$store.commit("user/setComprasVisiveis",this.page)
    }
  },
  computed: {
    user: {
      get() {
        return this.$store.getters["user/getUser"];
      },
    },
    listaComprasVisiveis: {
      get() {
        return this.$store.getters["user/getComprasVisiveis"];
      },
    },
    paginas:{
        get(){
           return this.$store.getters["user/getPaginas"];
        }
    }
  },
};
</script>

<style scoped>
.lista {
  padding: 25px;
}
</style>