// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CrearAlbum from './pages/CrearAlbum';
import EditarAlbum from './pages/EditarAlbum';
import EliminarAlbum from './pages/EliminarAlbum';
import CrearArtista from './pages/CrearArtista';
import EditarArtista from './pages/EditarArtista';
import EliminarArtista from './pages/EliminarArtista';
import CrearCancion from './pages/CrearCancion';
import EditarCancion from './pages/EditarCancion';
import EliminarCancion from './pages/EliminarCancion';
import CrearGenero from './pages/CrearGenero';
import EditarGenero from './pages/EditarGenero';
import EliminarGenero from './pages/EliminarGenero';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="contenido-principal">
          <Routes>
            {/* Rutas para Álbum */}
            <Route path="/crear-album" element={<CrearAlbum />} />
            <Route path="/editar-album" element={<EditarAlbum />} />
            <Route path="/eliminar-album" element={<EliminarAlbum />} />

            {/* Rutas para Artista */}
            <Route path="/crear-artista" element={<CrearArtista />} />
            <Route path="/editar-artista" element={<EditarArtista />} />
            <Route path="/eliminar-artista" element={<EliminarArtista />} />

            {/* Rutas para Canción */}
            <Route path="/crear-cancion" element={<CrearCancion />} />
            <Route path="/editar-cancion" element={<EditarCancion />} />
            <Route path="/eliminar-cancion" element={<EliminarCancion />} />

            {/* Rutas para Género */}
            <Route path="/crear-genero" element={<CrearGenero />} />
            <Route path="/editar-genero" element={<EditarGenero />} />
            <Route path="/eliminar-genero" element={<EliminarGenero />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
