import React from 'react'; 
import { Button } from "semantic-ui-react";
import axios from "axios";

class PaginaBoletas extends React.Component {
    constructor(props) {
        super(props);
    }
    generarComponentesDeBoletasDePago() {
        axios.get('http://localhost:7001/generadorBoletadepagos')
             .then(res => alert("Se creo un nuevo empleado"))
             .catch(error => console.log(error))
    }
    render(){
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <Button onClick={this.generarComponentesDeBoletasDePago} color="red" fluid>Generar Boleta</Button>
                    <br />
                    {[]}
                </div>
            </div>
        );
    }
}
export default PaginaBoletas;

//<Button onClick={this.redireccionarAFormulario.bind(this, "enviarnotificacion")} color="red" fluid>Enviar Notificaciones</Button>