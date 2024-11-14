import React, { useState } from 'react';
import axios from 'axios';

const EliminarAlbum = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/album/${id}`);
      alert('Álbum eliminado exitosamente');
      setId('');
    } catch (error) {
      alert('Error al eliminar el álbum');
    }
  };

  return (
    <div>
      <h2>Eliminar Álbum</h2>
      <input type="text" placeholder="ID Álbum" value={id} onChange={(e) => setId(e.target.value)} required />
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default EliminarAlbum;
