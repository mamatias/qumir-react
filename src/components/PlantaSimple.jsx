import React from 'react';

export default class PlantaSimple extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const jardin = this.props.jardin;
        const planta = this.props.planta;
        return (
            <div className="planta-simple">
                <p>Jardín: {jardin}</p>
                <p>Planta: {planta}</p>
            </div>
        );
    }
}