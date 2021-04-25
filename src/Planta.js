import { Typography } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router';
/*
export default class Planta extends React.Component{
    constructor(props){
        super(props);
        let jardines = localStorage.getItem('jardines');
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
}
*/
const Planta = (props) => {
    const { id } = useParams();

    const jardines = localStorage.getItem('jardines');
    // 1ero que todo, existe el jardín?
    if (jardines === null) {
        return (<Typography variant='h2' >Todo mal, no tienes ni jardines!</Typography>)
    }
    return (
        <React.Fragment>
            <Typography>Planta id: {id}</Typography>
        </React.Fragment>
    );
}

export default Planta;