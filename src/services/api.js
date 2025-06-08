// api.js
import axios from 'axios';

// Point this at your ngrok URL as a plain string:
const BASE_URL = 'https://79cf-217-31-72-114.ngrok-free.app'

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    // ngrok free-plan: skip the HTML warning page
    'ngrok-skip-browser-warning': 'true',
  },
})

export async function fetchApartments() {
  const res = await API.get('/get_orders_and_photo_all/')
  return res.data
}

export const fetchApartmentById = (id) =>
  API.get(`/get_apartment_and_photo/${id}`)
     .then(res => res.data)

export const submitContact = (data) =>
  API.post('/orders/', data)
     .then(res => res.data)

