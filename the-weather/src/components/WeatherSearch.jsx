import { useEffect, useState } from 'react';
import axios from 'axios';
import { UilSearch, UilLocationPoint} from '@iconscout/react-unicons'
import Results from './SearchResults';
import { Link } from 'react-router-dom';


const Weather = () => {
  const [city, setCity] = useState(''); // Documentation: State city to store city name and send to the API.
  const [weatherData, setWeatherData] = useState(null); // Documentation: A state variable to store the weather data fetched from the API.
  const appId = import.meta.env.VITE_APP_ID; // Documentation: The API Id is stored in the .env file and accessed using import.meta.env.  
  const [hasSearched, setHasSearched] = useState(false);

  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appId}`
      );
      setWeatherData(response.data); // Documentation: Here, a promise is returned by axios.get(), and await is used to wait for the promise to resolve. The response is stored in the response variable. The weather data is then set in the weatherData state using setWeatherData(response.data).
      console.log(response.data); // Documentation: Here we can see all the weather data in console log.
    } catch (error) {
      console.error(error);
    }
  }; // Documentation: Fetch data from the API using the city name and set the weather data in the weatherData state.

  useEffect(() => {
    if (city) {
      fetchData();
      setHasSearched(true);
    }
  }, []); // Documentation: this is a hook used to call the fetchData function. It is empty array beacuse it is called when this component is mounted.


  const handleInputChange = (e) => {
    setCity(e.target.value);
  }; // Documentation: Used to update the city state once the value is changed.

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }; // Documentation: Used to prevent the default form submission and call the fetchData function.

  return (
    <>
   
   <div className='flex flex-row justify-center my-6'>
      {/* Documentation: The form with input field to enter the city name. The value of the input field is set to the city state and the onChange event is used to update the city state. 
      The button is used to submit the form and call the handleSubmit function.*/}
      <form onSubmit={handleSubmit} className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input type="text" placeholder="Enter city name . . ."
          value={city} onChange={handleInputChange}
          className='text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize placeholder:lowercase'
       />

      <button type="submit">
        <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
      </button>

      <Link to="getlocation"> 
      <button>
      <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
            {/* className='text-white text-lg font-meduim' >Pin</Link> {" "} | {" "} */}
      </button>
      </Link>

      </form>

      <div className='flex flex-row w-1/4 items-center justify-center'>  
      <button name='metric' className='text-xl text-white font-light'
      >°C</button>
      <p className='text-xl text-white mx-1'>|</p>
      <button name='imperial' className='text-xl text-white font-light'
      >°F</button>
      </div>
    
    </div> 

<Results weatherData={weatherData} hasSearched={hasSearched} />

</>
    
  );
};

export default Weather;