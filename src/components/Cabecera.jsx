import { Box, Typography } from '@material-ui/core';
import React from 'react';

const Cabecera = (props) => {
    return (
        <React.Fragment >
            <Box display='flex'
                width='auto'
                height={250}
                alignItems='center'
                justifyContent='center'
            >
                <Typography variant='h1'>{props.titulo}</Typography>
                <Typography variant='h3'>{props.subtitulo}</Typography>
            </Box>
        </React.Fragment >
    );
}

export default Cabecera;