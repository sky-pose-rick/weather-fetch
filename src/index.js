import openWeather from './weather';
import giphy from './giphy';
import display from './display';

const content = document.querySelector('#content');
const submitCallback = (city, units) => {
  display.showLoad(content);
  openWeather.getWeather(city, units).then((weather) => {
    giphy.getImage(weather.keyword).then((image) => {
      display.showResults(content, image);
    });
  });
};
display.showHome(content, submitCallback);
