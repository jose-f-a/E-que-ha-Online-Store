<template>
  <div>
    <v-card class="mx-auto text-center">
      <v-card-title>
        <div class="display-1 font-weight-thin">
          TOP 5 artigos mais comprados
        </div>
      </v-card-title>
      <v-sparkline
        :labels="labelsV"
        :value="valueV"
        height="100"
        padding="24"
        smooth
        auto-draw
      ></v-sparkline>
      <v-divider></v-divider>
    </v-card>
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    labelsV: ["Produto 1", "Produto 1", "Produto 1", "Produto 1", "Produto 1"],
    valueV: [1, 446, 675, 510, 760],
    valueC: [],
  }),
  components: {},
  methods: {},
  created: function () {
    const options = {
      method: "GET",
      url: "http://localhost:3342/api/get-last-compra",
    };

    axios
      .request(options)
      .then((response) => {
        for (var compra in response.data) {
          console.log(parseFloat(response.data[compra].total).toFixed(2));

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