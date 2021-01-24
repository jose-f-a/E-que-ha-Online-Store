<template>
  <v-sheet
    class="grey lighten-5"
    max-height="85vh"
    min-height="85vh"
    rounded="lg"
    elevation="3"
  >
    <v-container>
      <v-row>
        <v-col class="mt-2" cols="4">
          <v-card class="grafico-1">
            <v-card-title>Ultimas 5 Reviews</v-card-title>
            <line-chart
              :chart-data="datacollection1"
              :options="options"
            ></line-chart>
          </v-card>
        </v-col>

        <v-col class="mt-2" cols="4">
          <v-card class="grafico-2">
            <v-card-title>Ultimas 5 Compras</v-card-title>
            <bar :chart-data="datacollection2" :options="options"></bar>
          </v-card>
        </v-col>

        <v-col class="mt-2" cols="4">
          <v-card class="grafico-3">
            <v-card-title> Compras do ultimo mes</v-card-title>
            <line-chart
              :chart-data="datacollection3"
              :options="options"
            ></line-chart>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import axios from "axios";
import LineChart from "./../components/Charts/LineChart";
import BarChart from "./../components/Charts/BarChart";

export default {
  data: () => ({
    datacollection1: null,
    datacollection2: null,
    datacollection3: null,
    options: {
      responsive: true,
      cutoutPercentage: 80,
      maintainAspectRatio: false,
    },
    labelsV: [],
    valueV: [],
    valueC: [],
  }),
  components: {
    LineChart,
    bar: BarChart,
  },
  methods: {
    // getRandomInt() {
    //   return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    // },
  },
  created: function () {
    const options = {
      method: "GET",
      url: "http://localhost:3342/api/get-last-review",
    };
    axios
      .request(options)
      .then((response) => {
        var data = [];
        var label = [];
        //Set data in grafico

        for (var compra in response.data) {
          data.push(
            parseFloat(parseFloat(response.data[compra].rating).toFixed(2))
          );
          label.push(response.data[compra].nome);
        }
        this.datacollection1 = {
          labels: label,
          datasets: [
            {
              label: "Reviews",
              borderWidth: 1,
              borderColor: "red",
              data: data,
            },
          ],
        };
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
        var label = [];
        var data = [];
        console.log(response.data);
        for (var compra in response.data) {
          label.push(response.data[compra].compraid);
          data.push(
            parseFloat(parseFloat(response.data[compra].total).toFixed(2))
          );
        }
        this.datacollection2 = {
          labels: label,
          datasets: [
            {
              label: "Compras",
              borderWidth: 1,
              borderColor: "blue",
              data: data,
            },
          ],
        };
      })
      .catch(function (error) {
        console.error(error);
      });

    var x = new Date();
    x.setDate(1);
    x.setMonth(x.getMonth() - 1);

    const options3 = {
      method: "POST",
      url: "http://localhost:3342/api/get-compras-last-month",
      data: { initDate: x },
    };
    axios
      .request(options3)
      .then((response) => {
        console.log(response.data);
        var label = [];
        var data = [];

        for (var compra in response.data) {
          var date = new Date(response.data[compra].criadaem);
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var dt = date.getDate();

          if (dt < 10) {
            dt = "0" + dt;
          }
          if (month < 10) {
            month = "0" + month;
          }

          label.push(dt + "/" + month + "/" + year);
          data.push(
            parseFloat(parseFloat(response.data[compra].total).toFixed(2))
          );
        }
        this.datacollection3 = {
          labels: label,
          datasets: [
            {
              label: "Compras no ultimo mes",
              borderWidth: 1,
              borderColor: "green",
              data: data,
            },
          ],
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.grafico-1 {
  height: 30rem;
  width: 30rem;
}
</style>