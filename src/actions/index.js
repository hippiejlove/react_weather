import axios from 'axios';

const API_KEY = 'e6e1f5e2eeff64f1893797ade7514790';   // Open weather API key
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;// Use template string

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;       // Build final url for request
  const request = axios.get(url);               // build AJAX promise for request to weather API

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
