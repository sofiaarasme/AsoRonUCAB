import React from 'react';
import './Admin_Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Importa los iconos de FontAwesome que necesitas
import { faBriefcase, faGlobe, faLayerGroup, faEarthAmericas, faFaceSmile, faFileInvoice, faCalendarDays, faAddressBook, faNewspaper, faTruckFast, faCartShopping, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

// Agrega los iconos al library de FontAwesome
library.add(faBriefcase, faGlobe, faLayerGroup, faEarthAmericas, faFaceSmile, faFileInvoice, faCalendarDays, faAddressBook, faNewspaper, faTruckFast, faCartShopping, faUsers, faCog);

export const Admin_Menu = () => {
  let botones = [
    { icono: "briefcase", nombre: "Ventas" },
    { icono: "globe", nombre: "Sitio Web" },
    { icono: "layer-group", nombre: "Inventario" },
    { icono: "face-smile", nombre: "Clientes" },
    { icono: "file-invoice", nombre: "Facturación" },
    { icono: "calendar-days", nombre: "Eventos" },
    { icono: "address-book", nombre: "Nómina" },
    { icono: "newspaper", nombre: "Diario" },
    { icono: "truck-fast", nombre: "Distribución" },
    { icono: "cart-shopping", nombre: "Compras" },
    { icono: "users", nombre: "Usuarios" },
    { icono: "cog", nombre: "Otros" }
  ];

  // Colores para los botones
  const colores = [
    "#007bff",
    "#ff5733",
    "#33ff57",
    "#5733ff",
    "#ff3357",
    "#33ff99",
    "#ff9933",
    "#33ffff",
    "#ff66b2",
    "#9933ff",
    "#33cc33",
    "#ffcc33"
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="button-container">
            {botones.map((boton, index) => {
              const estiloBoton = {
                backgroundColor: colores[index % colores.length],
              };
              return (
                <div className="col-md-3 d-flex justify-content-center align-items-center" key={index}>
                  <button className="square-button" style={estiloBoton}>
                    <FontAwesomeIcon icon={boton.icono} />
                    <span className="button-name">{boton.nombre}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
