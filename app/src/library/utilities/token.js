import AsyncStorage from '@utilities/asyncStorage';

import axios from '@api/axios';

const name = 'token';

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return AsyncStorage.setItem(name, token);
};

export const checkForToken = async () => {
  const token = await AsyncStorage.getItem(name);

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return true;
  }

  return false;
};

export const removeToken = async () => {
  delete axios.defaults.headers.common['Authorization'];
  return AsyncStorage.removeItem(name);
};
