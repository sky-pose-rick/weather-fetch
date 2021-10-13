//  never publish API keys for paid services
const apiKeyWeather = '8d838cab2623bf0e4ccf3c4d32eab7bb';

//  parse open weather json for relevant data
function processWeather(response) {
  console.log(response);
  console.log('Location: ', response.name);
  console.log('Country: ', response.sys.country);
  console.log('Temperature: ', response.main.temp);
  console.log('Weather: ', response.weather[0].main);
  //    getImage(response.weather[0].main);
}

//  send open weather api request
function getWeather(location, units) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=${apiKeyWeather}`, {
    mode: 'cors',
  }).then((response) => response.json()).then((response) => {
    processWeather(response);
  });
  console.log('weather request sent');
}

export default { getWeather };
