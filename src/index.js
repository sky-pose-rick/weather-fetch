import openWeather from './weather';
import giphy from './giphy';
import display from './display';

const domInputs = document.querySelector('#dom-inputs');
const domOutputs = document.querySelector('#dom-outputs');

//  add some extra load time
const insertDelay = (length) => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, length);
  });

  return myPromise;
};

const submitCallback = (city, units) => {
  display.showLoad(domInputs, domOutputs);
  openWeather.getWeather(city, units).then((weather) => {
    const weatherDelay = insertDelay(2000);
    weatherDelay.then((response) => {
      console.log(weather);
      const imgPromise = giphy.getImage(weather.keyword);
      display.showResults(domInputs, domOutputs, weather, imgPromise);
    });
  }, (error) => {
    display.showError(domInputs, domOutputs);
  });
};
display.showHome(domInputs, domOutputs, submitCallback);
