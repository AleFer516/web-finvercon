import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/header';
import Inicio from './paginas/inicio';
import ServicioDetalle from './paginas/servicioDetalle';
import ScrollToHash from "./componentes/scrollToHash";
import Nosotros from './paginas/nosotros'; // <--- Importa tu componente aquí

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios/:id" element={<ServicioDetalle />} />
        <Route path="/nosotros" element={<Nosotros />} /> {/* <--- Nueva ruta */}
        {/* puedes agregar más rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;
