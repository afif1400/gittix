import axios from 'axios';

export default ({ req }) => {
  console.log("window type", typeof window)
  if (typeof window === 'undefined') {
    //when we are on the server
    return axios.create({
      baseURL: 'https://geticket.com',
      headers: req.headers,
    });
  } else {
    //when we are on the browser
    return axios.create({
      baseURL: '/',
    });
  }
};
