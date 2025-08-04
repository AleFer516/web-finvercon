import "../css/nosotros.css";
import React, { useState } from "react";
import Footer from "../componentes/footer";
import CarruselColaboradores from "../componentes/carruselColaboradores";


const porquePuntos = [
  {
    titulo: "Atención personalizada",
    texto: "Ofrecemos asesoría y acompañamiento adaptado a las necesidades específicas de cada cliente.",
    icono: "atencion-personalizada.png"
  },
  {
    titulo: "Experiencia comprobada",
    texto: "Contamos con años de trayectoria y un equipo con amplio conocimiento en contabilidad y gestión empresarial.",
    icono: "experiencia-comprobada.png"
  },
  {
    titulo: "Transparencia y confianza",
    texto: "Mantenemos una comunicación clara y ética en todas nuestras gestiones, generando confianza a largo plazo.",
    icono: "transparencia-confianza.png"
  },
  {
    titulo: "Equipo especializado",
    texto: "Nuestro equipo está conformado por expertos en cada área, asegurando respuestas acertadas y actualizadas.",
    icono: "equipo-especializado.png"
  },
  {
    titulo: "Respuesta oportuna",
    texto: "Nos comprometemos a responder con rapidez y eficiencia a cualquier consulta o requerimiento.",
    icono: "respuesta-oportuna.png"
  },
  {
    titulo: "Actualización constante",
    texto: "Nos mantenemos al día con las normativas y mejores prácticas para ofrecer soluciones actuales y pertinentes.",
    icono: "actualizacion-constante.png"
  },
];

const Nosotros = () => {
const [popoverIndex, setPopoverIndex] = useState(null);

const handlePuntoClick = (idx) => {
  setPopoverIndex(idx === popoverIndex ? null : idx);
};

  return (
    <div>
      {/* Sección Historia */}
      <div id="historia" className="nosotros-container">
        <div className="historia-content">
          <div className="historia-imagen">
            <img src="/imagenes/historia-finvercon.png" alt="Historia Finvercon" />
          </div>
          <div className="historia-texto">
            <h2>Historia de la empresa</h2>
            <p>
              Finvercon nació en 2015 con el objetivo de entregar soluciones contables confiables y cercanas a empresas de todos los rubros. Desde nuestros inicios, hemos crecido acompañando a nuestros clientes en cada etapa, enfocándonos en brindar un servicio personalizado, responsable y de excelencia.<br /><br />
              A lo largo de estos años, hemos tenido el privilegio de apoyar a pymes, emprendimientos y grandes compañías, entregando asesoría integral y respuestas oportunas a sus necesidades tributarias, contables y financieras. Nuestro compromiso es seguir creciendo junto a nuestros clientes, manteniendo siempre la calidad y el profesionalismo que nos caracteriza.
            </p>
          </div>
        </div>
      </div>

      {/* Sección Equipo */}
      <section id="equipo" className="equipo-container">
        <h2>Nuestro equipo</h2>
        <p className="equipo-descripcion">
          En Finvercon creemos que el éxito de nuestros clientes es el reflejo del compromiso y profesionalismo de nuestro equipo. Contamos con un grupo de especialistas en contabilidad, tributación y finanzas, dedicados a entregar asesoría personalizada y soluciones eficientes para cada empresa.
        </p>
        <div className="equipo-grid">
            <div className="equipo-card">
            <div className="equipo-foto-container">
                <img src="/imagenes/foto-genesis.png" alt="Genesis Enrique" className="equipo-foto" />
            </div>
            <div className="equipo-nombre">Genesis Enrique</div>
            <div className="equipo-cargo">Recursos humanos</div>
            </div>

            <div className="equipo-card">
            <div className="equipo-foto-container">
                <img src="/imagenes/foto-victor.jpg" alt="Victor Orellana" className="equipo-foto" />
            </div>
            <div className="equipo-nombre">Victor Orellana</div>
            <div className="equipo-cargo">Jefe de contabilidad</div>
            </div>

            <div className="equipo-card">
            <div className="equipo-foto-container">
                <img src="/imagenes/foto-stefano.jpg" alt="Stefano Muñoz" className="equipo-foto" />
            </div>
            <div className="equipo-nombre">Stefano Muñoz</div>
            <div className="equipo-cargo">Gerente general</div>
          </div>

            <div className="equipo-card">
            <div className="equipo-foto-container">
                <img src="/imagenes/foto-patricio.png" alt="Patricio Muñoz" className="equipo-foto" />
            </div>
            <div className="equipo-nombre">Patricio Muñoz</div>
            <div className="equipo-cargo">Recursos humanos</div>
            </div>

            <div className="equipo-card">
            <div className="equipo-foto-container">
                <img src="/imagenes/foto-monica.png" alt="Monica Poveda" className="equipo-foto" />
            </div>
            <div className="equipo-nombre">Monica Poveda</div>
            <div className="equipo-cargo">Asistente contable</div>
          </div>
        </div>
      </section>

      {/* Sección Por qué escoger Finvercon */}
        <section className="porque-finvercon">
        <h2>¿Por qué escoger Finvercon?</h2>
        <div className="porque-grid">
            {porquePuntos.map((punto, idx) => (
            <div
                key={punto.titulo}
                className={`porque-card${popoverIndex === idx ? ' abierta' : ''}`}
                onClick={() => handlePuntoClick(idx)}
            >
                <div className="porque-card-header">
                <img
                    src={`/imagenes/${punto.icono}`}
                    alt={`Icono ${punto.titulo}`}
                    className="porque-icono"
                />
                <span className="porque-card-title">{punto.titulo}</span>
                </div>
                <div className="porque-card-popover">
                {popoverIndex === idx && punto.texto}
                </div>
            </div>
            ))}
        </div>
        </section>
        <section id="colaboradores">
        <CarruselColaboradores />
        </section>
        <Footer />
        </div>
        
  );
  
};


export default Nosotros;
