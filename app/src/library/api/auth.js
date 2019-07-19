import axios from '@api/axios';

export const register = payload => axios.post('/auth/registration', payload);

export const login = payload => axios.post('/auth/login', payload);
