import './App.css';
import { Login } from './views/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Admin_Menu } from './views/Admin_Menu';
import { Ventas } from './views/Ventas';
import { Sitio_Web } from './views/Sitio_Web';
import { Inventario } from './views/Inventario';
import { Clientes } from './views/Clientes';
import { Facturacion } from './views/Facturacion';
import { Eventos } from './views/Eventos';
import { Nomina } from './views/Nomina';
import { Diario } from './views/Diario';
import { Distribucion } from './views/Distribucion';
import { Compras } from './views/Compras';
import { Usuarios } from './views/Usuarios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Admin_Menu" element={<Admin_Menu />} />
        <Route path="/Ventas" element={<Ventas />} />
        <Route path="/Sitio Web" element={<Sitio_Web />} />
        <Route path="/Inventario" element={<Inventario />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Facturación" element={<Facturacion />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Nómina" element={<Nomina />} />
        <Route path="/Diario" element={<Diario />} />
        <Route path="/Distribución" element={<Distribucion />} />
        <Route path="/Compras" element={<Compras />} />
        <Route path="/Usuarios" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

