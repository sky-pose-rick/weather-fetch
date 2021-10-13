function showHome(content, callback) {
  //  erase old content
  content.innerText = '';

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
  //  erase old content
  content.innerText = 'Now Loading...';
}

function showResults(content, source) {
  //  erase old content
  content.innerText = '';
  console.log('image to load: ', source);

  //    display the giphy result
  const img = document.createElement('img');
  content.appendChild(img);
  img.setAttribute('src', source);
}

function showError(content) {
  console.log('error');
}

export default {
  showHome, showLoad, showResults, showError,
};
