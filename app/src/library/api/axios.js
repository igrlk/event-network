import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: `http://localhost:3000/`,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use(({ data }) => data, Promise.reject);

export default axiosInstance;
