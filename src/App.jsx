import { useEffect, useState } from "react";
import "./App.css";
import useFetchWeather from "./hooks/useFetchWeather";
import SearchBar from "./components/SearchBar";
import Error from "./components/Error";
import WeatherCard from "./components/WeatherCard";
import { toast } from "react-toastify";
import Loader from "./components/Loader";
import useFetchForecast from "./hooks/useFetchForecast";
import ForecastList from "./components/ForeCastList";
import { FaSun } from "react-icons/fa6";


function App() {
  const [location, setLocation] = useState("");
  const [unit, setUnit] = useState("metric");
  const [searchByGeoLocation, setSearchByGeoLocation] = useState(false);

  const {
    weatherData,
    error: weatherError,
    loading: weatherLoading,
    fetchWeatherByLocation,
    fetchWeatherByCoordinates,
  } = useFetchWeather();

  const {
    forecastData,
    loading: weatherForecastLoading,
    error: forecastError,
    fetchForecast,
  } = useFetchForecast();

  useEffect(() => {
    if (weatherData) {
      const { coord } = weatherData;
      if (weatherData?.name) {
        setLocation(weatherData?.name);
      }
      fetchForecast(coord.lat, coord.lon, unit);
    }
  }, [weatherData, unit]);

  useEffect(() => {
    if (weatherData) {
      fetchWeatherByLocation(location, unit);
    }
  }, [unit]);

  const handleSearch = (loc) => {
    setLocation(loc);
    fetchWeatherByLocation(loc, unit);
  };

  const handleGeolocation = () => {
    setSearchByGeoLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoordinates(latitude, longitude, unit);
        },
        () => {
          toast.warning(
            "Geolocation is not supported by this browser or permission denied."
          );
        }
      );
    } else {
      toast.warning("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <div className="min-h-screen main-cont bg-blue-100 flex flex-col items-center justify-center sm:p-4 p-0">
        <div className="sticky top-0 text-center w-full sm:w-fit backdrop-blur-lg sm:p-0 p-4" >
        <h1 className="text-4xl text-center font-bold mb-4 flex gap-4 items-center p-4 justify-center">
          <FaSun className="h-8 w-8" color="#F05514"/>
          <span style={{ letterSpacing: "1px" }}>
            Weather<span className="text-[#F05514]">App</span>
          </span>
        </h1>
        <SearchBar
          onSearch={handleSearch}
          unit={unit}
          setUnit={setUnit}
          location={location}
          onGeolocation={handleGeolocation}
          searchByGeoLocation={searchByGeoLocation}
          setSearchByGeoLocation={setSearchByGeoLocation}
        />

        </div>
      
      

        {weatherLoading ? (
          <Loader />
        ) : weatherError ? (
          <Error message={weatherError} />
        ) : (
          <WeatherCard data={weatherData} />
        )}

        {weatherForecastLoading ? (
          <Loader />
        ) : forecastError ? (
          <Error message={forecastError} />
        ) : (
          <ForecastList forecast={forecastData} unit={unit} />
        )}
      </div>
    </>
  );
}

export default App;
