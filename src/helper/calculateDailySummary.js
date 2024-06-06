import moment from "moment";
export function calculateDailySummary(groupedData) {
  return Object.keys(groupedData)
    .map((date) => {
      const dayData = groupedData[date];
      const tempSum = dayData.reduce((sum, curr) => sum + curr.main.temp, 0);
      const tempMin = Math.min(...dayData.map((curr) => curr.main.temp_min));
      const tempMax = Math.max(...dayData.map((curr) => curr.main.temp_max));
      const humiditySum = dayData.reduce(
        (sum, curr) => sum + curr.main.humidity,
        0
      );

      return {
        date,
        avgTemp: tempSum / dayData.length,
        tempMin,
        tempMax,
        avgHumidity: humiditySum / dayData.length,
        dayName: moment(date).format("dddd"),
        weatherDescription: dayData[0].weather[0].description,
        weather: dayData[0].weather[0].main,

        windSpeed: dayData[0].wind.speed,
        visibility: dayData[0].visibility,
      };
    })
    .slice(0, 7);
}
