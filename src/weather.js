//  never publish API keys for paid services
const apiKeyWeather = '8d838cab2623bf0e4ccf3c4d32eab7bb';

//  parse open weather json for relevant data
function processWeather(json) {
  if (json.cod === '404') { throw new Error('City not found'); }
  const city = json.name;
  const { country } = json.sys;
  const { temp } = json.main;
  const weather = json.weather[0].main;
  const keyword = weather;

  return {
    city, country, temp, weather, keyword,
  };
}

//  send open weather api request
async function requestWeather(location, units) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=${apiKeyWeather}`, {
    mode: 'cors',
  });
  return response.json();
}

//  send a request then process the result
async function getWeather(location, units) {
  const json = await requestWeather(location, units);
  return processWeather(json);
}

export default { getWeather };
