import axios from "axios";

const instance = axios.create({
    baseURL: "https://imdb-api.com/en/API/"
});

export default instance;