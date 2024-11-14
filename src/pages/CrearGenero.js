// src/pages/CrearGenero.js
import React, { useState } from 'react';
import axios from 'axios';

const CrearGenero = () => {
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imagenNombre = null;

    if (imagen) {
      const formData = new FormData();
      formData.append('file', imagen);

      try {
        const response = await axios.post('http://localhost:4000/img_genero', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        imagenNombre = response.data.filename;
      } catch (error) {
        alert('Error al cargar la imagen. Procediendo sin imagen.');
      }
    }

    try {
      await axios.post('http://localhost:4000/genero', {
        nombre,
        imagen: imagenNombre,
      });
      alert('Género creado exitosamente');
      setNombre('');
      setImagen(null);
    } catch (error) {
      alert('Error al crear el género');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Género</h2>
      <input
        type="text"
        placeholder="Nombre del género"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
      <button type="submit">Crear</button>
    </form>
  );
};

export default CrearGenero;
