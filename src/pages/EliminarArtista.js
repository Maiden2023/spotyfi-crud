import React, { useState } from 'react';
import axios from 'axios';

const EliminarArtista = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/artista/${id}`);
      alert('Artista eliminado exitosamente');
      setId('');
    } catch (error) {
      alert('Error al eliminar el artista');
    }
  };

  return (
    <div>
      <h2>Eliminar Artista</h2>
      <input type="text" placeholder="ID Artista" value={id} onChange={(e) => setId(e.target.value)} required />
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default EliminarArtista;
