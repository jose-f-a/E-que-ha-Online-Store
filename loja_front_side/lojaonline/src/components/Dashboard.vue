<template>
  <div>
    <v-card class="mx-auto text-center" color="green">
      <v-card-title>
        <div class="display-1 font-weight-thin">Ultimas 5 compras</div>
      </v-card-title>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="valueC"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item"> €{{ item.value }} </template>
        </v-sparkline>
      </v-sheet>
    </v-card>

     <v-card class="review-card">
      <v-card-title>
        <div class="display-1 font-weight-thin">
          Ultimas 5 reviews
        </div>
      </v-card-title>
      <v-sparkline
         class="review-sparkline"
        :labels="labelsV"
        :value="valueV"
        padding="24"
        smooth
        auto-draw
      ></v-sparkline>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    labelsV: [],
    valueV: [],
    valueC: [],
  }),
  components: {},
  methods: {},
  created: function () {
    const options = {
      method: "GET",
      url: "http://localhost:3342/api/get-last-review",
    };

    axios
      .request(options)
      .then(response => {
        for (var compra in response.data) {
          this.valueV.push(
            parseFloat(parseFloat(response.data[compra].rating).toFixed(2))
          );
          this.labelsV.push(response.data[compra].nome)
        }
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    const options2 = {
      method: "GET",
      url: "http://localhost:3342/api/get-last-compra",
    };

    axios
      .request(options2)
      .then((response) => {
        for (var compra in response.data) {
          

          this.valueC.push(
            parseFloat(parseFloat(response.data[compra].total).toFixed(2))
          );
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>

<style scoped>


</style>