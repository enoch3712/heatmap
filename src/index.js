import "./styles.css";
import Chart from "chart.js";
import "chartjs-chart-matrix";

const getColor = (flag) => {
  switch (flag) {
    case 0:
      return "rgb(0,0,0,0.3)";
    case 1:
      return "rgb(0,128,0,0.3)";
    case 2:
      return "rgb(0,128,0,0.6)";
    default:
      return "rgb(255,255,255)";
  }
};

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    datasets: [
      {
        label: "1",
        flags: [0, 2, 1, 1, 2],
        data: [1, 1, 1, 1, 1],
        backgroundColor: function (ctx) {
          let flag = ctx.dataset.flags[ctx.dataIndex];
          return getColor(flag);
        }
      },
      {
        label: "2",
        flags: [2, 0, 1, 2, 0],
        data: [1, 1, 1, 1, 1],
        backgroundColor: function (ctx) {
          let flag = ctx.dataset.flags[ctx.dataIndex];
          return getColor(flag);
        }
      },
      {
        label: "3",
        flags: [2, 0, 1, 2, 0],
        data: [1, 1, 1, 1, 1],
        backgroundColor: function (ctx) {
          let flag = ctx.dataset.flags[ctx.dataIndex];
          return getColor(flag);
        }
      },
      {
        label: "4",
        flags: [2, 0, 1, 2, 0],
        data: [1, 1, 1, 1, 1],
        backgroundColor: function (ctx) {
          let flag = ctx.dataset.flags[ctx.dataIndex];
          return getColor(flag);
        }
      },
      {
        label: "5",
        flags: [2, 0, 1, 2, 0],
        data: [1, 1, 1, 1, 1],
        backgroundColor: function (ctx) {
          let flag = ctx.dataset.flags[ctx.dataIndex];
          return getColor(flag);
        }
      }
    ]
  },
  options: {
    animation: {
      duration: 1,
      onComplete() {
        const chartInstance = this.chart;
        const { ctx } = chartInstance;
        ctx.textBaseline = "middle";
        this.data.datasets.forEach((dataset, i) => {
          const meta = chartInstance.controller.getDatasetMeta(i);

          meta.data.forEach((bar, index) => {
            const value = dataset.data[index];
            console.log(bar);
            const { x, y } = bar._model;
            // set x and y for text to align in every box
            const _x = x - bar._xScale.width / 10 - bar._xScale.paddingRight;

            ctx.fillText(value, _x, y);
          });
        });
      }
    },
    elements: {
      rectangle: {
        borderWidth: 2,
        borderColor: "rgb(255,255,255)"
      }
    },
    scales: {
      yAxes: [
        {
          type: "category",
          labels: ["Incasare venit", "CP", "Creditare", "Asigurari", "CD"],
          stacked: true,
          gridLines: {
            display: false
          }
        }
      ],
      xAxes: [
        {
          /* type: "category",
           labels: [ "feb.", "mar.", "apr.", "mai", "iun."],
          afterBuildTicks: function(scale, ticks) {
            return ticks.slice(0,);
          },
          ticks: {
            maxTicksLimit:5
          },
          ticks: {
            callback: function(value, index, values) {
              return index;
          }
          }, */
          ticks: {
            stepSize: 1,
            padding: -15,
            labelOffset: 50,
            callback: function (value, index, values) {
              const labels = ["feb.", "mar.", "apr.", "mai", "iun."];
              return labels[index];
            }
          },
          position: "top",
          stacked: true,
          gridLines: {
            display: false
          }
        }
      ]
    }
  }
});
