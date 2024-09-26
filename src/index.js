const searchEl = document.querySelector('.js-search');
const listEl = document.querySelector('.js-list');

searchEl.addEventListener('submit', onSearchClick);

function onSearchClick(evt) {
  evt.preventDefault();

  const { query, days } = evt.currentTarget.elements;

  getWeather(query.value, days.value)
    .then(data => (listEl.innerHTML = createMarkup(data.forecast.forecastday)))
    .catch(err => console.log(err));
}

function getWeather(city, days) {
  const BASR_URL = 'http://api.weatherapi.com/v1';
  const API_KEY = 'a9b2b5b585064de1aab74606242609';

  return fetch(
    `${BASR_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `<li class="item">
        <img src="${icon}" alt="${text}" />
        <p class="text">${text}</p>
        <h2>${date}</h2>
        <h3>${avgtemp_c} C</h3>
      </li>`
    )
    .join('');
}
