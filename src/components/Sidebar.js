// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Opciones CRUD</h2>
      <ul>
        {/* Opciones para Álbum */}
        <li><Link to="/crear-album">Crear Álbum</Link></li>
        <li><Link to="/editar-album">Editar Álbum</Link></li>
        <li><Link to="/eliminar-album">Eliminar Álbum</Link></li>

        {/* Opciones para Artista */}
        <li><Link to="/crear-artista">Crear Artista</Link></li>
        <li><Link to="/editar-artista">Editar Artista</Link></li>
        <li><Link to="/eliminar-artista">Eliminar Artista</Link></li>

        {/* Opciones para Canción */}
        <li><Link to="/crear-cancion">Crear Canción</Link></li>
        <li><Link to="/editar-cancion">Editar Canción</Link></li>
        <li><Link to="/eliminar-cancion">Eliminar Canción</Link></li>

        {/* Opciones para Género */}
        <li><Link to="/crear-genero">Crear Género</Link></li>
        <li><Link to="/editar-genero">Editar Género</Link></li>
        <li><Link to="/eliminar-genero">Eliminar Género</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
