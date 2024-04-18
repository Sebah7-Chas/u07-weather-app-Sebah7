
import './App.css'
// import GetForcast from './components/GetForcast'
import GetLocation from './components/GetLocation'
import Header from './components/Header';
import Weather from './components/WeatherM';

const App = () => {
  return (
    <div>
      {/* <GetForcast /> */}
      <GetLocation />
      <Weather />
      <Header />
    </div>
  );
};

export default App
