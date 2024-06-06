import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";

const getWeatherIcon = (weather) => {
  switch (weather) {
    case "Clear":
      return <WiDaySunny className="text-4xl" />;
    case "Clouds":
      return <WiCloud className="text-4xl" />;
    case "Rain":
      return <WiRain className="text-4xl" />;
    case "Snow":
      return <WiSnow className="text-4xl" />;
    default:
      return <WiDaySunny className="text-4xl" />;
  }
};

const ForecastCard = ({ day, unit }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
      <h3 className="text-lg font-bold">{day?.dayName}</h3>
      {getWeatherIcon(day?.weather)}
      <p>{day?.tempMax}° </p>
      <p className="capitalize">{day?.weatherDescription}</p>
    </div>
  );
};

export default ForecastCard;
