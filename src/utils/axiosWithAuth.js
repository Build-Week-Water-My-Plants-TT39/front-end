import axios from 'axios';

const axiosWithAuth = () => {
  //grabbing token from browser
  const token = window.localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://greenthumbs-tt2.herokuapp.com/api',
    headers: {
      authorization: token,
    },
  });
};

export default axiosWithAuth;
