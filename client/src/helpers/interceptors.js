import axios from 'axios';
import store from '../store/modules/auth';

export default function () {
  axios.interceptors.request.use((config) => {
    const { token } = store.getters;

    // eslint-disable-next-line
    if (token) config.headers.Authorization = token;
    return config;
  }, (err) => Promise.reject(err));
}
