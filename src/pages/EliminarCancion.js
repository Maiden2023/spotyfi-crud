import React, { useState } from 'react';
import axios from 'axios';

const EliminarCancion = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/cancion/${id}`);
      alert('Canción eliminada exitosamente');
      setId('');
    } catch (error) {
      alert('Error al eliminar la canción');
    }
  };

  return (
    <div>
      <h2>Eliminar Canción</h2>
      <input type="text" placeholder="ID Canción" value={id} onChange={(e) => setId(e.target.value)} required />
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default EliminarCancion;
