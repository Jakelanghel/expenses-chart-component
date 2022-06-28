import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

const Graph = (props) => {
  return (
    <Bar
      data={props.data}
      height={400}
      width={600}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },

        scales: {
          legend: {
            display: false,
          },

          y: {
            beginAtZer: true,
            ticks: {
              display: false,
            },
            grid: {
              display: false,
              drawTicks: false,
              drawOnChartArea: false,
              drawBorder: false,
            },
          },
          x: {
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
      }}
    />
  );
};

export default Graph;
