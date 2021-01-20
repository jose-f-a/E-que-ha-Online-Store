<template>
  <div>
    <line-chart :chart-data="datacollection"></line-chart>
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
import LineChart from './../components/Charts/LineChart';
export default {
  data: () => ({
    datacollection: null,
    labelsV: [],
    valueV: [],
    valueC: [],

  }),
  components: {
    LineChart
  },
  methods: {
    
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
  },
  created: function () {
     
    const options = {
      method: "GET",
      url: "http://localhost:3342/api/get-last-review",
    };
    axios
      .request(options)
      .then(response => {
        var data=[]
        var label=[]
        //Set data in grafico
        

        for (var compra in response.data) {
          data.push(
            parseFloat(parseFloat(response.data[compra].rating).toFixed(2))
          );
          label.push(response.data[compra].nome)
        }
        this.datacollection = {
          labels: label,
          datasets: [ {
              label: 'Data One',
              borderWidth:1,
              borderColor:"red",
              data: data
            },
          ]
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