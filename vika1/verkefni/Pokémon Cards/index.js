const API_URL = 'https://api.pokemontcg.io/v1/cards?name=';
const searchText = document.getElementById('search-text');
const container = document.getElementById('container');

const getCards = async () => {
    const response = await fetch(API_URL + searchText.value);
    const data = await response.json();
    return data.cards;
};

const search = async () => {
    const cards = await getCards();
    container.innerHTML = cards.map((card) => `<img class="card" src="${card.imageUrl}"></img>`).join('');
};
