import '../styles/main.scss';
import 'babel-polyfill';
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

const cardsContainer = document.querySelector('.cards');
const genre = document.querySelector('.sort').innerHTML;

console.log(genre);

async function fetchData() {
  await fetch(`http://localhost:3000/api?genre=${genre}`, { method: 'GET', mode: 'cors' })
    .then((resp) => resp.json())
    .then((data) => {
      Object.keys(data).forEach((key) => {
        const newCard = document.createElement('div');
        newCard.className = 'card';
        const image = document.createElement('img');
        image.src = data[key].image;
        newCard.append(image);
        const title = document.createElement('h2');
        title.innerHTML = data[key].name;
        newCard.append(title);
        const genre = document.createElement('p');
        genre.innerHTML = data[key].genre;
        newCard.append(genre);

        cardsContainer.append(newCard);
      });
    });
}

fetchData();
