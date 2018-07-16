const url2 = `https://api.coinmarketcap.com/v2/ticker/`;

export default function getCurrency() {
  return fetch(url2)
    .then(res => res.json())
    .then(json => json.data);
}

