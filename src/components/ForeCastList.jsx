import React from "react";
import ForecastCard from "./ForeCastCard";
import { groupByDate } from "../helper/groupByDate";
import { calculateDailySummary } from "../helper/calculateDailySummary";
const ForecastList = ({ forecast, unit }) => {
  if (!forecast) return null;


  const  data  =  calculateDailySummary(groupByDate(forecast))


  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {data.map((day) => (
        <ForecastCard key={day} day={day} unit={unit} />
      ))}
    </div>
  );
};

export default ForecastList;
