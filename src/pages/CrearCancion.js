import React, { useState } from 'react';
import axios from 'axios';

const CrearCancion = () => {
  const [titulo, setTitulo] = useState('');
  const [archivoMp3, setArchivoMp3] = useState(null);
  const [albumId, setAlbumId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let archivoMp3Nombre = '';

    if (archivoMp3) {
      const formData = new FormData();
      formData.append('file', archivoMp3);

      try {
        const response = await axios.post('http://localhost:4000/musica', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        archivoMp3Nombre = response.data.filename;
      } catch (error) {
        alert('Error al cargar el archivo de música');
        return;
      }
    }

    try {
      await axios.post('http://localhost:4000/cancion', { titulo, archivo_mp3: archivoMp3Nombre, albumId });
      alert('Canción creada exitosamente');
      setTitulo('');
      setArchivoMp3(null);
      setAlbumId('');
    } catch (error) {
      alert('Error al crear la canción');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Canción</h2>
      <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
      <input type="file" onChange={(e) => setArchivoMp3(e.target.files[0])} />
      <input type="text" placeholder="ID Álbum" value={albumId} onChange={(e) => setAlbumId(e.target.value)} required />
      <button type="submit">Crear</button>
    </form>
  );
};

export default CrearCancion;
