import React from 'react';
import Home from './Home';
import Jardines from './Jardines';
import Plantas from './Plantas';
import Sucesos from './Sucesos';
import Creditos from './Creditos';
import Planta from './Planta';
import Jardin from './Jardin';
import { Route } from 'react-router-dom';
import { CssBaseline, Container, Typography } from '@material-ui/core';

const App = () => {
    return (
        <CssBaseline>
            <Container maxWidth="md">
                <Route exact path='/' component={Home} />
                <Route exact path='/jardines' component={Jardines} />
                <Route exact path='/plantas' component={Plantas} />
                <Route exact path='/sucesos' component={Sucesos} />
                <Route exact path='/creditos' component={Creditos} />
                <Route path="/planta/:id" component={Planta} />
                <Route path="/jardin/:id" component={Jardin} />
                <Typography>Esto va fijo...</Typography>
            </Container>
        </CssBaseline>
    )
}


export default App;