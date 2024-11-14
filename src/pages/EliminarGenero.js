// src/pages/EliminarGenero.js
import React, { useState } from 'react';
import axios from 'axios';

const EliminarGenero = () => {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`http://localhost:4000/genero/${id}`);
      alert('Género eliminado exitosamente');
      setId('');
    } catch (error) {
      alert('Error al eliminar el género');
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <h2>Eliminar Género</h2>
      <input
        type="text"
        placeholder="ID del género"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <button type="submit">Eliminar</button>
    </form>
  );
};

export default EliminarGenero;
