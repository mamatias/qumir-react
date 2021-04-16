import React from 'react';
import Home from './Home';
import Jardines from './Jardines';
import Plantas from './Plantas';
import Sucesos from './Sucesos';
import Creditos from './Creditos';
import { Route } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';

const App = () => {
    return (
        <CssBaseline>
            <Container maxWidth="md">
                <Route exact path='/' component={Home} />
                <Route exact path='/jardines' component={Jardines} />
                <Route exact path='/plantas' component={Plantas} />
                <Route exact path='/sucesos' component={Sucesos} />
                <Route exact path='/creditos' component={Creditos} />
            </Container>
        </CssBaseline>
    )
}


export default App;