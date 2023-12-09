import axios from 'axios';

import { AUTHORIZATION_KEY } from '../../utils/auth/storage.constants';
import { getItemStorage, removeItemStorage } from '../../utils/auth/storage.proxy';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function authenticateUser({ email, password }) {
  return api.post('/login', { email, password }).then((res) => res.data);
}

export async function registerUser({ email, password }) {
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
  cep,
  state,
  city,
  neighborhood,
  street,
  number,
  complement,
}) {
  const token = await getItemStorage(AUTHORIZATION_KEY);
  if (!token) {
    return null;
  }

  return api
    .post(
      '/api/v1/events',
      {
        name,
        date,
        description,
        category,
        local: {
          cep,
          state,
          city,
          neighborhood,
          street,
          number,
          complement,
        },
      },
      { headers: { Authorization: `Bearer ${token}` } },
    )
    .then((res) => {
      if (!res.data) {
        return null;
      }

      return res.data;
    });
}

export async function getEventById(eventId) {
  return api.get(`/api/v1/events/${eventId}`).then((res) => {
    if (!res.data) {
      return null;
    }

    return res.data;
  });
}

// TODO implement filters

export async function fetchEventPage({ page, size, filters = {} }) {
  return api.get('/api/v1/events/page', { params: { page, size, ...filters } }).then((res) => {
    if (!res.data) {
      return null;
    }

    return res.data;
  });
}

export async function fetchCategories() {
  return api.get('/api/v1/categories').then((res) => {
    if (!res.data) {
      return null;
    }

    return res.data;
  });
}
