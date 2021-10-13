// test that webpack works
console.log('webpack compiled to main.js');

//  never publish API keys for paid services
const apiKeyWeather = '8d838cab2623bf0e4ccf3c4d32eab7bb';
const apiKeyImage = 'ieAImKLCMr3MRyKct42s8BMVBEdSgL0A';

function processImage(response) {
  console.log(response.data.images.original);
}

function getImage(term) {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKeyImage}&s=${term}`, {
    mode: 'cors',
  }).then((response) => response.json()).then((response) => {
    processImage(response);
  });
  console.log('request sent');
}

function processWeather(response) {
  console.log(response);
  console.log('Location: ', response.name);
  console.log('Country: ', response.sys.country);
  console.log('Temperature: ', response.main.temp);
  console.log('Weather: ', response.weather[0].main);
  getImage(response.weather[0].main);
}

function getWeather(location, units) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=${apiKeyWeather}`, {
    mode: 'cors',
  }).then((response) => response.json()).then((response) => {
    processWeather(response);
  });
  console.log('request sent');
}

const button = document.querySelector('#test-button');
button.addEventListener('click', () => {
  getWeather('Toronto', 'metric');
});
