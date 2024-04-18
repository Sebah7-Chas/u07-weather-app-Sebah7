import { Link, Outlet  } from "react-router-dom";
import HeaderIMG from "../assets/header2.png"
import Weather from "./WeatherM";
// import { useState } from "react";
// import Weather from "./WeatherM";

const Head = () => {

  return <> 
  <img src={HeaderIMG} alt="header"></img>

</>
}

const Nav = () => { 
  return (
    <nav>
    <div>
      <Link to="/">Home</Link> {" "} | {" "}
      <Link to="getlocation">Pin</Link> {" "} | {" "}
      <Link to="mylocation">Saved Locations</Link>
    </div>
    </nav>
  );
}

const Header = () => {
 return (
  <>
  <Head />
  <Nav/>
  <Weather />
  <Outlet />
  </>
 );
};

export default Header;