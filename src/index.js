import openWeather from './weather';
import giphy from './giphy';

const button = document.querySelector('#test-button');
button.addEventListener('click', () => {
  openWeather.getWeather('Toronto', 'metric').then((weather) => giphy.getImage(weather.keyword));
});
