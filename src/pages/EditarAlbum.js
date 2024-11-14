import React, { useState } from 'react';
import axios from 'axios';

const EditarAlbum = () => {
  const [id, setId] = useState('');
  const [titulo, setTitulo] = useState('');
  const [imagen, setImagen] = useState(null);
  const [artistaId, setArtistaId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imagenNombre = '';

    if (imagen) {
      const formData = new FormData();
      formData.append('file', imagen);

      try {
        const response = await axios.post('http://localhost:4000/img_album', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        imagenNombre = response.data.filename;
      } catch (error) {
        alert('Error al cargar la imagen');
        return;
      }
    }

    try {
      await axios.put(`http://localhost:4000/album/${id}`, { titulo, imagen: imagenNombre, artistaId });
      alert('Álbum editado exitosamente');
      setId('');
      setTitulo('');
      setImagen(null);
      setArtistaId('');
    } catch (error) {
      alert('Error al editar el álbum');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Álbum</h2>
      <input type="text" placeholder="ID Álbum" value={id} onChange={(e) => setId(e.target.value)} required />
      <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
      <input type="text" placeholder="ID Artista" value={artistaId} onChange={(e) => setArtistaId(e.target.value)} />
      <button type="submit">Editar</button>
    </form>
  );
};

export default EditarAlbum;
