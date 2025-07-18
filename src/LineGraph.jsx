import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectors } from './dashboard.slice';
import i18n from './i18n/i18n';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

const LineGraph = () => {
  const { t } = useTranslation();
  const [chartData, setChartData] = useState(null);
  const [selectedGender, setSelectedGender] = useState('all');
  const language = useSelector(selectors.getLanguage);

  // need to update language in i18n when it changes in Redux
  // i need to force re-render of the graph when language changes
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  useEffect(() => {
    const labels = ['Feb-25', 'Mar-25', 'Apr-25', 'May-25', 'Jun-25'];

    const parse = (arr) => arr.map(value => parseFloat(value.replace(/,/g, '')));

    const data1 = parse(["20,768.60", "20,758.00", "20,873.80", "21,191.20", "21,449.70"]);
    const data2 = parse(["2,574.40", "2,575.30", "2,600.90", "2,808.00", "2,935.30"]);
    const data3 = parse(["10,000.00", "10,200.00", "10,400.00", "10,600.00", "10,800.00"]);
    const data4 = parse(['7,328.10', '7,312.90', '7,307.90', '7,359.00', '7,404.40']);
    const data5 = parse(["4,301.70", "4,315.70", "4,375.10", "4,406.80", "4,415.90"]);
    const data6 = parse(["1,318.30", "1,308.20", "1,334.80", '1,475.10', '1,527.60']);

    const m1_data = parse(["9,576.50", "9,560.60", "9,649.40", "9,713.20", "9,821.60"]);
    const m2_data = parse(["5,124.40", "5,117.50", "5,167.10", "5,212.40", "5,292.20"]);
    const m3_data = parse(["3,796.30", "3,789.90", "3,799.30", "3,825.10", "3,850.00"]);
    const m4_data = parse(["4,452.10", "4,443.20", "4,482.40", "4,500.80", "4,529.40"]);
    const m5_data = parse(["7,240.50", "7,225.20", "7,286.30", "7,323.50", "7,420.20"]);
    const m6_data = parse(["2,336.00", "2,335.40", "2,363.10", "2,389.70", "2,401.40"]);

    const w1 = parse(["1,256.10", "1,267.10", "1,266.00", "1,332.90", "1,407.70"]);
    const w2 = parse(["8,617.70", "8,622.10", "8,623.60", "8,670.00", "8,692.90"]);
    const w3 = parse(["4,640.20", "4,642.80", "4,628.90", "4,654.90", "4,662.80"]);
    const w4 = parse([ "3,531.80", "3,523.00", "3,508.60", "3,533.90", "3,554.40"]);
    const w5 = parse(["3,977.50", "3,979.30", "3,994.70", "4,015.10", "4,030.00"]);
    const w6 = parse(["6,652.00", "6,641.80", "6,611.50", "6,652.90", "6,678.30"]);
    const w7 = parse(["1,965.70", "1,980.30", "2,012.00", "2,017.10", "2,014.50"]);
    

    const allDatasets = [
      {
      label: t('dashboard.bargraph.header'),
      data: data1,
      backgroundColor: 'rgba(75, 192, 192, 0.4)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label: t('dashboard.linegraph_labels.15_24'),
      data: data2,
      backgroundColor: 'rgba(255, 99, 132, 0.4)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label: t('dashboard.linegraph_labels.25_44'),
      data: data3,
      backgroundColor: 'rgba(54, 162, 235, 0.4)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label: t('dashboard.linegraph_labels.45_64'),
      data: data4,
      backgroundColor: 'rgba(19, 237, 117, 0.27)',
      borderColor: 'rgba(30, 95, 96, 0.27)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label: t('dashboard.linegraph_labels.55_over'),
      data: data5,
      backgroundColor: 'rgba(54, 169, 22, 0.85)',
      borderColor: 'rgba(24, 91, 19, 0.74)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label: t('dashboard.linegraph_labels.men_15_24'),
      data: data6,
      backgroundColor: 'rgba(119, 107, 243, 0.87)',
      borderColor: 'rgba(119, 123, 240, 0.74)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label: t('dashboard.linegraph_labels.men_25_over'),
      data: m1_data,
      backgroundColor: 'rgba(77, 236, 149, 0.87)',
      borderColor: 'rgba(53, 206, 81, 0.74)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label: t('dashboard.linegraph_labels.men_25_44'),
      data: m2_data,
      backgroundColor: 'rgba(253, 117, 20, 0.98)',
      borderColor: 'rgba(255, 121, 32, 0.9)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label:t('dashboard.linegraph_labels.women_15_24'),
      data: w1,
      backgroundColor: 'rgba(255, 159, 64, 0.4)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label: t('dashboard.linegraph_labels.women_25_and_over'),
      data: w2,
      backgroundColor: 'rgba(153, 102, 255, 0.4)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label: t('dashboard.linegraph_labels.women_25_44'),
      data: w3,
      backgroundColor: 'rgba(255, 206, 86, 0.4)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label: t('dashboard.linegraph_labels.women_45_64'),
      data: w4,
      backgroundColor: 'rgba(75, 192, 192, 0.4)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label: t('dashboard.linegraph_labels.women_45_over'),
      data: w5,
      backgroundColor: 'rgba(54, 162, 235, 0.4)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label: t('dashboard.linegraph_labels.women_25_54'),
      data: w6,
      backgroundColor: 'rgba(255, 99, 132, 0.4)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
      {
      label:t('dashboard.linegraph_labels.women_55_over'),
      data: w7,
      backgroundColor: 'rgba(19, 237, 117, 0.27)',
      borderColor: 'rgba(30, 95, 96, 0.27)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      },
    ];
    

    const filteredDatasets =
    selectedGender === 'men'
      ? allDatasets.filter(dataset => dataset.label.toLowerCase().includes(t('dashboard.gender_filter.men').toLowerCase())).filter(data => !data.label.toLowerCase().includes(t('dashboard.gender_filter.women').toLowerCase()))
      : selectedGender === 'women'
      ? allDatasets.filter(dataset => dataset.label.toLowerCase().includes(t('dashboard.gender_filter.women').toLowerCase()))
      : allDatasets;

    setChartData({
      labels,
      datasets: filteredDatasets,
    });
  }, [selectedGender, t]);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <GraphContainer>
      <select
        value={selectedGender}
        onChange={(e) => setSelectedGender(e.target.value)}
      >
        <option value="all">{t('dashboard.gender_filter.all')}</option>
        <option value="men">{t('dashboard.gender_filter.men')}</option>
        <option value="women">{t('dashboard.gender_filter.women')}</option>

      </select>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: t('dashboard.linegraph.title'),
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          },
          scales: {
            y: {
              beginAtZero: false,
              title: {
                display: true,
                text: t('dashboard.y_axis.title'),
              },
              ticks: {
                callback: (value) => `${value.toLocaleString()}K`,
              },
            },
          },
        }}
      />
    </GraphContainer>
  );
};

export default LineGraph;
