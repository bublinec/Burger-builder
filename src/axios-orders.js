import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerpub-b74df.firebaseio.com/'
});

export default instance;