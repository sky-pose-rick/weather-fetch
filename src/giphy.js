//  never publish API keys for paid services
const apiKeyImage = 'ieAImKLCMr3MRyKct42s8BMVBEdSgL0A';

//  parse giphy json for relevant data
function processImage(json) {
  return json.data.images.original.url;
}

//  send giphy api request
//  send open weather api request
async function requestImage(term) {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKeyImage}&s=${term}`, {
    mode: 'cors',
  });
  return response.json();
}

//  send a request then process the result
async function getImage(term) {
  const json = await requestImage(term);
  return processImage(json);
}

export default { getImage };
