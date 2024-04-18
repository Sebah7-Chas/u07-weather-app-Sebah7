import ReactDOM from 'react-dom/client'
import './index.css'
// Removed unused import
import { Link, Outlet, RouterProvider, createBrowserRouter, } from 'react-router-dom';
import App from './App';
import GetLocation from './components/GetLocation.jsx';
import Weather from './components/WeatherM.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div>
          <h1>The Weathering Weather!</h1>
          <Link to="home">Home</Link>|{" "}
          <Link to="getlocation">Getlocation</Link>|{" "}
          <Link to="weather">Search weather</Link>|{" "}
        </div>
        <Outlet></Outlet>
      </>
    ),
    children: [
      { path: "/", element: <App></App>},
      { path: "home", element: <App></App>},
      { path: "getlocation", 
      element: <GetLocation></GetLocation>},
      { path: "weather",
    element: <Weather></Weather>}
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
