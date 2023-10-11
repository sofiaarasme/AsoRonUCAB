import React, { useState } from 'react';
import './Inventario.css';

function Resumen() {
  return <div>Contenido de Resumen</div>;
}

function Productos() {
  return <div>Contenido de Productos</div>;
}

function Operaciones() {
  return <div>Contenido de Operaciones</div>;
}

function Informes() {
  return <div>Contenido de Informes</div>;
}

export const Inventario = () => {
  const [tab, setTab] = useState('resumen'); // Inicia con "Resumen" seleccionado

  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
  };

  return (
    <div className='inventario-container'>
      <div className='tab-buttons'>
        <button
          className={`inventario-tab-button ${tab === 'resumen' ? 'selected' : ''}`}
          onClick={() => handleTabClick('resumen')}
        >
          Resumen
        </button>
        <button
          className={`inventario-tab-button ${tab === 'productos' ? 'selected' : ''}`}
          onClick={() => handleTabClick('productos')}
        >
          Productos
        </button>
        <button
          className={`inventario-tab-button ${tab === 'operaciones' ? 'selected' : ''}`}
          onClick={() => handleTabClick('operaciones')}
        >
          Operaciones
        </button>
        <button
          className={`inventario-tab-button ${tab === 'informes' ? 'selected' : ''}`}
          onClick={() => handleTabClick('informes')}
        >
          Informes
        </button>
      </div>

      <div className='tab-content'>
        {tab === 'resumen' && <Resumen />}
        {tab === 'productos' && <Productos />}
        {tab === 'operaciones' && <Operaciones />}
        {tab === 'informes' && <Informes />}
      </div>
    </div>
  );
};
