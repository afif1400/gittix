import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    //when we are on the server
    return axios.create({
      baseURL: 'http://www.gittix-micro.xyz',
      headers: req.headers,
    });
  } else {
    //when we are on the browser
    return axios.create({
      baseURL: '/',
    });
  }
};
