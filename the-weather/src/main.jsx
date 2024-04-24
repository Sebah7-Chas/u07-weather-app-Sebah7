import ReactDOM from 'react-dom/client'
import './index.css'
// Removed unused import
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import GetLocation from './components/GetLocation.jsx';
import Weather from './components/WeatherSearch.jsx';
import Header from './components/Header.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Header/>
    ),
    children: [
      { path: "home", element: <Header/>},
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
