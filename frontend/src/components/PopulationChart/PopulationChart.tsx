import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const PopulationChart = ({ populationData }: any) => {
  const formatPopulation = (value: number) =>
    new Intl.NumberFormat('en-US').format(value);

  const options: ApexOptions = {
    chart: {
      type: 'line',
    },
    series: [
      {
        name: 'Population',
        data: populationData.map((data: any) => data.value),
      },
    ],
    xaxis: {
      categories: populationData.map((data: any) => data.year),
      labels: {
        style: {
          colors: '#ededed',
          fontSize: '12px',
          fontWeight: 600,
        },
      },
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '14px',
      },
      y: {
        formatter: value => formatPopulation(value),
      },
    },
    yaxis: {
      labels: {
        formatter: value => formatPopulation(value),
        style: {
          colors: ['#ededed'],
          fontSize: '12px',
          fontWeight: 600,
        },
      },
    },
    dataLabels: {
      style: {
        colors: ['#16b40b'],
      },
    },
  };

  console.log(populationData);

  return (
    <div className="mixed-chart">
      <Chart
        options={options}
        series={options.series}
        type="line"
        width={500}
        height={320}
      />
    </div>
  );
};

export default PopulationChart;