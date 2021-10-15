//  never publish API keys for paid services
const apiKeyImage = 'ieAImKLCMr3MRyKct42s8BMVBEdSgL0A';

//  parse giphy json for relevant data
function processImage(response) {
  return response.data.images.original.url;
}

//  send giphy api request
//  send open weather api request
async function requestImage(term) {
  const result = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKeyImage}&s=${term}`, {
    mode: 'cors',
  }).then((response) => response.json()).then((response) => response);
  return result;
}

//  send a request then process the result
async function getImage(term) {
  const response = await requestImage(term);
  return requestImage(response);
}

export default { getImage };
