<template>
  <v-container>
    <v-row>
      <v-col class="mt-2" cols="4">
        <v-card class="graficos" tile elevation="1">
          <v-card-title>Ultimas 5 Reviews</v-card-title>
          <line-chart
            :chart-data="datacollection1"
            :options="options"
          ></line-chart>
        </v-card>
      </v-col>

      <v-col class="mt-2" cols="4">
        <v-card class="graficos" tile elevation="1">
          <v-card-title>Ultimas 5 Compras</v-card-title>
          <bar :chart-data="datacollection2" :options="options"></bar>
        </v-card>
      </v-col>

      <v-col class="mt-2" cols="4">
        <v-card class="graficos" tile elevation="1">
          <v-card-title> Compras no ultimo mes</v-card-title>

          <line-chart :chart-data="datacollection3" :options="options">
          </line-chart>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mt-2" cols="4">
        <v-card class="graficos" tile elevation="1">
          <v-card-title> Compras por categoria</v-card-title>

          <pie-chart :chart-data="datacollection4" :options="options">
          </pie-chart>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import LineChart from "./../components/Charts/LineChart";
import BarChart from "./../components/Charts/BarChart";
import PieChart from "./../components/Charts/PieChart";

export default {
  data: () => ({
    datacollection1: null,
    datacollection2: null,
    datacollection3: null,
    datacollection4: null,
    labelsV: [],
    valueV: [],
    valueC: [],
    options: {
      responsive: true,
      cutoutPercentage: 80,
      maintainAspectRatio: false,
    },
    backgroundColors: [
      "rgba(244, 208, 111, 0.65)",
      "rgba(34, 124, 157, 0.65)",
      "rgba(217, 240, 255, 0.65)",
      "rgba(196, 166, 157, 0.65)",
      "rgba(152, 168, 134, 0.65)",
    ],
    borderColors: [
      "rgba(244, 208, 111, 1)",
      "rgba(34, 124, 157, 1)",
      "rgba(217, 240, 255, 1)",
      "rgba(196, 166, 157, 1)",
      "rgba(152, 168, 134, 1)",
    ],
  }),
  components: {
    LineChart,
    bar: BarChart,
    pieChart: PieChart,
  },
  methods: {
    // getRandomInt() {
    //   return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    // },
  },
  created: function () {
    /** Grafico 1- Ultimas 5 reviews */
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
      })
      .catch(function (error) {
        console.error(error);
      });

    /** Grafico 2- Ultimas 5 compras */
    const options2 = {
      method: "GET",
      url: "http://localhost:3342/api/get-last-compra",
    };
    axios
      .request(options2)
      .then((response) => {
        var label = [];
        var data = [];

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
              borderColor: this.borderColors,
              backgroundColor: this.backgroundColors,
              data: data,
            },
          ],
        };
      })
      .catch(function (error) {
        console.error(error);
      });

    /** Grafico 3- Compras no ultimo mes */
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
        var label = [];
        var data = [];

        for (var compra in response.data) {
          /** Tratamento da data */
          var date = new Date(response.data[compra].dia);
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
              label: "Valor faturado",
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

    /** Grafico 4- Compras por categoria */
    const options4 = {
      method: "GET",
      url: "http://localhost:3342/api/get-compras-por-categoria",
    };
    axios
      .request(options4)
      .then((response) => {
        var label = [];
        var data = [];

        console.log(response.data);

        for (var categoria in response.data) {
          label.push(response.data[categoria].nome);
          data.push(
            parseFloat(parseFloat(response.data[categoria].total).toFixed(2))
          );
        }

        this.datacollection4 = {
          labels: label,
          datasets: [
            {
              label: "Total",
              borderWidth: 1,
              borderColor: this.borderColors,
              backgroundColor: this.backgroundColors,
              data: data,
            },
          ],
        };
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>

<style scoped>
.graficos {
  height: 30rem;
  width: 30rem;
}
</style>