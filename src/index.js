import openWeather from './weather';
import giphy from './giphy';
import display from './display';

const domInputs = document.querySelector('#dom-inputs');
const domOutputs = document.querySelector('#dom-outputs');
const submitCallback = (city, units) => {
  display.showLoad(domInputs, domOutputs);
  openWeather.getWeather(city, units).then((weather) => {
    giphy.getImage(weather.keyword).then((image) => {
      display.showResults(domInputs, domOutputs, weather, image);
    });
  }).catch((error) => {
    console.log('failed to get weather');
  });
};
display.showHome(domInputs, domOutputs, submitCallback);
