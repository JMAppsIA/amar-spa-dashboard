import React from "react";
import { defaults, Line } from "react-chartjs-2";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = "bottom";
const data = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: "Peptones",
        fill: true,
        borderWidth: 0,
        data: [12, 19, 3, 5, 2, 3, 18, 10, 8, 12, 2, 18],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderCapStyle: "butt",
        borderDash: [15, 5],
        pointRadius: 4,
        // borderWidth: 1,
      },
      {
        label: "Plasma rico en plaquetas",
        data: [14, 16, 3, 6, 6, 2, 8, 19, 11, 5, 8, 12],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 0,
        pointRadius: 4,
        borderCapStyle: "butt",
        borderDash: [15, 5],
        fill: true,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
        display: true,
        labels: {
            boxWidth: 50,
            fontSize: 18,
            fontColor: "gray"
          }
    }
  };
const FrequentServices = () => {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h5>Ventas por mes</h5>
          <h1>$682.5</h1>
          <div className="growth">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <Line
          data={data}
          height={400}
          width={600}
          options={options}
        />
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #7468f0;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #212121;
          span {
            color: black;
          }
        }
        span {
          color: #212121;
        }
      }
    }
  }
  .chart {
    height: 60vh;
  }
`;

export default FrequentServices;
