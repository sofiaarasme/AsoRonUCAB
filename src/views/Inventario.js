import React from 'react';
import styles from './Inventario.css';

export const Inventario = () => {
  return (
    <div className={styles['inventario-container']}>
      <button className={styles['inventario-tab-button']}>Resumen</button>
      <button className={styles['inventario-tab-button']}>Productos</button>
      <button className={styles['inventario-tab-button']}>Operaciones</button>
      <button className={styles['inventario-tab-button']}>Informes</button>
    </div>
  );
};
