import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const api = axios.create({
  baseUrl: baseUrl,
})

export default api;