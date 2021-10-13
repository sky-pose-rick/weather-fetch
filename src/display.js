function showHome(content, callback) {
  //  form
  const form = document.createElement('form');
  content.appendChild(form);
  //    city input
  const cityLabel = document.createElement('label');
  form.appendChild(cityLabel);
  cityLabel.innerText = 'City';
  const cityInput = document.createElement('input');
  cityLabel.appendChild(cityInput);
  cityInput.setAttribute('name', 'city');
  cityInput.toggleAttribute('required');
  //    unit input wrapper
  const unitLabelWrapper = document.createElement('label');
  form.appendChild(unitLabelWrapper);
  unitLabelWrapper.innerText = 'Units';

  const createRadio = (label, value, group, checked) => {
    const unitLabel = document.createElement('label');
    unitLabelWrapper.appendChild(unitLabel);
    unitLabel.innerText = label;
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

function showLoad(content) {
  console.log('loading');
}

function showResults(content) {
  console.log('loading');
}

function showError(content) {
  console.log('error');
}

export default {
  showHome, showLoad, showResults, showError,
};
