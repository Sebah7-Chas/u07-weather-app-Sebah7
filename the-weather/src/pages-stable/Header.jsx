import { Link, Outlet  } from "react-router-dom";

const Nav = () => { 
  return (
    <nav>
    <div className='flex items-center justify-around my-6'>
      <Link className='text-white text-lg font-meduim' to="/">Home</Link> {" "}  {" "}
      <Link className='text-white text-lg font-meduim' to="mylocation">Saved Locations</Link>
    </div>
    </nav>
  );
}

const Header = () => {
 return (
<>
<Nav/>
<Outlet />
</>
);
};

export default Header;