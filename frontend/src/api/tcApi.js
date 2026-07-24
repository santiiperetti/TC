import apiClient from './client.js';

export const getPilotos = () => apiClient.get('/api/pilotos');

export const searchPilotos = (texto) =>
  apiClient.get('/api/pilotos/buscar', {
    params: { texto },
  });

export const getPilotoById = (id) => apiClient.get(`/api/pilotos/${id}`);

export const getGanadoresByYear = (year) => apiClient.get(`/api/resultados/${year}`);
