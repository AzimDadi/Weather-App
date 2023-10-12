import React, { useEffect, useState } from "react";
import Img from "../../public/img/1.jpg";
import TodayWeather from "./TodayWeather";
import TodayHighlights from "./TodayHighlights";
import axios from "axios";

const Home = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        const data = response.data;
        setLocation(data.city);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchLocation();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
      );
      const data = response.data;
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching Weather data:", error);
      alert("Location Not Found");
    }
    setLocation("");
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-blue-900 font-bold text-4xl pt-10 pb-7">
        Weather App
      </h1>
      <div>
        <form className="pb-8">
          <input
            onChange={(event) => setLocation(event.target.value)}
            type="text"
            value={location}
            placeholder="Enter Location"
            className="border rounded-l-md p-3 text-base border-gray-500 focus:outline-blue-500 capitalize"
          />

          <button
            onClick={handleSearch}
            className="border rounded-r-md sm:p-3 sm:w-36 p-3 w-24 border-blue-500 bg-blue-500 text-white font-medium text-base"
          >
            Search
          </button>
        </form>
      </div>

      {/* //Weather and Highlights */}
      {weatherData && (
        <>
          <span className="text-2xl font-semibold text-purple-800">
            Location: {weatherData.name}
          </span>
          <div className="flex flex-col sm:flex-row    ">
            <span className="m-8 pl-2 pt-4 sm:pl-10 sm:pt-10  rounded-lg border-purple-800 border ">
              <TodayWeather weatherData={weatherData} />
            </span>
            <span className="m-8 pl-11 pt-4 sm:ml-10 sm:p-10  rounded-lg border border-purple-800">
              <TodayHighlights weatherData={weatherData} />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
