import React from "react";
import { motion } from "framer-motion";
import { WiHumidity, WiStrongWind } from "react-icons/wi";

import ReactAnimatedWeather from "react-animated-weather";

const WeatherCard = ({ data }) => {
  if (!data) return null;

  const { name, main, weather, wind } = data;
  const { temp, humidity } = main;
  const description = weather[0]?.description;

  

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white rounded-lg shadow-md flex gap-12 justify-around"
    >
      <div>
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-xl mb-2">{temp}°</p>
      </div>

      <div>
        <p className="capitalize mb-2">{description}</p>
        <div className="flex items-center mb-2 gap-2">
        <ReactAnimatedWeather icon="WIND" size="20"/>
        <p>{wind?.speed} m/s </p>
        </div>
        <div className="flex items-center gap-2">
          <ReactAnimatedWeather icon="RAIN" size="20" />

          <p>Humidity {humidity}%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
