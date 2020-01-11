import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://chitter-backend-api.herokuapp.com',
})

export default instance;