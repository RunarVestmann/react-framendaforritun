const API_URL = 'https://www.boredapi.com/api/activity';

export const getActivity = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.activity;
};
