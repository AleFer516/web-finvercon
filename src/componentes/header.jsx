import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './header.css';

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [mostrarDropdownServicios, setMostrarDropdownServicios] = useState(false);
  const [mostrarDropdownNosotros, setMostrarDropdownNosotros] = useState(false);

  return (
    <header className="header-fijo">
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src="/imagenes/logo.png" alt="Logo Finvercon" />
      </Link>

      <div className="menu-hamburguesa" onClick={() => setMenuAbierto(!menuAbierto)}>
        ☰
      </div>

      <nav className={menuAbierto ? 'menu abierto' : 'menu'}>
        <ul>
          <li><Link to="/">Inicio</Link></li>

          {/* Menú desplegable Nosotros */}
          <li
            className="dropdown"
            onMouseEnter={() => setMostrarDropdownNosotros(true)}
            onMouseLeave={() => setMostrarDropdownNosotros(false)}
          >
            <span>Nosotros ▾</span>
            {mostrarDropdownNosotros && (
              <ul className="dropdown-menu">
                <li><a href="/nosotros#historia">Historia</a></li>
                <li><a href="/nosotros#equipo">Equipo</a></li>
                <li><a href="/nosotros#colaboradores">Colaboradores</a></li>
              </ul>
            )}
          </li>

          {/* Menú desplegable Servicios */}
          <li
            className="dropdown"
            onMouseEnter={() => setMostrarDropdownServicios(true)}
            onMouseLeave={() => setMostrarDropdownServicios(false)}
          >
            <span>Servicios ▾</span>
            {mostrarDropdownServicios && (
              <ul className="dropdown-menu">
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
          </li>

          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/login">Iniciar sesión</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
