import openWeather from './weather';
import giphy from './giphy';
import display from './display';

const domInputs = document.querySelector('#dom-inputs');
const domOutputs = document.querySelector('#dom-outputs');
const submitCallback = (city, units) => {
  display.showLoad(domInputs, domOutputs);
  openWeather.getWeather(city, units).then((weather) => {
    console.log(weather);
    const imgPromise = giphy.getImage(weather.keyword);
    display.showResults(domInputs, domOutputs, weather, imgPromise);
  }, (error) => {
    display.showError(domInputs, domOutputs);
  });
};
display.showHome(domInputs, domOutputs, submitCallback);
