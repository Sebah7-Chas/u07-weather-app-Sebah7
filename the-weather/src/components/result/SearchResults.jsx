
import PropTypes from 'prop-types';
import { UilTemperatureHalf,
  UilTemperature,
  UilTemperatureEmpty,
  UilWind,
  UilTear,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons';


const Results = ({ weatherData, hasSearched, units }) => {

  return (

    <>     

      {weatherData ? (

        <div 
        className='bg-purple-900 rounded-lg opacity-75'
        >
          <div className='flex items-center justify-center my-6 '>
          <p className='text-white text-xl font-extralight'>
          {new Date((weatherData.dt + weatherData.timezone) * 1000).toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })} 
      | Local time: {new Date((weatherData.dt + weatherData.timezone) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
          
        <div className='flex items-center justify-center my-3'>
      <h2 className='text-white text-3xl font-medium'>{weatherData.name}, {weatherData.sys.country}</h2>
      </div>

      <div className='flex items-center justify-center py-6
      text-xl font-semibold text-cyan-300'>
        <p>{weatherData.weather[0].main}</p>
      </div>

      <div className='flex flex-row items-center justify-between
      text-white py-3 px-1'>
        
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather icon" 
        className='w-50 h-50 drop-shadow-lg'
        />
      
      <p className='text-5xl'>
      {units === 'metric' ? Math.round(weatherData.main.temp) + '°C' : Math.round(weatherData.main.temp * 9 / 5 + 32) + '°F'}
      </p>

      <div className='flex flex-col space-y-2'>

      <div className='flex font-bold text-sm items-center justify-center'>
        <UilTemperatureHalf size={18} className='mr-1'/>
        <span>Real Feel: {units === 'metric' ? Math.round(weatherData.main.feels_like) + '°C' : Math.round(weatherData.main.feels_like * 9 / 5 + 32) + '°F'}</span>
      </div>

      <div className='flex font-bold text-sm items-center justify-center'>
        <UilTear size={18} className='mr-1'/>
        <span>Humidity: {weatherData.main.humidity} %</span>
      </div>

      <div className='flex font-bold text-sm items-center justify-center'>
        <UilWind size={18} className='mr-1'/>
        <span> Wind speed: {weatherData.wind.speed} km/h</span>
      </div>
      </div>
      </div>

      <div className='flex flex-row item-center justify-center
      space-x-2 text-white text-sm py-3'>
        <UilSun/>
        <p className='font-black'>
        Sunrise: <span className='font-meduim ml-1'>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span></p>
        <p className='font-black'>|</p>

        <UilSunset/>
        <p className='font-black'>
        Sunset: <span className='font-meduim ml-1'>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span></p>
        <p className='font-black'>|</p>

        <UilTemperature/>
        <p className='font-black'>
        High: <span className='font-meduim ml-1'>{units === 'metric' ? Math.round(weatherData.main.temp_max) + '°C' : Math.round(weatherData.main.temp_max * 9 / 5 + 32) + '°F'}°
        </span></p>
        <p className='font-black'>|</p>

        <UilTemperatureEmpty />
        <p className='font-black'>
        Low: <span className='font-meduim ml-1'>{units === 'metric' ? Math.round(weatherData.main.temp_min) + '°C' : Math.round(weatherData.main.temp_min * 9 / 5 + 32) + '°F'}°
        </span></p>

      </div>

      </div>
      
    )
      : hasSearched ? (
        <p>No Match . . .</p>
      ) 
      : null}
</>
  );
};

Results.propTypes = {
  weatherData: PropTypes.object,
  hasSearched: PropTypes.bool,
  units: PropTypes.string,
};

export default Results;