import React from 'react';
import NavBar from './components/NavBar';
import Home from './Home';
import Jardines from './Jardines';
import Plantas from './Plantas';
import Sucesos from './Sucesos';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <NavBar />
            <Route exact path='/' component={Home} />
            <Route exact path='/jardines' component={Jardines} />
            <Route exact path='/plantas' component={Plantas} />
            <Route exact path='/sucesos' component={Sucesos} />
        </div>
    )
}


export default App;