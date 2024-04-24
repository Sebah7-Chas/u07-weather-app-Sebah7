import { Link, Outlet  } from "react-router-dom";
import Weather from "./WeatherSearch";
import SkyBlue from "../assets/skyblue.png";

const Nav = () => { 
  return (
    <nav>
    <div className='flex items-center justify-around my-6'>
      <Link className='text-white text-lg font-meduim' to="/">Home</Link> {" "} | {" "}
      <Link className='text-white text-lg font-meduim' to="getlocation">Pin</Link> {" "} | {" "}
      <Link className='text-white text-lg font-meduim' to="mylocation">Saved Locations</Link>
    </div>
    </nav>
  );
}

const Header = () => {
 return (
<div className="mx-auto max-w-screen-md mt-4 py-5 px-32
bg-cover bg-no-repeat bg-center
" style={{backgroundImage: `url(${SkyBlue})`}}>
<Nav/>
<Weather />
<Outlet />
</div>
);
};

export default Header;