import openWeather from './weather';
import giphy from './giphy';
import display from './display';

const content = document.querySelector('#content');
const submitCallback = (city, units) => openWeather.getWeather(city, units).then((weather) => giphy.getImage(weather.keyword));
display.showHome(content, submitCallback);
