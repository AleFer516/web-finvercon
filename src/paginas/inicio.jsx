import React, { useState } from "react";
import "../css/inicio.css";
import Footer from "../componentes/footer";
import CarruselTestimonios from "../componentes/carruselTestimonios";
import { Link } from 'react-router-dom';


function Inicio() {
    const [mostrarServicios, setMostrarServicios] = useState(false);
  return (
    <>
      <section className="bienvenida" id="inicio">
        <div className="cuadro-oscuro">
          <h1>FINVERCON SPA</h1>
          <p>Soluciones contables para tu empresa</p>
          <button>Conoce más</button>
          <p>
            Sabemos que los temas tributarios pueden ser complejos, 
            por eso estamos aquí para ayudarte. En nuestra asesoría te acompañamos 
            en cada paso, ofreciéndote soluciones claras, actualizadas y adaptadas a 
            tu realidad. Queremos que te sientas tranquilo y respaldado, sabiendo que tus
            trámites están en buenas manos.
          </p>
        </div>
        <div className="botones-servicio">
          <div className="servicio-dropdown">
            <button onClick={() => setMostrarServicios(!mostrarServicios)}>
              Servicios ▾
            </button>
            {mostrarServicios && (
              <ul className="dropdown-servicio-lista">
                <li><Link to="/servicios/asesoria-contable">Asesorías contables</Link></li>
                <li><Link to="/servicios/asesoria-tributaria">Asesorías tributarias</Link></li>
                <li><Link to="/servicios/asesoria-financiera">Asesorías financieras</Link></li>
                <li><Link to="/servicios/asesoria-laboral">Asesorías laborales</Link></li>
                <li><Link to="/servicios/recursos-humanos">Recursos humanos</Link></li>
                <li><Link to="/servicios/servicios-contables">Servicios contables</Link></li>
                <li><Link to="/servicios/creacion-empresa">Creación empresa en un día SPA</Link></li>
                <li><Link to="/servicios/termino-giro">Término de Giro</Link></li>
                <li><Link to="/servicios/regularizacion-sii">Regularización SII</Link></li>
                <li><Link to="/servicios/auditoria-contable">Auditoría contable</Link></li>
              </ul>
            )}
          </div>

          <button>Solicitar asesoría</button>
          <button>Enviar consulta</button>
          <button>Contáctenos</button>
        </div>
      </section>

      <section className="nosotros" id="nosotros">
        <h2>Nosotros</h2>
        <p className="nosotros-intro">
          Somos una empresa especializada en asesorías contables, tributarias, laborales y financieras,
          orientada a apoyar a emprendedores, pymes y empresas consolidadas en su crecimiento y
          cumplimiento normativo en Chile.
        </p>
        <CarruselTestimonios />

        <div className="vision-valores">
          <div className="columna">
            <h3>Nuestra Visión</h3>
            <p>
              Ser una empresa referente a nivel nacional en asesorías empresariales, destacando por nuestro
              compromiso, profesionalismo y cercanía con cada cliente.
            </p>
          </div>

          <div className="columna">
            <h3>Nuestra Misión</h3>
            <p>
              Brindar soluciones integrales en contabilidad y gestión empresarial que ayuden a nuestros
              clientes a tomar decisiones acertadas, crecer con seguridad y cumplir con la normativa vigente.
            </p>
          </div>

          <div className="columna">
            <h3>Nuestros Valores</h3>
            <ul>
              <li>Responsabilidad</li>
              <li>Transparencia</li>
              <li>Compromiso</li>
              <li>Profesionalismo</li>
              <li>Confidencialidad</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Inicio;
