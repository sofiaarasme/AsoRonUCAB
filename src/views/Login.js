import React, { useState } from 'react';
import styles from './Login.css'
import { useNavigate } from 'react-router-dom'; 

export const Login = () => {

  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {

    setClicked(true);
    navigate('/Admin_Menu');
  };

  return (
    <>
    <div class = "container" id = "container">
    <div class = "form-container sing-up-container">
        <form>
            <h1>Inicia Sesión</h1>
            <span>o crea una cuenta para acceder</span>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Contraseña"/>
            <button onClick={handleButtonClick}>Acceder</button>

        </form>

  </div>
  </div>
    </>
  )
}
