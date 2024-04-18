import ReactDOM from 'react-dom/client'
import './index.css'
// Removed unused import
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import App from './App';
import GetLocation from './components/GetLocation.jsx';
import Weather from './components/WeatherM.jsx';
import Header from './components/Header.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Header/>
    ),
    children: [
      { path: "/", element: <App />},
      { path: "home", element: <App />},
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
