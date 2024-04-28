import PropTypes from 'prop-types';

const Forecast = ({ forecastData, hasSearched, units }) => {


  const groupForecastByDay = () => {
    const groupedForecast = {};
    forecastData.list.forEach(forecast => {
      const date = new Date(forecast.dt * 1000).toLocaleDateString();
      if (!groupedForecast[date]) {
        groupedForecast[date] = forecast;
      }
    });
    return Object.values(groupedForecast);
  };
  

  return (
    <>
      {forecastData ? (
        <div>
          <div className='bg-purple-900 rounded-lg opacity-75'>
<div className='flex items-center justify-start my-6'>
            <p className='text-white font-medium pl-2 uppercase'>5-Day Forecast</p>
          </div>
          <hr className='my-2' />

        <div className="flex flex-row items-center justify-between text-white overflow-x-auto">
            
            {groupForecastByDay().map((forcast, index) => (
              <div key={index} className="flex flex-col items-center justify-center mx-2">
                <p className="font-bold text-md">{new Date(forcast.dt * 1000).toLocaleTimeString([], { weekday: 'short',  hour: '2-digit', minute: '2-digit' })}</p>
                <img src={`https://openweathermap.org/img/wn/${forcast.weather[0].icon}@2x.png`} alt="Weather icon" className="w-12 my-1" />
                <p className="font-medium">{units === 'metric' ? Math.round(forcast.main.temp) + '°C' : Math.round(forcast.main.temp * 9 / 5 + 32) + '°F'}</p>
              </div>
            ))}
          </div>
          </div>

          <div className='bg-purple-900  rounded-lg opacity-75'>

<div className='flex items-center justify-start my-6'>
            <p className='text-white font-medium pl-2 uppercase'>3-hours Interval Forecast</p>
          </div>

          <hr className='my-4' />

           {/* Display Hourly Forecast */}
        <div className="flex flex-row items-center justify-between text-white overflow-x-auto">
        {forecastData.list.slice(0,8).map((forecast, index) => (
        <div key={index} className="flex flex-col items-center justify-center mx-2">
        <p className="font-bold text-md">{new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="Weather icon" className="w-12 my-1" />
        {units === 'metric' ? Math.round(forecast.main.temp) + '°C' : Math.round(forecast.main.temp * 9 / 5 + 32) + '°F'}°
        </div>
      ))}

        </div>
       </div>
       </div>

      ) : hasSearched ? (
        <p>No Match . . .</p>
      ) : null}
    </>
  );
};

Forecast.propTypes = {
  forecastData: PropTypes.object,
  hasSearched: PropTypes.bool,
  units: PropTypes.string,
};

export default Forecast;
