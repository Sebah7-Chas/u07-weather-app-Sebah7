import Header from './Header'
import Weather from '../components/search/WeatherSearch'
import Results from '../components/result/SearchResults'
import Forcast from '../components/result/ForcastResults'
import { Outlet } from 'react-router-dom'
import Blue from "../assets/blue.png";


function HomePage() {
  return (
    <>
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32
bg-cover bg-no-repeat bg-center
" style={{backgroundImage: `url(${Blue})`}}>
    <Header />
    <Weather />
    <Results />
    <Forcast/>
    <Outlet />
    </div>
    </>
  )
}

export default HomePage