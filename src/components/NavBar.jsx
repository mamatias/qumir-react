import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
            <h1>Barra de navegación</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/jardines">Jardines</Link></li>
                <li><Link to="/plantas">Plantas</Link></li>
                <li><Link to="/sucesos">Sucesos</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;