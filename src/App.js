/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Card from "./components/Card";
import { api, api_key } from "./api/api";
import "./App.css";
const App = () => {
 
  const [country, setCountry] = useState("Yangon");
  const [data, setData] = useState({});

  const fetchWeather = async (country_name) => {
    console.log(country_name);

    if (country_name !== undefined) {
      setCountry(country_name);
    }
    try {
      const res =await api.get(`/weather?q=${country}&appid=${api_key}`);
      setData(res.data);
    } catch (error) {
      console.log("Error...");
    }
  };
  useEffect(() => {
    fetchWeather();
  },[country]);
  return (
    <div className="w-full min-vh-100 d-flex justify-content-center align-items-center">
      <div className="shadow-lg bg-light">
        <Form fetchWeather={fetchWeather} />
        <Card data={data} />
      </div>
    </div>
  );
};

export default App;
