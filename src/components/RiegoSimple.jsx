import React from 'react';
import { Box, Grid, IconButton, Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons';

const RiegoSimple = (props) => {
    // Funciones de manejo
    const manejarBorrar = (id) => {
        props.onDelete(id);
    }

    return (
        <React.Fragment>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                id={props.id}
                key={props.id}
            >
                <Grid item>
                <Box
                        display="flex"
                        width="auto" height={40}
                        bgcolor="pink"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography>{props.fecha}</Typography>
                    </Box>
                    <Box
                        display="flex"
                        width="auto" height={40}
                        bgcolor="pink"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography>{props.cantidad} [ml]</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <IconButton onClick={
                        () => { manejarBorrar(props.id) }
                    }>
                        <Delete />
                    </IconButton>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default RiegoSimple;