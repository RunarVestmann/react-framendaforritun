const API_URL = 'https://apis.is/tv/ruv';
const container = document.getElementById('container');

const getData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};

getData().then((data) => {
    data.results.forEach((show) => {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = show.title;
        container.append(paragraph);
    });
});
