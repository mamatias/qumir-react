import React from 'react';
import { Box, Grid, IconButton, Typography } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const PlantaSimple = (props) => {
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
                        width={500} height={40}
                        bgcolor="white"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography>{props.nombre}</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Link to={'/planta/' + props.id + '?' + props.jardin_id} >
                        <IconButton >
                            <Edit />
                        </IconButton>
                    </Link>
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

export default PlantaSimple;