import React, { useState, useEffect } from "react";
import testimonios from "../funciones/testimonios";
import "../css/inicio.css";



function CarruselTestimonios() {
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      siguienteTestimonio();
    }, 7000); // cambia automáticamente cada 7 segundos

    return () => clearInterval(intervalo);
  }, []);

  const siguienteTestimonio = () => {
    setIndiceActual((prev) => (prev + 1) % testimonios.length);
  };

  const anteriorTestimonio = () => {
    setIndiceActual((prev) =>
      prev === 0 ? testimonios.length - 1 : prev - 1
    );
  };

  const testimonio = testimonios[indiceActual];

  return (
    <div className="carrusel-testimonio">
      <button className="flecha izquierda" onClick={anteriorTestimonio}>
        &#10094;
      </button>

      <div className="overlay">
        <p>“{testimonio.texto}”</p>
        <p>
          <strong>– {testimonio.nombre}, {testimonio.cargo}</strong>
        </p>
      </div>

      <button className="flecha derecha" onClick={siguienteTestimonio}>
        &#10095;
      </button>
    </div>
  );
}

export default CarruselTestimonios;
