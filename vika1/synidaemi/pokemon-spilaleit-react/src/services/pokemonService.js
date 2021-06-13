const API_URL = 'https://api.pokemontcg.io/v1/cards?name=';

export const getCards = async (name) => {
    const response = await fetch(API_URL + name);
    const data = await response.json();
    return data.cards;
};
