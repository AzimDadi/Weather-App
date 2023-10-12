import React from "react";

const TodayHighlights = ({ weatherData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-purple-800 sm:flex sm:justify-center flex sm:pl-4 pl-4">
        Today's Highlights
      </h2>
      <div className="flex pt-10">
        <div className="flex flex-col pr-5 ">
          <h1 className="text-xl font-semibold pb-2">Sunrise</h1>
          <p className="pb-8 text-lg">
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
          </p>
          <h1 className="text-xl font-semibold pb-2">Humidity</h1>
          <p className="pb-8 text-lg">{weatherData.main.humidity} %</p>
          <h1 className="text-xl font-semibold pb-2">Visibility</h1>
          <p className="pb-7 text-lg">{weatherData.visibility * 0.001} km</p>
        </div>
        <div className="flex flex-col pl-10">
          <h1 className="text-xl font-semibold pb-2">Sunset</h1>
          <p className="pb-8 text-lg">
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
          </p>
          <h1 className="text-xl font-semibold pb-2">Wind Speed</h1>
          <p className="pb-8 text-lg">
            {weatherData.wind.speed * (3.6).toFixed(0)} km/h
          </p>
          <h1 className="text-xl font-semibold pb-2">Cloudiness</h1>
          <p className="pb-7 text-lg">{weatherData.clouds.all} %</p>
        </div>
      </div>
    </div>
  );
};

export default TodayHighlights;
