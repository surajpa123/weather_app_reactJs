import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";
import ReactAnimatedWeather from "react-animated-weather";
import { motion } from "framer-motion";

const getWeatherIcon = (weather) => {
  const iconSize = 25;
  let iconType;
  let iconColor;

  switch (weather) {
    case "Clear":
      iconType = "CLEAR_DAY";
      iconColor = "#f39c12";
      break;
    case "Clouds":
      iconType = "CLOUDY";
      iconColor = "#95a5a6";
      break;
    case "Rain":
      iconType = "RAIN";
      iconColor = "#3498db";
      break;
    case "Snow":
      iconType = "SNOW";
      iconColor = "#ecf0f1";
      break;
    case "Fog":
      iconType = "FOG";
      iconColor = "#7f8c8d";
      break;
    case "PartlyCloudy":
      iconType = "PARTLY_CLOUDY_DAY";
      iconColor = "#f1c40f";
      break;
    case "Wind":
      iconType = "WIND";
      iconColor = "#34495e";
      break;
    default:
      iconType = "CLEAR_DAY";
      iconColor = "#f39c12";
      break;
  }

  return (
    <ReactAnimatedWeather
      icon={iconType}
      size={iconSize}
      color={iconColor}
      animate={true}
    />
  );
};

const ForecastCard = ({ day, unit }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
        <h3 className="text-lg font-bold">{day?.dayName}</h3>
        <span className="p-2">{getWeatherIcon(day?.weather)}</span>
        <p>{day?.tempMax}° </p>
        <p className="capitalize">{day?.weatherDescription}</p>
      </div>
    </motion.div>
  );
};

export default ForecastCard;
