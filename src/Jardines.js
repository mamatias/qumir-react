import React from 'react';
import { Button, Divider, Typography, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, TextField } from '@material-ui/core';

class DialogForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            texto: props.texto,
        }

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleClose() {
        this.setState({
            opened: false
        })
    }

    handleOpen() {
        this.setState({
            opened: true
        })
    }

    handleChange = (event) => {
        this.setState({
            texto: event.target.value,
            //opened: false
        })
    }

    handleSave() {
        this.props.onSave(this.state.texto);
        this.setState({
            texto: '',
            opened: false
        });
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.handleOpen}>Agregar Jardín</Button>
                <Dialog open={this.state.opened} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Crear nuevo jardín</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Un jardín permite llevar agrupadas las plantas monitorear.
                    </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Descripción"
                            type="email"
                            fullWidth
                            onChange={this.handleChange}
                        />
                        <Typography>{this.state.texto}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={this.handleSave} color="primary">
                            Guardar
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default class Jardines extends React.Component {
    constructor(props) {
        super(props);
        let jardines_l = localStorage.getItem('jardines');
        if (jardines_l === null) {
            jardines_l = [];
            localStorage.setItem('jardines', JSON.stringify(jardines_l));
        }
        else {
            jardines_l = JSON.parse(jardines_l);
        }

        this.state = {
            jardines_i: jardines_l, // Jardín en uso actual
            jardines_h: [], // Estructura ARRAY para almacenar jardines históricos (CTRL+Z)
        };

        this.agregarJardin = this.agregarJardin.bind(this);
    }

    generarUniqueId(){
        let uid = '';
        for(const i of Array(5).keys() ){
            uid = uid+(Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1));
        }
        return uid
    }

    agregarJardin(nombre) {
        // Hay que agregarlo al STATE y al LOCALSTORAGE
        /* STATE */
        //console.log('Jardín: '+nombre)
        const jardines_i = this.state.jardines_i;
        jardines_i.push({
            id: this.generarUniqueId(),
            nombre: nombre
        });
        this.setState({
            jardines_i: jardines_i
        });
        localStorage.setItem('jardines', JSON.stringify(this.state.jardines_i));
    }

    renderJardines() {
        let l = this.state.jardines_i.length;
        if (l > 0) {
            return (
                <React.Fragment>
                    <Typography>Con jardines</Typography>
                    <ul>
                        {this.state.jardines_i.map((jardin) => (
                            <li id={jardin.nombre} key={jardin.nombre}><Typography>{jardin.nombre}</Typography></li>
                        ))}
                    </ul>
                </React.Fragment>
            )
        }
        else {
            return (
                <Typography>Sin jardines</Typography>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <Typography>
                    Jardines ({this.state.jardines_i.length})
                </Typography>
                {this.renderJardines()}
                <Divider />
                <DialogForm
                    onSave={ this.agregarJardin }
                />
            </React.Fragment>
        )
    }
}