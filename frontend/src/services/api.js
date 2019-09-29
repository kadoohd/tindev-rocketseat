import axios from 'axios';

const api = axios.create({
    //baseURL tem que ser maiusculo], senão ele tenta pegar a url da propria aplicacao
    baseURL: "http://localhost:3333"
})

export default api;