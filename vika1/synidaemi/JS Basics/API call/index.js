const API_URL = 'https://apis.is/tv/ruv';
const container = document.getElementById('container');

const getData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.results;
};

getData().then((data) => (container.innerHTML = data.map((show) => `<p>${show.title}</p>`).join('')));
