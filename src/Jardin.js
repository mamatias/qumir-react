import { Grid, Divider, Box } from '@material-ui/core'
import React, { useState } from 'react'
import { useParams } from 'react-router';
import Cabecera from './components/Cabecera';
import DialogNewPlanta from './components/DialogNewPlanta';
import PlantaSimple from './components/PlantaSimple';

const Jardin = (props) => {
    // Hooks de router
    const { id } = useParams();

    // Estados
    const [jardin, setJardin] = useState(() => {
        // Obtenemos el jardín indicado
        const jardines = JSON.parse(localStorage.getItem('jardines'));
        if (jardines != null) {
            // buscar el jardin con la id indicada
            const jardines_cp = [...jardines];
            const jardin = jardines_cp.find(jardin => jardin.id === id);
            if (jardin != null) {
                // detectado el jardín, a buscar las plantas
                if (jardin.plantas === undefined) {
                    jardin.plantas = []
                }
                return jardin;
            }
        }
    });

    // utilidades
    const generarUniqueId = () => {
        let uid = '';
        let i;
        for (i = 0; i < 3; i++) {
            uid = uid + (Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1));
        }
        return uid
    }

    if (jardin === undefined) {
        return (
            <React.Fragment>
                <Cabecera titulo='Jardin' subtitulo='Jardín no encontrado.' />
                <Grid container direction='column'>
                    <Grid item>
                        <Divider />
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                <Cabecera titulo='Jardin' subtitulo={jardin.nombre} />
                <Grid container direction='column'>
                    <Grid item>
                        <Divider />
                        <Box
                            display="flex"
                            width='auto' height={80}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <DialogNewPlanta />
                        </Box>
                        <Divider />
                    </Grid>
                    {jardin.plantas.map(
                        (planta) => (<PlantaSimple nombre={planta.nombre} id={planta.id} key={planta.id} />)
                        // En paréntesis redondo en el arrow func. Permite evitar hacer el return
                    )}
                </Grid>
            </React.Fragment>
        );
    }
}

export default Jardin;