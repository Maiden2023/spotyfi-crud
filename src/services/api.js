import axios from 'axios';


const BASE_URL = 'http://localhost:4000';

// Cancion CRUD
export const getCanciones = async () => axios.get(`${BASE_URL}/cancion`);
export const getCancion = async (id) => axios.get(`${BASE_URL}/cancion/${id}`);
export const createCancion = async (data) => axios.post(`${BASE_URL}/cancion`, data);
export const updateCancion = async (id, data) => axios.put(`${BASE_URL}/cancion/${id}`, data);
export const deleteCancion = async (id) => axios.delete(`${BASE_URL}/cancion/${id}`);

// Album CRUD
export const getAlbums = async () => axios.get(`${BASE_URL}/album`);
export const getAlbum = async (id) => axios.get(`${BASE_URL}/album/${id}`);
export const createAlbum = async (data) => axios.post(`${BASE_URL}/album`, data);
export const updateAlbum = async (id, data) => axios.put(`${BASE_URL}/album/${id}`, data);
export const deleteAlbum = async (id) => axios.delete(`${BASE_URL}/album/${id}`);

// Artista CRUD
export const getArtistas = async () => axios.get(`${BASE_URL}/artista`);
export const getArtista = async (id) => axios.get(`${BASE_URL}/artista/${id}`);
export const createArtista = async (data) => axios.post(`${BASE_URL}/artista`, data);
export const updateArtista = async (id, data) => axios.put(`${BASE_URL}/artista/${id}`, data);
export const deleteArtista = async (id) => axios.delete(`${BASE_URL}/artista/${id}`);

// Genero CRUD
export const getGeneros = async () => axios.get(`${BASE_URL}/genero`);
export const getGenero = async (id) => axios.get(`${BASE_URL}/genero/${id}`);
export const createGenero = async (data) => axios.post(`${BASE_URL}/genero`, data);
export const updateGenero = async (id, data) => axios.put(`${BASE_URL}/genero/${id}`, data);
export const deleteGenero = async (id) => axios.delete(`${BASE_URL}/genero/${id}`);
