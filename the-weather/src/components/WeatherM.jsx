import { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState(''); // Documentation: State city to store city name and send to the API.
  const [weatherData, setWeatherData] = useState(null); // Documentation: A state variable to store the weather data fetched from the API.

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a75e1e279514fb634c1e3e7bdbc51870`
      );
      setWeatherData(response.data); // Documentation: Here, a promise is returned by axios.get(), and await is used to wait for the promise to resolve. The response is stored in the response variable. The weather data is then set in the weatherData state using setWeatherData(response.data).
      console.log(response.data); //You can see all the weather data in console log. // Documentation: Here we can see all the weather data in console log.
    } catch (error) {
      console.error(error);
    }
  }; // Documentation: Fetch data from the API using the city name and set the weather data in the weatherData state.

  useEffect(() => {
    fetchData();
  }, []); // Documentation: this is a hook used to call the fetchData function. It is empty array beacuse it is called when this component is mounted.

  const handleInputChange = (e) => {
    setCity(e.target.value);
  }; // Documentation: Used to update the city state once the value is changed.

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }; // Documentation: Used to prevent the default form submission and call the fetchData function.

  return (
    <div>
      {/* Documentation: The form with input field to enter the city name. The value of the input field is set to the city state and the onChange event is used to update the city state. 
      The button is used to submit the form and call the handleSubmit function.*/}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {/* // Documentation: The weather data is displayed when available.
       If the weatherData is null then message "No city chosen yet..." */}
      {weatherData ? (
        <div id="childcomponent">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels like : {weatherData.main.feels_like}°C</p>
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>Pressure : {weatherData.main.pressure}</p>
          <p>Wind Speed : {weatherData.wind.speed}m/s</p>
        </div>
      ) : (
        <p>No city chosen yet...</p>
      )}
    </div>    
  );
};

export default Weather;