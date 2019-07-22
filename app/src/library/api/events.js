import axios from '@api/axios';

export const getEvents = () => axios.get('/events');
