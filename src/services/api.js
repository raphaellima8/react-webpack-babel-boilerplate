import axios from 'axios';

const newAxios = axios.create({
  baseURL: 'https://mmartan-node-typescript-api.herokuapp.com/'
  // baseURL: 'http://localhost:5000/'
});

const fetchData = (uri, params) => newAxios.get(uri, { params });

export default fetchData;
