import logo from './logo.svg';
import './App.css';
import { Login } from './views/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Admin_Menu } from './views/Admin_Menu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Admin_Menu" element={<Admin_Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

