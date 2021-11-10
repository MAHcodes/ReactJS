const API_KEY = process.env.REACT_APP_API_KEY;

const endpoints = {
    top250movie: `https://imdb-api.com/en/API/Top250Movies/${API_KEY}`,
};

export default endpoints;