import countryCodeEmoji from 'country-code-emoji';

function showHome(domInputs, domOutputs, callback) {
  //  erase old content
  domInputs.innerText = '';

  //  form
  const form = document.createElement('form');
  domInputs.appendChild(form);
  //    city input
  const cityLabel = document.createElement('label');
  form.appendChild(cityLabel);
  cityLabel.innerText = 'City: ';
  const cityInput = document.createElement('input');
  cityLabel.appendChild(cityInput);
  cityInput.setAttribute('name', 'city');
  cityInput.toggleAttribute('required');

  //  unit wrapper
  const unitWrapper = document.createElement('div');
  form.appendChild(unitWrapper);
  unitWrapper.className = 'unit-wrapper';

  //    unit input description
  const unitLabelDesc = document.createElement('label');
  unitWrapper.appendChild(unitLabelDesc);
  unitLabelDesc.innerText = 'Units: ';

  const createRadio = (label, value, group, checked) => {
    const unitLabel = document.createElement('label');
    unitWrapper.appendChild(unitLabel);
    unitLabel.innerText = label;
    unitLabel.style.setProperty('grid-column', '2/3');
    unitLabel.className = 'radio-label';

    const unitInput = document.createElement('input');
    unitLabel.appendChild(unitInput);
    unitInput.setAttribute('type', 'radio');
    unitInput.setAttribute('name', group);
    unitInput.value = value;
    if (checked) { unitInput.toggleAttribute('checked'); }
    return [unitLabel, unitInput];
  };

  const [unitLabelC, unitInputC] = createRadio('Celcius', 'metric', 'units', true);
  const [unitLabelF, unitInputF] = createRadio('Farenheit', 'imperial', 'units', false);

  //    submit
  const submitButton = document.createElement('input');
  form.appendChild(submitButton);
  submitButton.setAttribute('type', 'submit');
  submitButton.value = 'Submit';

  submitButton.addEventListener('click', (event) => {
    if (!cityInput.validity.valid) return false;

    event.preventDefault();
    const data = new FormData(form);
    callback(data.get('city'), data.get('units'));
  });
}

function showLoad(domInputs, domOutputs) {
  //  erase old content
  domOutputs.innerText = '';

  const loadingMessage = document.createElement('div');
  domOutputs.appendChild(loadingMessage);
  loadingMessage.className = 'error-box';
  loadingMessage.innerText = 'Now Loading...';
}

function showResults(domInputs, domOutputs, weather, sourcePromise) {
  //  erase old content
  domOutputs.innerText = '';

  //  display the weather
  const emoji = countryCodeEmoji(weather.country);
  const city = document.createElement('div');
  domOutputs.appendChild(city);
  city.innerText = `${weather.city} ${emoji}`;

  const temp = document.createElement('div');
  domOutputs.appendChild(temp);
  temp.innerText = weather.temp;

  const conditions = document.createElement('div');
  domOutputs.appendChild(conditions);
  conditions.innerText = weather.weather;

  //    display the giphy result
  sourcePromise.then((source) => {
    console.log('image to load: ', source);
    const img = document.createElement('img');
    domOutputs.appendChild(img);
    img.setAttribute('src', source);
    img.setAttribute('alt', `Image of ${weather.weather}`);
  });
}

function showError(domInputs, domOutputs, searchTerm) {
  //  erase old content
  domOutputs.innerText = '';

  const errorMessage = document.createElement('div');
  domOutputs.appendChild(errorMessage);
  errorMessage.className = 'error-box';
  errorMessage.innerText = 'Failed to find results. Please check your inputs and try again';
}

export default {
  showHome, showLoad, showResults, showError,
};
