import { useState } from "react";
import { UserLocation } from "./StoreLocation";

const Geolocation = () => {
  const userPosition = UserLocation((state) => state.userLocation);
  const setUserPosition = UserLocation(
    (state) => state.updateUserLocation
  );

  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser!");
    } else {
      setStatus("Loading");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus("");
          setUserPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <>
      <button onClick={() => getLocation()}>Get location</button>
      <h2>Coordinates</h2>
      {status && <p>{status}</p>}
      {userPosition?.latitude && <p>Latitude: {userPosition?.latitude}</p>}
      {userPosition?.longitude && <p>Longitude: {userPosition?.longitude}</p>}
    </>
  );
};

export default Geolocation;
