const API_URL = 'https://apis.is/tv/ruv';
const container = document.getElementById('container');

const getData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};

getData().then((data) => {
    container.innerHTML = data.results.map((show) => `<p>${show.title}    ${show.startTime}</p>`).join('');
});
