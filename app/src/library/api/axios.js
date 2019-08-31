import Axios from 'axios';

import { removeToken } from '@utilities/token';
import { navigate } from '@utilities/navigator';

const axiosInstance = Axios.create({
  baseURL: `http://localhost:3000/`,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use(({ data }) => data, Promise.reject);
axiosInstance.interceptors.response.use(
  config => config,
  error => {
    if (error.response.status === 401) {
      removeToken();
      navigate('Login');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
