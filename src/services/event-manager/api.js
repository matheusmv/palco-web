import axios from 'axios';
import { getItemStorage, removeItemStorage } from '../../utils/auth/storage.proxy';
import { AUTHORIZATION_KEY } from '../../utils/auth/storage.constants';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function authenticateUser(email, password) {
  return api.post('/login', { email, password }).then((res) => res.data);
}

export async function registerUser(email, password) {
  return api.post('/api/v1/users', { email, password }).then((res) => res.data);
}

export async function checkToken() {
  const token = await getItemStorage(AUTHORIZATION_KEY);
  if (!token) {
    return null;
  }

  return api.get('/api/v1/users/me', { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
    if (!res.data) {
      removeItemStorage(AUTHORIZATION_KEY);
      return null;
    }

    return res.data;
  });
}

export async function registerEvent({
  name,
  date,
  description,
  category,
  local: { cep, state, city, neighborhood, street, number, complement },
}) {
  const token = await getItemStorage(AUTHORIZATION_KEY);
  if (!token) {
    return null;
  }

  const eventDetails = {
    name: name,
    date: date,
    description: description,
    category: category,
    local: {
      cep: cep,
      state: state,
      city: city,
      neighborhood: neighborhood,
      street: street,
      number: number,
      complement: complement,
    },
  };

  return api
    .post('/api/v1/events', { ...eventDetails }, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      if (!res.data) {
        return null;
      }

      return res.data;
    });
}
