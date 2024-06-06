import { useState } from "react";
import axios from "axios";

const useFetchForecast = () => {
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const fetchForecast = async (lat, lon, unit) => {
    try {
      const API_KEY = "d96fbc08bde7396bb8edcbceb063129b";

      const response = await axios.get(
        // `https://api.openweathermap.org/data/2.5/weather?q=${'rewa'}&appid=${'d96fbc08bde7396bb8edcbceb063129b'}&units=metric`
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
      );
      setForecastData(response?.data?.list);

      return;
    } catch (err) {
      setError("Unable to fetch forecast data");
    } finally {
      setLoading(false);
    }
  };

  return { forecastData, error, loading, fetchForecast };
};

export default useFetchForecast;
