import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://kitsu.io/api/edge',
    headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
    },
    timeout: 50000
});

export default instance;
