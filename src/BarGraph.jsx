import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: auto;
`;

const BarGraph = () => {
  const { t } = useTranslation();

  const chartData = {
    labels: [
      t('dashboard.bargraph.labels.2018_2019'),
      t('dashboard.bargraph.labels.2019_2020'),
      t('dashboard.bargraph.labels.2020_2021'),
      t('dashboard.bargraph.labels.2021_2022'),
      t('dashboard.bargraph.labels.2022_2023')
    ],
    datasets: [
      {
        label: t('dashboard.bargraph.datasets.adult_admissions'),
        data: [226159, 227226, 144007, 149921, 163387],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',

        ],
        borderWidth: 1,
      },
      {
        label: t('dashboard.bargraph.datasets.probation_admissions'),
        data: [70150, 67582, 45930, 54493, 55524],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: t('dashboard.bargraph.datasets.sentenced_admissions'),
        data: [72389, 64964, 35566, 37932, 40298],
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 159, 64, 0.6)',

          'rgba(255, 159, 64, 0.6)',

          'rgba(255, 159, 64, 0.6)',

        ],
        borderColor: [
          'rgba(255, 159, 64, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: t('dashboard.bargraph.chart_title'),
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: t('dashboard.bargraph.y_axis_title'),
        },
        ticks: {
          callback: function (value) {
            return value >= 1000 ? value.toLocaleString() : value;
          },
        },
      },
    },
  };

  return (
    <GraphContainer>
      <Bar data={chartData} options={options} />
    </GraphContainer>
  );
};

export default BarGraph;
