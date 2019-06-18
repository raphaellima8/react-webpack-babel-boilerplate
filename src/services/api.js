import axios from 'axios';

const newAxios = axios.create({
  baseURL: 'https://mmartan-node-typescript-api.herokuapp.com/'
});

const fetchData = (uri, { search, limit, page }) => {
  return newAxios.get(uri, {
    params: { search, limit, page }
  });
};

export default fetchData;
