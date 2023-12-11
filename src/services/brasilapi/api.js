import axios from 'axios';

const api = axios.create({
  baseURL: 'https://brasilapi.com.br/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetchAddressDetailsFromCep(cep) {
  return api
    .get(`/cep/v1/${cep}`)
    .then((res) => {
      const { cep, state, city, neighborhood, street } = res.data;
      return {
        cep: cep || '',
        state: state || '',
        city: city || '',
        neighborhood: neighborhood || '',
        street: street || '',
      };
    })
    .catch((err) => {
      console.error(err.response.data);
      return null;
    });
}
