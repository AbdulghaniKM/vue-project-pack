import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default {
  install: (app) => {
    app.config.globalProperties.$axios = Axios;
    app.provide('axios', Axios);
  },
};

export { Axios };
