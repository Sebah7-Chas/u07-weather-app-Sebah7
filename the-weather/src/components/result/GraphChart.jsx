import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineGraph = ({ pollutionData,forecastData, hasSearched}) => { 
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (pollutionData) {
      const fourDaysData = pollutionData.list.slice(0, 96);
      setChart({ pollution: { list: fourDaysData } });
    }
    if (forecastData) {
      const fiveDaysData = forecastData.list.slice(0, 40);
      setChart(prevState => ({ ...prevState, forecast: { list: fiveDaysData } }));
    }
  }, [pollutionData, forecastData])

  const data = {
    labels: [...new Set(chart?.pollution?.list?.map(x => new Date(x.dt * 1000).toLocaleDateString()))],

    datasets: [
    {
      label: 'Сoncentration of O3(Ozone)',
      data: chart?.pollution?.list?.map(x => x.components.o3),
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'black',
      borderWidth: 1,
      fill: true,
    },
    {
      label: ' Сoncentration of CO(Carbon monoxide)',
      data: chart?.pollution?.list?.map(x => x.components.co),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'green',
      borderWidth: 1,
      fill: true,
    },
    {
      label: 'Temp Max',
      data: chart?.forecast?.list?.map(x => x.main.temp_max),
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'blue',
      borderWidth: 1,
      fill: true,
    },
    {
      label: 'Temp Min',
      data: chart?.forecast?.list?.map(x => x.main.temp_min),
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'red',
      borderWidth: 1,
      fill: true,
    },
  ]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div className='bg-white  rounded-lg opacity-65'>
      <div className='my-6'>
      {pollutionData ? (
      <Line
        data={data}
        height={300}
        options={options}
      />
    ) : hasSearched ? (
      <div>No data yet</div>
    ): null }
    </div>

    </div>
  )
}

LineGraph.propTypes = {
  pollutionData: PropTypes.object,
  forecastData: PropTypes.object,
  hasSearched: PropTypes.bool,
};

export default LineGraph