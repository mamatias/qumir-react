import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@material-ui/core';

const DialogNewPlanta = (props) => {
    const [abierto, setAbierto] = useState(false);
    const [texto, setTexto] = useState(props.texto);

    // Funciones de manejo

    const manejarEstado = (st) => {
        setAbierto(st);  
    };

    const manejarCambio = (event) => {
        setTexto(event.target.value);
    };

    const manejarGuardar = () => {
        props.onSave(texto);
        setTexto('');
        setAbierto(false);
    };

    return (
        <React.Fragment>
            <Button onClick={() => manejarEstado(true)}>Agregar Planta</Button>
            <Dialog open={abierto} onClose={() => manejarEstado(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Crear nueva planta</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Una planta almacena una serie de acciones que definen su historia.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Descripción"
                        type="email"
                        fullWidth
                        onChange={manejarCambio}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => manejarEstado(false)} color="primary">
                        Cancelar
                        </Button>
                    <Button onClick={manejarGuardar} color="primary">
                        Guardar
                        </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default DialogNewPlanta;