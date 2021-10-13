import weather from './weather';

//  never publish API keys for paid services
const apiKeyImage = 'ieAImKLCMr3MRyKct42s8BMVBEdSgL0A';

//  parse giphy json for relevant data
function processImage(response) {
  console.log(response.data.images.original);
}

//  send giphy api request
function getImage(term) {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKeyImage}&s=${term}`, {
    mode: 'cors',
  }).then((response) => response.json()).then((response) => {
    processImage(response);
  });
  console.log('request sent');
}

const button = document.querySelector('#test-button');
button.addEventListener('click', () => {
  weather.getWeather('Toronto', 'metric');
});
