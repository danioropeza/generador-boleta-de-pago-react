import React from 'react'; 
import { Button } from "semantic-ui-react";
import axios from "axios";

class PaginaBoletas extends React.Component {
    constructor(props) {
        super(props);
    }
    generarBoletasDePago() {
        axios.get('http://localhost:7001/generarboletasdepagos')
             .then(respuesta => alert(respuesta.data))
             .catch(error => console.log(error))
    }
    redireccionarAFormulario(url) {
        this.props.history.push('/' + url);
    }
    render(){
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <Button onClick={this.generarBoletasDePago} color="red" fluid>Generar Boleta</Button>
                    <br />
                    <Button onClick={this.redireccionarAFormulario.bind(this, "verboletas")} color="red" fluid>Ver lista de boleta</Button>
                </div>
            </div>
        );
    }
}
export default PaginaBoletas;

//<Button onClick={this.redireccionarAFormulario.bind(this, "enviarnotificacion")} color="red" fluid>Enviar Notificaciones</Button>