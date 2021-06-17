import { Typography, Grid, Divider, Box } from '@material-ui/core'
import React, { useState } from 'react'
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import Cabecera from './components/Cabecera';
import RiegoSimple from './components/RiegoSimple';
import DialogNewRiego from './components/DialogNewRiego';

const Planta = (props) => {
    // Hooks de router
    const { id } = useParams();
    const location = useLocation();

    // Estados
    const [planta, setPlanta] = useState(() => {
        // Datos desde la URL
        const planta_id = id;
        const jardin_id = location.search.substring(1);

        // Obtenemos el jardín indicado
        const jardines = JSON.parse(localStorage.getItem('jardines'));
        if (jardines === null) return;

        const jardin = jardines.find(jardin => jardin.id === jardin_id);
        if (jardin === undefined) return;

        // Buscamos la planta indicada
        const planta_tr = jardin.plantas.find(planta => planta.id === planta_id);
        if (planta_tr === null) return;

        // === sucesos === //
        const sucesos = planta_tr.sucesos;
        if (planta_tr.sucesos === undefined) {
            planta_tr.sucesos = {
                hist_riego: [],
                hist_abono: [],
            };
            // Como no había sucesos, se inicializó y se retorna vacío
            return planta_tr;
        }

        // Buscamos historial de riego
        if (sucesos.hist_riego === undefined) {
            sucesos.hist_riego = []
        }

        // Buscamos historial de abono
        if (sucesos.hist_abono === undefined) {
            sucesos.hist_abono = []
        }

        // Finalmente se arma todo y se retorna
        return planta_tr;

    });

    // Utilidades
    console.log(JSON.stringify(planta));

    const jardines = localStorage.getItem('jardines');
    // 1ero que todo, existe el jardín?
    if (jardines === null) {
        return (<Typography variant='h2' >Todo mal, no tienes ni jardines!</Typography>)
    }

    // Existe la planta en el jardín indicado?
    if (planta === undefined) {
        return (<Typography variant='h2' >Todo mal, la planta indicada no existe en el jardín indicado!</Typography>)
    }

    // Retorno correcto
    return (
        <React.Fragment>
            <Cabecera titulo='Planta' subtitulo={planta.nombre} />
            <Grid container direction='column'>
                <Grid item>
                    <Divider />
                </Grid>
                <Grid container item>
                    <Grid item xs={12} sm={6}>
                        <Box display="flex" width="auto" height="auto" justifyContent="center">
                            <Typography>historial de riego</Typography>
                            <DialogNewRiego />
                            {planta.sucesos.hist_riego.map(
                                (riego) => (<RiegoSimple fecha={riego.fecha} cantidad={riego.cantidad} key={riego.id} />)
                                // En paréntesis redondo en el arrow func. Permite evitar hacer el return
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box display="flex" width="auto" height="auto" justifyContent="center">
                            <Typography>historial de abono</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );

}

export default Planta;