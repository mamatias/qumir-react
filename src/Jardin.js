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

    const actualizarStorage = (jardin_fn) => {
        // Seteo del estado
        setJardin(jardin_fn);
        // Guardarlo en el storage es un poco más difícil. Hay que abrir los jardines y "meterse" entremedio
        const jardines = JSON.parse(localStorage.getItem('jardines'));
        if (jardines != null) {
            // buscar el jardin con la id indicada
            const jardines_cp = [...jardines];
            const jardin_idx = jardines_cp.findIndex(jardin => jardin.id === id);
            if (jardin_idx >= 0) {
                // detectado el jardín, se expulsa el antiguo jardín y se "mete" el actualizado
                jardines_cp.splice(jardin_idx, 1);
                jardines_cp.push(jardin_fn);
                localStorage.setItem('jardines', JSON.stringify(jardines_cp));
            }
        }
    };

    const guardarNuevaPlanta = (nombre) => {
        const jardin_tr = { ...jardin };
        const planta_n = {
            id: generarUniqueId(),
            nombre: nombre,
            sucesos: {},
        };
        const plantas_tr = [...jardin.plantas]; // Copia el arreglo y permite el re-renderizado
        plantas_tr.push(planta_n);
        jardin_tr.plantas = plantas_tr;

        // Guardar jardín
        actualizarStorage(jardin_tr);
    };

    const borrarPlanta = (id) => {
        const jardin_tr = { ...jardin };
        const plantas_tr = [...jardin.plantas];
        let idx = plantas_tr.findIndex(planta => planta.id === id);
        if (idx >= 0) {
            plantas_tr.splice(idx, 1);
            jardin_tr.plantas = plantas_tr;
            
            // Guardar jardín
            actualizarStorage(jardin_tr);
        }
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
                            <DialogNewPlanta onSave={guardarNuevaPlanta} />
                        </Box>
                        <Divider />
                    </Grid>
                    {jardin.plantas.map(
                        (planta) => (<PlantaSimple nombre={planta.nombre} id={planta.id} key={planta.id} jardin_id={id} onDelete={borrarPlanta} />)
                        // En paréntesis redondo en el arrow func. Permite evitar hacer el return
                    )}
                </Grid>
            </React.Fragment>
        );
    }
}

export default Jardin;