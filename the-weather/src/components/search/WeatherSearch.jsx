import { useEffect, useState } from 'react';
import axios from 'axios';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import Results from '../result/SearchResults';
import { UserLocation } from '../StoreLocation';
import Forecast from '../result/ForcastResults';
import PropTypes from 'prop-types';

const Weather = () => {
  const [city, setCity] = useState('');
  const [units, setUnits] = useState('metric');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const appId = import.meta.env.VITE_APP_ID;
  const userPosition = UserLocation(state => state.userLocation);
  const setUserPosition = UserLocation(state => state.updateUserLocation);

  const fetchDataByCity = async (cityName) => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appId}&units=${units}`
      );
      console.log("Weather Data by City:", weatherResponse.data);
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${appId}&units=${units}`
      );
      console.log("Forecast Data by City:", forecastResponse.data);
      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setHasSearched(true);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataByLocation = async () => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${userPosition.latitude}&lon=${userPosition.longitude}&appid=${appId}&units=${units}`
      );
      console.log("Weather Data by Location:", weatherResponse.data);
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${userPosition.latitude}&lon=${userPosition.longitude}&appid=${appId}&units=${units}`
      );
      console.log("Forecast Data by Location:", forecastResponse.data);
      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setHasSearched(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userPosition.latitude && userPosition.longitude) {
      fetchDataByLocation();
    }
  }, [userPosition]);

  const handleCitySubmit = (e) => {
    e.preventDefault();
    fetchDataByCity(city);
  };

  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setUserPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        console.error(error);
      }
    );
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleUnitsChange = () => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <>
      <div className='flex flex-row justify-center my-6'>
        <form onSubmit={handleCitySubmit} className='flex flex-row w-3/4 items-center justify-center space-x-4'>
          <input type="text" placeholder="Enter city name . . ."
            value={city} onChange={handleInputChange}
            className='text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize placeholder:lowercase'
          />
          <button type="submit">
            <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
          </button>
        </form>
        <button onClick={handleLocationClick}>
          <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
        </button>
        <div className='flex flex-row w-1/4 items-center justify-center'>
          <button onClick={handleUnitsChange} name='metric' className='text-xl text-white font-light'>{units === 'metric' ? '°C' : '°F'}</button>
          <p className='text-xl text-white mx-1'>|</p>
          <button onClick={handleUnitsChange} name='imperial' className='text-xl text-white font-light'>{units === 'metric' ? '°F' : '°C'}</button>
        </div>
        {hasSearched && weatherData && forecastData && (
          <>
            {/* Display weather and forecast results */}
          </>
        )}
      </div>
      <Results weatherData={weatherData} forecastData={forecastData} hasSearched={hasSearched} units={units} />
      <Forecast forcastData={forecastData} forecastData={forecastData} hasSearched={hasSearched} units={units}/>
    </>
  );
};

Weather.propTypes = {
  units: PropTypes.string,
  setUnits: PropTypes.func,
};

export default Weather;


