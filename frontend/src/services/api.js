import axios from 'axios';

const url = 'localhost:8080';

export const Api = axios.create({
  baseURL: url,
});
