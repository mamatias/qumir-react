import { Box, Divider, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import DialogNewJardin from './components/DialogNewJardin';
import JardinSimple from './components/JardinSimple';
import Cabecera from './components/Cabecera';

const Jardines = (props) => {
  // Declaración de estados
  const [jardines, setJardines] = useState(
    localStorage.getItem('jardines') === null ?
      () => {
        localStorage.setItem('jardines', JSON.stringify([]));
        return [];
      } :
      JSON.parse(localStorage.getItem('jardines'))
  );

  // utilidades

  const generarUniqueId = () => {
    let uid = '';
    let i;
    for (i = 0; i < 5; i++) {
      uid = uid + (Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1));
    }
    return uid
  }

  const actualizarStorage = (jardines_fn) => {
    setJardines(jardines_fn);
    localStorage.setItem('jardines', JSON.stringify(jardines_fn));
  };

  const guardarNuevoJardin = (nombre) => {
    const jardin_n = {
      id: generarUniqueId(),
      nombre: nombre,
    };
    const jardines_tr = [...jardines]; // Copia el arreglo y permite el re-renderizado
    jardines_tr.push(jardin_n);

    // Guardar jardines
    actualizarStorage(jardines_tr);
  };

  const borrarJardin = (id) => {
    const jardines_tr = [...jardines];
    let idx = jardines_tr.findIndex(jardin => jardin.id === id);
    if (idx >= 0) {
      jardines_tr.splice(idx, 1);

      // Guardar jardines
      actualizarStorage(jardines_tr);
    }
  }

  return (
    <React.Fragment>
      <Grid container direction='column'>
        <Cabecera titulo='Jardines' subtitulo='' />
        <Grid item>
          <Divider />
          <Box
            display="flex"
            width='auto' height={80}
            alignItems="center"
            justifyContent="center"
          >
            <DialogNewJardin onSave={guardarNuevoJardin} />
          </Box>
          <Divider />
        </Grid>
        {jardines.map(
          (jardin) => (<JardinSimple nombre={jardin.nombre} id={jardin.id} key={jardin.id} onDelete={borrarJardin} />)
          // En paréntesis redondo en el arrow func. Permite evitar hacer el return
        )}
      </Grid>
    </React.Fragment>
  )
}

export default Jardines;