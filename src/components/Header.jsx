import React from 'react';
import './Header.css'

function Header({titulo}) {
    const edad = 17;
    const nombre = 'Luis';

    let mensaje = "";

    if (edad >= 18) {
        mensaje = "Eres mayor de edad"
    } else {
        mensaje = "Eres menor de edad"
    }
    return(
        <div className="header">
            {/* <h1 id="titulo">Saludos desde Header</h1>
            <h4>Hola {nombre}, tu edad es {edad}, entonces {mensaje}</h4> */}
            <h1>{titulo}</h1>
        </div>
    )
}

export default Header;