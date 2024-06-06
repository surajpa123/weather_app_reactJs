import { useState } from "react";
import axios from "axios";

const useFetchWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherByLocation = async (location, unit) => {
    setLoading(true);
    try {
      const API_KEY = "d96fbc08bde7396bb8edcbceb063129b";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError("Location not found or an error occurred");
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoordinates = async (lat, lon, unit) => {
    setLoading(true);
    try {
      const API_KEY = "d96fbc08bde7396bb8edcbceb063129b";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError("Unable to fetch weather data for your location");
    } finally {
      setLoading(false);
    }
  };

  return {
    weatherData,
    error,
    loading,
    fetchWeatherByLocation,
    fetchWeatherByCoordinates,
  };
};

export default useFetchWeather;
