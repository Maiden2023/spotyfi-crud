// src/pages/EditarGenero.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditarGenero = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    const fetchGenero = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/genero/${id}`);
        const genero = response.data.data;
        setNombre(genero.nombre);
      } catch (error) {
        alert('Error al cargar los datos del género');
      }
    };

    fetchGenero();
  }, [id]);

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
      await axios.put(`http://localhost:4000/genero/${id}`, {
        nombre,
        imagen: imagenNombre,
      });
      alert('Género editado exitosamente');
    } catch (error) {
      alert('Error al editar el género');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Género</h2>
      <input
        type="text"
        placeholder="Nombre del género"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
      <button type="submit">Guardar Cambios</button>
    </form>
  );
};

export default EditarGenero;
