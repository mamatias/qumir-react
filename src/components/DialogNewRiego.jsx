import 'date-fns';
import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const DialogNewRiego = (props) => {
    const [abierto, setAbierto] = useState(false);
    const [texto, setTexto] = useState(props.texto);
    const [fecha, setFecha] = useState(new Date());

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
            <Button variant="contained" color="primary" disableElevation onClick={() => manejarEstado(true)}>Registrar riego</Button>
            <Dialog open={abierto} onClose={() => manejarEstado(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Registrar suceso de riego</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Registro de un suceso de riego. Se registra la fecha y cantidad dosificada.
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
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={fecha}
                                onChange={setFecha}
                                okLabel="ok"
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
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

export default DialogNewRiego;