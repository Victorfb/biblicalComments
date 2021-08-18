import axios from 'axios';

const baseURL = 'http://64.227.29.80';
const timeout = 20000;

const api = axios.create({
  baseURL,
  timeout,
});

export default api;
