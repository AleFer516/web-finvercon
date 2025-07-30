import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/header';
import Inicio from './paginas/inicio';
import ServicioDetalle from './paginas/servicioDetalle'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios/:id" element={<ServicioDetalle />} />
        {/* puedes agregar más rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;
