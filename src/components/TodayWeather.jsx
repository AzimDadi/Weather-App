import React from "react";

const TodayWeather = ({ weatherData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold  text-purple-800 flex justify-center">
        Today's Weather
      </h2>
      <div className="flex flex-row pt-5   ">
        <div className="flex flex-col justify-center  ">
          <img
            src={`https://api.openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="img"
            className="object-cover h-20 w-20 sm:h-24 sm:w-20 rounded-md mb-28"
          />
        </div>
        <div className="flex flex-col p-10 ">
          <p className="text-4xl font-semibold pb-2 -mt-4">
            {weatherData.main.temp.toFixed(0)}&#8451;
          </p>
          <p className="text-lg ">
            Feels Like: {weatherData.main.feels_like.toFixed(0)}&#8451;
          </p>
          <p className="text-lg pb-4 border-b-[1px] border-black capitalize">
            Description: {weatherData.weather[0].description}
          </p>
          <p className="text-lg pt-4 pb-2">
            Date:
            {new Date().toLocaleDateString(undefined, {
              weekday: "long",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>

          <p className="text-lg pt-2 pb-2">
            Time:{new Date().toLocaleTimeString()}
          </p>
          <p className="text-lg pt-2 pb-8">
            Location: {weatherData.name}, {weatherData.sys.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodayWeather;
