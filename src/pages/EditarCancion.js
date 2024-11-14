// src/pages/EditarCancion.js
import React, { useState } from 'react';
import { updateCancion } from '../services/api';

const EditarCancion = ({ cancionId }) => {
  const [titulo, setTitulo] = useState('');
  const [archivo_mp3, setArchivoMp3] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCancion(cancionId, { titulo, archivo_mp3 });
    alert('Canción actualizada');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Canción</h2>
      <input placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
      <input placeholder="Archivo MP3" value={archivo_mp3} onChange={(e) => setArchivoMp3(e.target.value)} />
      <button type="submit">Actualizar Canción</button>
    </form>
  );
};

export default EditarCancion;
