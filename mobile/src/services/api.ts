import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333', // Android
  // baseURL: 'http://localhost:3333', // iPhone
  // baseURL: 'http://{ip address}:3333', // Physical Device
});

export default api;
