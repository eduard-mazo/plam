import config from "./config";
const API_KEY = config.apiKey;

const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:name&api_key=${API_KEY}&format=json`;

export default function getArtist(name) {
   const URL = url.replace(':name',name)
   console.log(URL);
  
  return fetch(URL)
    .then(res => res.json())
    .then(json => json.topartists.artist);
}

