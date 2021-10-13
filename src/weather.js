//  never publish API keys for paid services
const apiKeyWeather = '8d838cab2623bf0e4ccf3c4d32eab7bb';

//  parse open weather json for relevant data
function processWeather(response) {
  const city = response.name;
  const { country } = response.sys;
  const { temp } = response.main;
  const weather = response.weather[0].main;
  const keyword = weather;
  //  console.log(response);
  console.log('Location: ', city);
  console.log('Country: ', country);
  console.log('Temperature: ', temp);
  console.log('Weather: ', weather);
  //    getImage(response.weather[0].main);
  return {
    city, country, temp, weather, keyword,
  };
}

//  send open weather api request
async function requestWeather(location, units) {
  const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=${apiKeyWeather}`, {
    mode: 'cors',
  }).then((response) => response.json()).then((response) => response);
  return result;
}

//  send a request then process the result
async function getWeather(location, units) {
  const response = await requestWeather(location, units);
  return processWeather(response);
}

export default { getWeather };
