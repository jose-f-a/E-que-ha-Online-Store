<template>
  <div class="white item" @click="onClickItem">
    <p class="text-subtitle-1 text-left item-info">{{ compra.compraid }}</p>
    <p class="text-subtitle-1 text-left item-info">{{ compra.nome }}</p>
    <p class="text-subtitle-1 text-left item-info">{{ compra.contacto }}</p>
  </div>
</template>

<script>
export default {
  name: "ListComprasItem",
  props: ["compra"],
  methods: {
    onClickItem() {
      console.log("click");
      this.$store.commit("user/changeCompraDialog");
      console.log(this.$store.commit("user/changeCompraDialog"));
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  padding: 15px;
  cursor: pointer;
}
.item:hover {
  background: #666666;
}
.item-info {
  padding: 5px;
}
</style>