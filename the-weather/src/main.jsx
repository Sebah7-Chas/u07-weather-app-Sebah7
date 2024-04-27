import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import GetLocation from './components/GetLocation';
import Weather from './components/search/WeatherSearch';
import HomePage from './pages-stable/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage/>
    ),
    children: [
      { path: "home", element: <HomePage />},
      { path: "getlocation", 
      element: <GetLocation />},
      { path: "weather",
      element: <Weather />}
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
