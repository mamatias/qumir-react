import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import SucesoSimple from './components/SucesoSimple';
import PlantaSimple from './components/PlantaSimple';

class NavBar extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <nav>
        <button><i className="fas fa-globe-americas"></i> Jardines</button>
        <button><i className="fas fa-seedling"></i> Plantas</button>
        <button onClick = {() => {this.props.onClick()}}><i className="fas fa-umbrella-beach"></i> Sandbox</button>
      </nav>
    )
  }
}

class AppWrapper extends React.Component {
  constructor(props){
      super(props);
      this.state = {interfaz : null};
  }

  // Método para manejar pantallas (abrir ventanas)
  manejarInterfaz(interfaz_th){
    this.setState(
      {interfaz : interfaz_th}
    )
  }

  render() {
      const interfaz = this.state.interfaz;

      if(interfaz === 'inicio'){
        return (
          <div className="wrapper">
            <NavBar
              onClick={() => this.manejarInterfaz('planta')}
            />
            <div className="area-principal">
              <h1>VENTANA NO/MAL DEFINIDA</h1>
              <h3>=== {this.state.interfaz} ===</h3>
            </div>
          </div>    
        )
      }
      else if(interfaz === 'planta'){
        return (
          <div className="wrapper">
            <NavBar
              onClick={() => this.manejarInterfaz('planta')}
            />
            <PlantaSimple
              jardin={'Indoor'}
              planta={'Think Different'}
            />
          </div>
        )
      }
      else{
        return (
          <div className="wrapper">
            <NavBar
              onClick={() => this.manejarInterfaz('planta')}
            />
            <div className="area-principal">
              <h1>VENTANA NO/MAL DEFINIDA</h1>
              <h3>=== {this.state.interfaz} ===</h3>
            </div>
          </div>    
        )
      }
  }
}

ReactDOM.render(
  <AppWrapper/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
