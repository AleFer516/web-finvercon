import React from "react";
import { useParams } from "react-router-dom";
import servicios from "../datos/servicios.json";
import "../css/servicios.css";

function ServicioDetalle() {
  const { id } = useParams();
  const servicio = servicios.find((s) => s.id === id);

  if (!servicio) {
    return <h2 className="servicio-no-encontrado">Servicio no encontrado</h2>;
  }

  return (
    <div
      className="servicio-detalle"
      style={{ backgroundImage: "url('/imagenes/fondo-servicios.png')" }}
    >
      <div className="fondo-oscuro">
        <h1 className="titulo-servicio">{servicio.titulo}</h1>

        <p className="descripcion-servicio">{servicio.descripcion}</p>

        <div className="boton-contenedor">
          <button className="boton-cotizar">Cotizar</button>
        </div>
      </div>

      <div className="caracteristicas-servicio">
        <div className="columna-caracteristicas izquierda">
          {servicio.caracteristicas
            .slice(0, Math.ceil(servicio.caracteristicas.length / 2))
            .map((item, index) => (
              <div key={index} className="caracteristica-item">
                • {item}
              </div>
            ))}
        </div>
        <div className="columna-caracteristicas derecha">
          {servicio.caracteristicas
            .slice(Math.ceil(servicio.caracteristicas.length / 2))
            .map((item, index) => (
              <div key={index} className="caracteristica-item">
                • {item}
              </div>
            ))}
        </div>
      </div>
    </div> 
  );
}

export default ServicioDetalle; 
