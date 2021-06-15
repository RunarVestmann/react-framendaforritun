const API_URL = 'https://apis.is/petrol';

export const getPrices = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.results;
};
