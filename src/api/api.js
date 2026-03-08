import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
});

export const api_key = "eeb77ef7b91953ea7808b1cf52434715";
