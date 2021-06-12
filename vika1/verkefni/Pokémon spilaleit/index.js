const API_URL = 'https://api.pokemontcg.io/v1/cards?name=';
const searchInput = document.getElementById('search-input');
const container = document.getElementById('container');

const getData = async () => {
    const response = await fetch(API_URL + searchInput.value);
    const data = await response.json();
    return data;
};

const search = async () => {
    const data = await getData();
    const cards = data.cards;
    container.innerHTML = cards.map((card) => `<img class="card" src="${card.imageUrl}"></img>`).join('');
};
