import React, { useEffect, useRef, useState } from "react";
import "../css/carruselColaboradores.css";
import Footer from "../componentes/footer";

const colaboradores = [
  { nombre: "LavaClean", imagen: "/imagenes/lavaclean-logo.jpg" },
  { nombre: "ClimairChile", imagen: "/imagenes/logo-climair.jpg" },
  { nombre: "LORTECH", imagen: "/imagenes/logo-lortech.jpg" },
  { nombre: "JJ Pérez", imagen: "/imagenes/logo-jjperez.jpg" },
  { nombre: "Rayo", imagen: "/imagenes/logo-rayo.jpg" },
  { nombre: "SD works", imagen: "/imagenes/logo-sdworks.jpg" },
  { nombre: "Rossette", imagen: "/imagenes/rossette-logo.jpeg" },
];

const MAX_VISIBLE = 4; // número de logos visibles a la vez

const CarruselColaboradores = () => {
  const [start, setStart] = useState(0);
  const intervalRef = useRef();

  // Avanza solo cada 2.5 segundos
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStart((prev) => (prev + 1) % colaboradores.length);
    }, 2500);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Permite moverlo manual haciendo click sobre una tarjeta
  const handleManual = (idx) => {
    setStart(idx);
    // Reinicia el autoplay al hacer click manual
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setStart((prev) => (prev + 1) % colaboradores.length);
    }, 2500);
  };

    // Renderiza MAX_VISIBLE logos a la vez
  const visible = [];
  for (let i = 0; i < MAX_VISIBLE; i++) {
    visible.push(colaboradores[(start + i) % colaboradores.length]);
  }

  return (
    <section className="colaboradores-section">
      <h2 className="colaboradores-titulo">Colaboradores</h2>
      <div className="carrusel-colaboradores">
        <div className="carrusel-lista">
          {visible.map((colab, idx) => (
            <div
              className="carrusel-item"
              key={colab.nombre + idx}
              onClick={() => handleManual((start + idx) % colaboradores.length)}
              style={{ cursor: "pointer" }}
              title={colab.nombre}
            >
              <img src={colab.imagen} alt={colab.nombre} />
            </div>
          ))}
        </div>
      </div>
    </section>
    );
  
};


export default CarruselColaboradores;
