import React from 'react';

export default class SucesoSimple extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const tstamp = this.props.suceso;
        const descripcion = this.props.suceso;
        const valor = this.props.suceso;
        return (
            <div className="suceso">
                <table>
                    <thead>
                        <tr>
                            <th>Unix Tstamp</th>
                            <th>Descripción</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{tstamp}</td>
                            <td>{descripcion}</td>
                            <td>{valor}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}