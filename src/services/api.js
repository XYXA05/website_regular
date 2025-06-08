import axios from 'axios';

const API = axios.create({ baseURL: 'https://79cf-217-31-72-114.ngrok-free.app' });

export const fetchApartments = () =>
  API.get('/get_orders_and_photo_all/').then(res => res.data);

export const fetchApartmentById = id =>
  API.get(`/get_apartment_and_photo/${id}`).then(res => res.data);

export const submitContact = (data) =>
  API.post('/orders/', data).then(res => res.data);
