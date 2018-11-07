import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://localhost:3000/',
});

export default axios;
