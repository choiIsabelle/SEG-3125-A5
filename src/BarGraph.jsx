import React, { useState } from 'react';
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
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: auto;
`;

const Select = styled.select`
  margin-bottom: 20px;
  padding: 8px;
  font-size: 16px;
`;

const BarGraph = () => {
  const { t } = useTranslation();

  const allData = {
    "2018_2023": {
      labels: [
        t('dashboard.bargraph.labels.2018_2019'),
        t('dashboard.bargraph.labels.2019_2020'),
        t('dashboard.bargraph.labels.2020_2021'),
        t('dashboard.bargraph.labels.2021_2022'),
        t('dashboard.bargraph.labels.2022_2023')
      ],
      data: {
        adult: [226159, 227226, 144007, 149921, 163387],
        probation: [70150, 67582, 45930, 54493, 55524],
        sentenced: [72389, 64964, 35566, 37932, 40298],
      }
    },
    "2020_2023": {
      labels: [
        t('dashboard.bargraph.labels.2020_2021'),
        t('dashboard.bargraph.labels.2021_2022'),
        t('dashboard.bargraph.labels.2022_2023')
      ],
      data: {
        adult: [144007, 149921, 163387],
        probation: [45930, 54493, 55524],
        sentenced: [35566, 37932, 40298],
      }
    }
  };

  const [selectedRange, setSelectedRange] = useState("2018_2023");

  const chartData = {
    labels: allData[selectedRange].labels,
    datasets: [
      {
        label: t('dashboard.bargraph.datasets.adult_admissions'),
        data: allData[selectedRange].data.adult,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: t('dashboard.bargraph.datasets.probation_admissions'),
        data: allData[selectedRange].data.probation,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: t('dashboard.bargraph.datasets.sentenced_admissions'),
        data: allData[selectedRange].data.sentenced,
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: t('dashboard.bargraph.chart_title'),
        font: {
          size: 20,
          weight: 'bold',
          family: 'Arial, sans-serif',
        },
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 14,
            family: 'Arial, sans-serif',
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: t('dashboard.bargraph.y_axis_title'),
          font: {
            size: 14,
            weight: 'bold',
            family: 'Arial, sans-serif',
          },
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
      <Select value={selectedRange} onChange={(e) => setSelectedRange(e.target.value)}>
        <option value="2018_2023">{t('dashboard.bargraph.select_range.2018_2023')}</option>
        <option value="2020_2023">{t('dashboard.bargraph.select_range.2020_2023')}</option>
      </Select>
      <Bar data={chartData} options={options} />
    </GraphContainer>
  );
};

export default BarGraph;
