import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gateway.marvel.com',
    timeout: 30000
});

export default instance;