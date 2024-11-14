import React, { useState } from 'react';
import axios from 'axios';

const EditarArtista = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState(null);
  const [generoId, setGeneroId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imagenNombre = '';

    if (imagen) {
      const formData = new FormData();
      formData.append('file', imagen);

      try {
        const response = await axios.post('http://localhost:4000/img_artista', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        imagenNombre = response.data.filename;
      } catch (error) {
        alert('Error al cargar la imagen');
        return;
      }
    }

    try {
      await axios.put(`http://localhost:4000/artista/${id}`, { nombre, imagen: imagenNombre, generoId });
      alert('Artista editado exitosamente');
      setId('');
      setNombre('');
      setImagen(null);
      setGeneroId('');
    } catch (error) {
      alert('Error al editar el artista');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Artista</h2>
      <input type="text" placeholder="ID Artista" value={id} onChange={(e) => setId(e.target.value)} required />
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
      <input type="text" placeholder="ID Género" value={generoId} onChange={(e) => setGeneroId(e.target.value)} />
      <button type="submit">Editar</button>
    </form>
  );
};

export default EditarArtista;
