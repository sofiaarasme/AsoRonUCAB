import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom'; 

export const Login = () => {

  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {

    alert('¡Se hizo clic en el botón Registrarme!');
    setClicked(true);
    navigate('/Admin_Menu');
  };

  return (
    <>
    {/* <div>Login</div>
    <div style={{ margin: 'auto', backgroundColor: 'red' }}>iujnj
        <div style={{ margin: 'auto', backgroundColor: 'blue' }}>uymghumbg</div>
    </div> */}
    <div class = "container" id = "container">
    <div class = "form-container sing-up-container">
        <form>
            <h1>Crear Cuenta</h1>
            <span>o usa tu correo para registrarte</span>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Contraseña"/>
            <button onClick={handleButtonClick}>Registrarme</button>

        </form>

  </div>
  </div>
    </>
  )
}
